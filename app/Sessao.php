<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Sessao extends Model
{
    protected $table = 'sessao';

    protected $fillable = [
        'filme_uid',
        'sala_id',
        'nome',
        'descricao',
        'inicio',
        'fim',
        'valor'
    ];

    public function sala()
    {
        return $this->belongsTo(Sala::class);
    }

    public function setInicioAttribute($value) {
        $this->attributes['inicio'] = Carbon::createFromFormat('d/m/Y', $value)->format('Y-m-d');
	}

    public function setFimAttribute($value) {
        $this->attributes['fim'] = Carbon::createFromFormat('d/m/Y', $value)->format('Y-m-d');
	}

    public function getInicioAttribute($value) {
        return (new Carbon($value))->format('d/m/Y');
	}

    public function getFimAttribute($value) {
        return (new Carbon($value))->format('d/m/Y');
	}
}
