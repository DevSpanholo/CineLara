@extends('layouts/app')
@section('conteudo')

    {!! Form::open(['route'=>'sala.gravar','enctype'=>'multipart/form-data']) !!}

    @include('sala.arquivos.campos_form')

    {!! Form::close() !!}

@endsection