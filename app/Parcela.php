<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Parcela extends Model {

	protected $fillable = [
		'nro_parcela',
		'valor',
		'valor_pago',
		'valor_original',
		'data_vencimento',
		'data_recebimento',
		'valor_desconto',
		'baixada',
		'conta_id'
	];

	protected $table = 'parcelas_receber_pagar';

	protected $dates = ['data_recebimento', 'data_vencimento', 'updated_at', 'created_at'];

	public function setDataVencimentoAttribute($value) {
		if (strlen($value) > 0) {
			try {
				$this->attributes['data_vencimento'] = Carbon::createFromFormat('d/m/Y', $value);
			} catch (\Exception $e) {
				$this->attributes['data_vencimento'] = date('Y-m-d');
			}
		} else {
			return null;
		}
	}

	public function getTotalDia($tipo, $dia) {
		$query = $this->newQuery();
		$query->join('contas_receber_pagar as conta', 'conta.id', '=', 'parcelas_receber_pagar.conta_id')
		      ->where('tipo_operacao', $tipo)
		      ->where('baixada', '0');
		return $query->with('conta')->get();
	}

	public function getDataVencimentoAttribute($value) {
		if (strlen($value) > 0) {
			try {
				return (new Carbon($value))->format('d/m/Y');
			} catch (\Exception $e) {
				return $value;
			}
		} else {
			return null;
		}
	}

	public function getDataRecebimentoAttribute($value) {
		if (strlen($value) > 0) {
			return (new Carbon($value))->format('d/m/Y');
		} else {
			return null;
		}
	}

	public function setDataRecebimentoAttribute($value) {
		if (strlen($value) > 0) {
			try {
				$this->attributes['data_recebimento'] = Carbon::createFromFormat('d/m/Y', $value);
			} catch (\Exception $e) {
				$this->attributes['data_recebimento'] = date('Y-m-d');
			}
		} else {
			return null;
		}
	}

	public function setValorAttribute($value) {
		if (substr_count($value, ',') == 0) {
			return $this->attributes['valor'] = $value;
		} else {
			return $this->attributes['valor'] = formatValueForMysql($value);
		}
	}

	public function setValorOriginalAttribute($value) {
		if (substr_count($value, ',') == 0) {
			return $this->attributes['valor_original'] = $value;
		} else {
			return $this->attributes['valor_original'] = formatValueForMysql($value);
		}
	}

	public function conta() {
		return $this->belongsTo(Conta::class , 'conta_id');
	}

}
