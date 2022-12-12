@extends('layouts/app')
@section('conteudo')

    <div class="box">
        <div class="box-header">
            <h3 class="box-title">
                <a href="{{ route('sala.incluir') }}" class="btn btn-effect-ripple btn-success">
                    <i class="fa fa-plus"></i> Adicionar sala
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
                                <th width="30%">Nome</th>
                                <th width="50%">Capacidade</th>
                                <th width="20%">Ações</th>
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
        $(function () {
            $('#dataTableSimples').DataTable()
            $('#dataTable').DataTable({
                'paging'      : true,
                'lengthChange': true,
                'searching'   : true,
                'ordering'    : true,
                'info'        : true,
                'autoWidth'   : false,
                'ajax': {
                    url: '{{route('sala.datatable')}}'
                },
                'columns': [
                    {data: 'nome', name: 'nome'},
                    {data: 'capacidade', name: 'capacidade'},
                    {data: 'action', name: 'Ações', orderable: false, searchable: false}
                ],
                "language": {
                    "url": '{{asset('js/vendor/datatables/DataTable-pt-BR.json')}}'
                }
            })
        })
    </script>

@endsection