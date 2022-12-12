@extends('layouts/app')
@section('conteudo')

    {!! Form::open(['route'=>'fornecedor.gravar','enctype'=>'multipart/form-data']) !!}

    @include('fornecedor.arquivos.campos_form')

    {!! Form::close() !!}

@endsection