@extends('layouts.app')

@section('conteudo')
    @if (auth()->user()->tipo == 'GERENTE')
        <div class="col-lg-12 col-xs-12">
            <div class="small-box bg-red">
                <div class="inner">
                    <h3>Contas pagar</h3>
                    <p>Vencimento até dia {{ (new \Carbon\Carbon($valores['dataBase']))->format('d/m/Y') }}</p>
                    @if (is_null($parcelasP->first()))
                        <p>Nenhuma conta com previsão de vencimento</p>
                    @endif
                    @foreach ($parcelasP as $parcela)
                        <p>Fornecedor: {{ $parcela->conta->pessoa->nomeCompleto() }} Vencimento:
                            {{ $parcela->data_vencimento }} Valor R$: {{ $parcela->valor }}</p>
                    @endforeach
                </div>
                <div class="icon">
                    HOJE: R$ {{ formatValueForUser($valores['valorPagar']) }}
                </div>
                <a href="{{ route('contas.pagar.listar') }}" class="small-box-footer">
                    Ver mais <i class="fa fa-arrow-circle-right"></i>
                </a>
            </div>
        </div>
    @endif

    <div class="col-lg-12 col-xs-12">
        <div class="small-box bg-green">
            <div class="inner">
                <h3>Contas receber</h3>
                <p>Vencimento até dia {{ (new \Carbon\Carbon($valores['dataBase']))->format('d/m/Y') }}</p>
                @if (is_null($parcelasR->first()))
                    <p>Nenhuma conta com previsão de vencimento</p>
                @endif
                @foreach ($parcelasR as $parcela)
                    <p>Cliente: {{ $parcela->conta->pessoa->nomeCompleto() }} Vencimento: {{ $parcela->data_vencimento }}
                        Valor R$: {{ $parcela->valor }}</p>
                @endforeach
            </div>

            <div class="icon">
                HOJE: R$ {{ formatValueForUser($valores['valorReceber']) }}
            </div>
            <a href="{{ route('contas.receber.listar') }}" class="small-box-footer">
                Ver mais <i class="fa fa-arrow-circle-right"></i>
            </a>
        </div>

        <div class="box">
            <div class="box-header">
                <h3 class="box-title">
                    <a href="{{ route('sessao.incluir') }}" class="btn btn-effect-ripple btn-success">
                        <i class="fa fa-plus"></i> Adicionar sessão
                    </a>
                </h3>
            </div>

            <div class="box-body">
                <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                    <div class="row">
                        <div class="col-sm-12">
                            <table id="dataTable" class="table table-bordered table-striped dataTable" role="grid">
                                <thead>
                                    <tr>
                                        <th width="25%">Nome</th>
                                        <th width="25%">Descricao</th>
                                        <th width="20%">Inicio</th>
                                        <th width="20%">Fim</th>
                                        <th width="10%">Excluir</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.box-body -->
        </div>

        <script>
            $(function() {
                $('#dataTableSimples').DataTable()
                $('#dataTable').DataTable({
                    'paging': true,
                    'lengthChange': true,
                    'searching': true,
                    'ordering': true,
                    'info': true,
                    'autoWidth': false,
                    'ajax': {
                        url: '{{ route('sessao.datatable') }}'
                    },
                    'columns': [{
                            data: 'nome',
                            name: 'nome'
                        },
                        {
                            data: 'descricao',
                            name: 'descricao'
                        },
                        {
                            data: 'inicio',
                            name: 'inicio'
                        },
                        {
                            data: 'fim',
                            name: 'fim'
                        },
                        {
                            data: 'action',
                            name: 'Ações',
                            orderable: false,
                            searchable: false
                        }
                    ],
                    "language": {
                        "url": '{{ asset('js/vendor/datatables/DataTable-pt-BR.json') }}'
                    }
                })
            })
        </script>
    </div>
@endsection
