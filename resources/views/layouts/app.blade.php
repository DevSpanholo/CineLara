<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html>

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

<body class="hold-transition skin-blue sidebar-mini">

    <div class="wrapper">
        <header class="main-header">

            <!-- Logo -->
            <a href="{{ route('index') }}" class="logo">
                <span class="logo-lg"><b>CineLara </b>CL</span>
            </a>

            <!-- Header Navbar -->
            <nav class="navbar navbar-static-top" role="navigation">
                <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span class="sr-only">Reduzir</span>
                </a>

                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">

                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="user-options"
                                aria-expanded="false">
                                <span class="hidden-xs">{{ Auth::user()->name }}</span>
                            </a>
                            <ul class="dropdown-menu">
                                <!-- User image -->
                                <li class="user-header">
                                    <p>
                                        {{ Auth::user()->name }} - Cargo {{ Auth::user()->tipo }}
                                    </p>
                                </li>
                                <li class="user-footer">
                                    <div class="pull-left">
                                        <a href="{{ route('alterar.usuario', Auth::user()->id) }}"
                                            class="btn btn-default btn-flat">Editar usu??rio</a>
                                    </div>
                                    <div class="pull-right">
                                        <a href="{{ route('logout') }}" class="btn btn-default btn-flat">Sair</a>
                                    </div>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    @if(auth()->user()->tipo === 'GERENTE')
        <aside class="main-sidebar">
            <section class="sidebar">
                <ul class="sidebar-menu" data-widget="tree">
                    <li class="header">Menu</li>

                    <li class="{{ in_array(Request::path(), ['auth', 'fornecedor', 'sala']) ? 'active' : '' }} treeview">
                        <a href=""><i class="fa fa-wrench  sidebar-nav-icon"></i> <span>Manuten????o</span>
                            <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                        </a>

                        <ul class="treeview-menu">
                            @if (auth()->user()->tipo == 'GERENTE')
                                <li>
                                    <a href="{{ route('listar.usuario') }}"><i class="fa fa-user"></i> Controle de
                                        usu??rio</a>
                                </li>
                            @endif
                            <li class="{{ in_array(Request::path(), ['fornecedor']) ? 'active' : '' }} treeview">
                                <a href="#"><i class="fa fa-users sidebar-nav-icon"></i> Fornecedor
                                    <span class="pull-right-container"><i
                                            class="fa fa-angle-left pull-right"></i></span>
                                </a>
                                <ul class="treeview-menu">
                                    <li><a href="{{ route('fornecedor.incluir') }}">Cadastrar</a></li>
                                    <li><a href="{{ route('fornecedor.listar') }}">Listar</a></li>
                                </ul>
                            </li>
                            <li class="{{ in_array(Request::path(), ['sala']) ? 'active' : '' }} treeview">
                                <a href="#"><i class="fa fa-archive sidebar-nav-icon"></i> Sala
                                    <span class="pull-right-container"><i
                                            class="fa fa-angle-left pull-right"></i></span>
                                </a>
                                <ul class="treeview-menu">
                                    <li><a href="{{ route('sala.incluir') }}">Cadastrar</a></li>
                                    <li><a href="{{ route('sala.listar') }}">Listar</a></li>
                                </ul>
                            </li>
                            <li class="{{ in_array(Request::path(), ['sessao']) ? 'active' : '' }} treeview">
                                <a href="#"><i class="fa fa-users sidebar-nav-icon"></i> Sess??o
                                    <span class="pull-right-container"><i
                                            class="fa fa-angle-left pull-right"></i></span>
                                </a>
                                <ul class="treeview-menu">
                                    <li><a href="{{ route('sessao.incluir') }}">Cadastrar</a></li>
                                    <li><a href="{{ route('sessao.listar') }}">Listar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>


                    <li class="{{ in_array(Request::path(), ['contas', 'movimentacao']) ? 'active' : '' }} treeview">
                        <a href=""><i class="fa fa-money  sidebar-nav-icon"></i> <span>Financeiro</span>
                            <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                        </a>

                        <ul class="treeview-menu">
                            <li class="{{ in_array(Request::path(), ['contas/receber']) ? 'active' : '' }} treeview">
                                <a href="#"><i class="fa fa-plus sidebar-nav-icon"></i> Contas receber
                                    <span class="pull-right-container"><i
                                            class="fa fa-angle-left pull-right"></i></span>
                                </a>
                                <ul class="treeview-menu">
                                    <li><a href="{{ route('contas.receber.incluir') }}">Cadastrar</a></li>
                                    <li><a href="{{ route('contas.receber.listar') }}">Listar</a></li>
                                </ul>
                            </li>
                            @if (Auth::user()->tipo == 'GERENTE')
                                <li class="{{ in_array(Request::path(), ['contas/pagar']) ? 'active' : '' }} treeview">
                                    <a href="#"><i class="fa  fa-minus sidebar-nav-icon"></i> Conta pagar
                                        <span class="pull-right-container"><i
                                                class="fa fa-angle-left pull-right"></i></span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li><a href="{{ route('contas.pagar.incluir') }}">Cadastrar</a></li>
                                        <li><a href="{{ route('contas.pagar.listar') }}">Listar</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="{{ route('movimentacao.listar') }}"><i class="fa fa-circle-o"></i>
                                        Controle de caixa</a>
                                </li>
                            @endif
                        </ul>
                    </li>
                </ul>
            </section>
        </aside>
        @endif

        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                @if (Request::is('/') != 1)
                    <div class="content-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="header-section text-center">
                                    @if (substr(Request::path(), 0, 15) == 'pedidos/alterar' ||
                                        substr(Request::path(), 0, 29) == 'contas/parcelas/buscaParcelas')
                                        <h1>{{ \Artesaos\SEOTools\Facades\SEOTools::metatags()->getTitleSession() }}
                                            <br>
                                            {{ \Artesaos\SEOTools\Facades\SEOTools::metatags()->getDescription() }}
                                        </h1>
                                    @else
                                        <h1>{{ \Artesaos\SEOTools\Facades\SEOTools::metatags()->getTitleSession() }}
                                        </h1>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
                <div id="mensagem-aviso">
                    @if (Session::has('info'))
                        <div class="alert alert-info alert-dismissable">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">??</button>
                            {{ Session::get('info') }}
                        </div>
                    @endif

                    @if (Session::has('warning'))
                        <div class="alert alert-warning alert-dismissable">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">??</button>
                            {{ Session::get('warning') }}
                        </div>
                    @endif

                    @if (Session::has('sucesso'))
                        <div class="alert alert-success alert-dismissable">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">??</button>
                            {{ Session::get('sucesso') }}
                        </div>
                    @endif

                    @if (Session::has('erro'))
                        <div class="alert alert-danger alert-dismissable">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">??</button>
                            {!! nl2br(Session::get('erro')) !!}
                        </div>
                    @endif
                </div>
            </section>

            <section class="content container-fluid">
                @if ($errors->any())
                    <ul class="alert alert-danger alert-dismissable">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">??</button>
                        @foreach ($errors->all() as $error)
                            <li> {{ $error }}</li>
                        @endforeach
                    </ul>
                @endif
                <div class="row">
                    <div class="container">
                        @yield('conteudo')
                    </div>
                </div>
            </section>
            <!-- /.content -->
        </div>

        <footer class="main-footer">
            <!-- To the right -->
            <div class="pull-right hidden-xs">
                Software ERP
            </div>
            <!-- Default to the left -->
            <strong>CineLara &copy; 2022 <a href="#">E-mail</a>:</strong>
            160857@@upf.br, 183153@upf.br, 161692@upf.br
        </footer>
    </div>


    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/main.js') }}"></script>
    <script src="{{ asset('js/select2.js') }}"></script>
    <script src="{{ asset('layout/bower_components/jquery/dist/jquery.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
    <script src="{{ asset('layout/bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('layout/dist/js/adminlte.min.js') }}"></script>
    <script src="{{ asset('layout/bower_components/datatables.net/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('layout/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js') }}"></script>
    {{-- @if (!in_array(Request::path(), ['pedidos'])) --}}
    {{--    <script> --}}
    {{--        $(document).ready(function () { --}}

    {{--            $('.select2').select2({ --}}
    {{--                width: '95%', --}}
    {{--                allow_single_deselect: true, --}}
    {{--                placeholder: "Seleciona uma op????o.", --}}
    {{--                language: 'pt-br', --}}
    {{--            }); --}}
    {{--        }); --}}
    {{--    </script> --}}
    {{-- @endif --}}
    <div class="modal modal-info fade in" id="modal-deletar" style="display: none; padding-right: 15px;">
        <div class="modal-dialog">
            <div class="modal-content">
                <input type="hidden" name="modal-href">
                <div class="modal-header text-center">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">??</span></button>
                    <h4 class="modal-title">Aten????o!</h4>
                </div>
                <div class="modal-body">
                    <p>Tem certeza que deseja realizar esta opera????o? <br> N??o ser?? poss??vel reverter</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">N??o</button>
                    <button type="button" class="btn btn-outline btn-confirm">Sim</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal modal-warning fade in" id="modal-danger" style="display: none; padding-right: 15px;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">??</span></button>
                    <h4 class="modal-title">Aten????o!</h4>
                </div>
                <div class="modal-body text">
                    <p>One fine body???One fine body???</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal modal-success fade in" id="modal-success" style="display: none; padding-right: 15px;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">??</span></button>
                    <h4 class="modal-title">Successo!</h4>
                </div>
                <div class="modal-body text">
                    <p>One fine body???</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline reload" data-dismiss="modal">Fechar</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <div class="modal modal-success fade in" id="modal-success-sem-reload"
        style="display: none; padding-right: 15px;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">??</span></button>
                    <h4 class="modal-title">Successo!</h4>
                </div>
                <div class="modal-body text">
                    <p>One fine body???</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline" data-dismiss="modal">Fechar</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

</body>

</html>

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
