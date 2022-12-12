@extends('layouts/app')
@section('conteudo')
    {!! Form::model($sessao, [
        'route' => ['sessao.update', $sessao->id],
        'metho' => 'POST',
        'enctype' => 'multipart/form-data',
    ]) !!}

    @include('sessao.arquivos.campos_form')

    {!! Form::close() !!}
@endsection
