<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class UserSessao extends Model
{
    protected $table = 'user_sessao';

    protected $fillable = [
        'user_id',
        'sessao_id',
        'cadeira',
    
    ];
}
