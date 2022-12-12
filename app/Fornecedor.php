<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fornecedor extends Model {
	protected $table = 'fornecedor';

	protected $fillable = [
		'razao_social',
		'fantasia',
		'cnpj',
		'ie',
		'ativo',
		'fone',
		'email',
		'endereco',
		'cep',
		'endereco_nro',
		'bairro',
		'complemento',
		'cidade',
	];

	public function contas() {
		return $this->hasMany(Conta::class , 'fornecedor_id');
	}

	public function nomeCompleto() {
		return $this->razao_social.' - '.$this->fantasia;
	}

	public function nomeCompletoCpfCnpj() {
		return 'Razão social/fantasia: '.$this->razao_social.' - '.$this->fantasia.' CNPJ: '.$this->cnpj;
	}

	public function buscaPesquisa($parametro = null) {
		$query = $this->newQuery();

		if ($parametro == null) {
			return $query->paginate(10);
		}

		$query->where(function ($q) use ($parametro) {
				$q->where('ativo', '1')
					->where('razao_social', 'like', "%$parametro%")
					->orWhere('fantasia', 'like', "%$parametro%")
					->orWhere('cnpj', 'like', "%$parametro%");
			});

		return $query->paginate(10);
	}
}
