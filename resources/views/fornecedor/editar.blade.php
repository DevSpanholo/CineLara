@extends('layouts/app')
@section('conteudo')

    {!! Form::model($fornecedor,['route' => ['fornecedor.update', $fornecedor->id], 'metho'=>'POST','enctype'=>'multipart/form-data']) !!}

    @include('fornecedor.arquivos.campos_form')

    {!! Form::close() !!}

@endsection