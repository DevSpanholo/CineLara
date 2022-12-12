@extends('layouts.app')

@section('conteudo')
{{ dd($sessoes) }}
@if (auth()->user()->tipo == 'GERENTE')
@endif


@endsection
