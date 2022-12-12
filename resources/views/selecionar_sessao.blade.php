@extends('layouts.app')


@section('conteudo')

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="token" content="{{ csrf_token() }}">
        <title>CineLara | CL</title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link rel="stylesheet" href="{{ asset('/layout/bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css">
        <link rel="stylesheet" href="{{ asset('/layout/bower_components/font-awesome/css/font-awesome.min.css') }}">
        <link rel="stylesheet" href="{{ asset('/layout/bower_components/Ionicons/css/ionicons.min.css') }}">
        <link rel="stylesheet" href="{{ asset('/layout/dist/css/AdminLTE.min.css') }}">
        <script src="{{ asset('js/jquery-2.2.0.min.js') }}"></script>
        <link rel="stylesheet" href="{{ asset('/layout/dist/css/skins/skin-blue.min.css') }}">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
    </head>
    <header class="main-header">

        <!-- Logo -->
        <a href="{{ route('index') }}" class="logo">
            <span class="logo-lg"><b>CineLara </b>CL</span>
        </a>

        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">

                    <li class="dropdown user user-menu">
                        <a  data-toggle="dropdown" id="user-options"
                            aria-expanded="false">
                            <span class="hidden-xs">Bem vindo: {{ Auth::user()->name }}</span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header">
                                <p>
                                    {{ Auth::user()->name }} - Cargo {{ Auth::user()->tipo }}
                                </p>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>
    </header>

    <body class="hold-transition skin-blue sidebar-mini">

        <div class="container">
            <div class="box-header with-border">
                <h3 class="box-title">Filmes em Cartaz.</h3>

                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i
                            class="fa fa-minus"></i></button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i
                            class="fa fa-remove"></i></button>
                </div>
            </div>
            @foreach ($sessoes as $sessao)
                <div class="box-body">
                    <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                        <table class="table table-striped table-bordered table-responsive table-hover tabela-pesquisa">
                            <thead>
                                <tr>
                                    <a href="{{ route('gravar_sessao', ['id' => $sessao['id']]) }}"
                                        class="flex inline-flex items-center bg-blue-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-blue-600 transition ease-in-out duration-150"
                                        style="align-items: flex-end; color: #ffff; background-color: #353238; font: bold; ">
                                        <span class="ml-2">Reservar Lugar</span>
                                    </a>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td width="55%">Em Cartaz: {{$sessao ['inicio']}}</td>
                                    <td width="45%" class="text-right">{{ $sessao['nome'] }}</td>
                                </tr>
                                <tr>
                                    <td >{{ $sessao['descricao'] }}</td>
                                    <td class="text-right">{{ $sessao['nome'] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            @endforeach

        </div>
    
    @if (auth()->user()->tipo == 'GERENTE')
    @endif
@endsection


<style type="text/css">
    @media (min-width: 768px) {
        .container {
            width: 668px;
        }
    }

    @media (min-width: 992px) {
        .container {
            width: 892px;
        }
    }

    @media (min-width: 1200px) {
        .container {
            width: 1100px;
        }
    }
</style>
