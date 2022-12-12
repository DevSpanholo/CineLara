@extends('layouts/app')
@section('conteudo')

    {!! Form::open(['route'=>'sessao.gravar','enctype'=>'multipart/form-data']) !!}

    @include('sessao.arquivos.campos_form')

    {!! Form::close() !!}

@endsection