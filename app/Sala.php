<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Sala extends Model
{
    protected $table = 'sala';

    protected $fillable = [
        'nome',
        'capacidade'
    ];


    public function buscaPesquisa($parametro = null) {
		$query = $this->newQuery();

		if ($parametro == null) {
			return $query->paginate(10);
		}

		$query->where(function ($q) use ($parametro) {
            $q->where('nome', 'like', "%$parametro%");
        });

		return $query->paginate(10);
	}
}
