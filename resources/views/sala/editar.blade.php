@extends('layouts/app')
@section('conteudo')

    {!! Form::model($sala,['route' => ['sala.update', $sala->id], 'metho'=>'POST','enctype'=>'multipart/form-data']) !!}

    @include('sala.arquivos.campos_form')

    {!! Form::close() !!}

@endsection