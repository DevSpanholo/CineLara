<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Webpatser\Uuid\Uuid;

class Conta extends Model {

	protected $fillable = [
		'fornecedor_id',
		'user_id',
		'titulo',
		'data_emissao',
		'vlr_total',
		'vlr_restante',
		'qtd_parcelas',
		'observacao',
		'tipo_operacao', // P ou R
		'qtd_dias'
	];

	protected $table = 'contas_receber_pagar';
	
	public function fornecedor() {
		return $this->belongsTo(Fornecedor::class );
	}

	public function setTituloAttribute($value) {
		if ($value == '' || $value == null) {
			return $this->attributes['titulo'] = strtoupper(substr(Uuid::generate(), 0, 7));
		}
		return $this->attributes['titulo'] = $value;
	}

	public function setVlrTotalAttribute($value) {
		if (str_contains($value, ',')) {
			return $this->attributes['vlr_total'] = formatValueForMysql($value);
		}
		return $this->attributes['vlr_total'] = $value;
	}

	public function setVlrRestanteAttribute($value) {
		if (str_contains($value, ',')) {
			return $this->attributes['vlr_restante'] = formatValueForMysql($value);
		}
		return $this->attributes['vlr_restante'] = $value;
	}

	public function user() {
		return $this->belongsTo(User::class );
	}

	public function parcelas() {
		return $this->hasMany(Parcela::class );
	}

	public function parcelasPagas() {
		return $this->hasMany(Parcela::class )->where('baixada', '1');
	}

	public function getDataEmissaoAttribute($value) {
		return (new Carbon($value))->format('d/m/Y');

	}

	public function setDataEmissaoAttribute($value) {
		if (strlen($value) > 0) {
			try {
				$this->attributes['data_emissao'] = Carbon::createFromFormat('d/m/Y', $value);
			} catch (\Exception $e) {
				$this->attributes['data_emissao'] = date('Y-m-d');
			}
		} else {
			return null;
		}
	}

	public function getRelatorioReceberPagar($atraso, $tipo, $fornecedorId, $vencimentoInicial, $vencimentoFinal, $emissaoInicial, $emissaoFinal, $dataBase) {
		$query = $this->newQuery()
			->join('parcelas_receber_pagar', 'parcelas_receber_pagar.conta_id', '=', 'contas_receber_pagar.id')
			->join('fornecedor', 'fornecedor.id', '=', 'contas_receber_pagar.fornecedor_id')
			->where('contas_receber_pagar.tipo_operacao', $tipo)
			->with('fornecedor')
			->with(['parcelas' => function ($query) use ($vencimentoInicial, $vencimentoFinal, $atraso, $dataBase) {
					$query->where('baixada', '=', DB::raw("0"));
					if (!is_null($atraso)) {
						$query->where(DB::raw('DATE (parcelas_receber_pagar.data_vencimento)'), '<', DB::raw("'$dataBase'"));
					}
					if (!is_null($vencimentoInicial) && !is_null($vencimentoFinal)) {
						$query->where(DB::raw('DATE (parcelas_receber_pagar.data_vencimento)'), '>=', DB::raw("'$vencimentoInicial'"));
						$query->where(DB::raw('DATE (parcelas_receber_pagar.data_vencimento)'), '<=', DB::raw("'$vencimentoFinal'"));
					}
				}])
			->select(DB::raw("contas_receber_pagar.*, CONCAT(if(fornecedor.razao_social is null,'',fornecedor.razao_social)) as nomefornecedor, fornecedor.id as idfornecedor"))
			->groupBy('contas_receber_pagar.id')
			->orderBy('nomefornecedor', 'asc')
			->orderBy('idfornecedor', 'asc');

		if (!is_null($emissaoInicial) && !is_null($emissaoFinal)) {
			$query->where(DB::raw('DATE (contas_receber_pagar.created_at)'), '>=', DB::raw("'$emissaoInicial'"));
			$query->where(DB::raw('DATE (contas_receber_pagar.created_at)'), '<=', DB::raw("'$emissaoFinal'"));
		}

		if ($fornecedorId == null) {
			return $query->get();
		} else {
			return $query->where('fornecedor_id', $fornecedorId)->get();
		}
	}

	public function getValor($tipo) {
		return $this->newQuery()
			->where('contas_receber_pagar.tipo_operacao', $tipo)
			->get();
	}

}
