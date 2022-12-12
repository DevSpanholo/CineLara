<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class ValidarUsuario
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        
        if (auth()->user()->tipo === 'CLIENTE') {
            return redirect('/selecionarsessao');
        }

        return $next($request);
    }
}
