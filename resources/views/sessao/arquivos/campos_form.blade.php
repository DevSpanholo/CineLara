<div class="box box-default">
    <div class="box-header with-border">
        <h5 class="box-title">Dados</h5>
    </div>
    <div class="box-body">
        <div class="row">       
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="filme_uid">Filme <i class="text-danger" title="Campo obrigatório">*</i></label>
                    {!! Form::select('filme_uid', ['0'=>'Escolha uma opção'], isset($sessao) ? $sessao->sala_id : null, ['class'=>'select2 form-control select-sala']) !!}
                </div>
            </div>
            
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="sala_id">Sala <i class="text-danger" title="Campo obrigatório">*</i></label>
                    {!! Form::select('sala_id', ['0'=>'Escolha uma opção'], isset($sessao) ? $sessao->sala_id : null, ['class'=>'select2 form-control select-sala']) !!}
                </div>
            </div>

            <div class="col-sm-4">
                <div class="form-group">
                    <label for="nome">Nome<i class="text-danger" title="campo obrigatório">*</i></label>
                    {!! Form::text('nome', null, ['class'=>'form-control']) !!}
                </div>
            </div>

            <div class="col-sm-4">
                <div class="form-group">
                    <label for="descricao">Descrição<i class="text-danger" title="campo obrigatório">*</i></label>
                    {!! Form::text('descricao', null, ['class'=>'form-control']) !!}
                </div>
            </div>

            <div class="col-sm-4">
                <div class="form-group">
                    <label for="inicio">Inicio<i class="text-danger" title="campo obrigatório">*</i></label>
                    {!! Form::text('inicio', null, ['class'=>'input-data form-control']) !!}
                </div>
            </div>

            <div class="col-sm-4">
                <div class="form-group">
                    <label for="fim">Fim<i class="text-danger" title="campo obrigatório">*</i></label>
                    {!! Form::text('fim', null, ['class'=>'input-data form-control']) !!}
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="form-group form-actions">
                    {!! Form::submit('Salvar', ['class'=> 'btn-submit btn btn-effect-ripple btn-success']) !!}
                    <a href="{{route('sala.listar')}}" class="btn btn-effect-ripple btn-danger">Voltar</a>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="{{ elixir('js/jquery-2.2.0.min.js') }}"></script>
<script src="{{ elixir('js/app.js') }}"></script>


<script>
    $(document).ready(function () {
        $('select[name="sala_id"]').select2({
            placeholder: "Seleciona uma opção.",
            language: 'pt-br',
            ajax: {
                headers: {'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')},
                url: '/sala/lists/getToSelect',
                dataType: 'JSON',
                method: 'POST',
                data: function (parametros) {
                    return {
                        term: parametros.term
                    };
                },
                processResults: function (data) {
                    return {
                        results: data.salas
                    };
                }
            },
            minimumInputLength: 3
        }).on('change', function () {
            console.log($(this).val())
            $('#apelido').val($(this).text());
            self.enviaProduto($(this).val());
            $(this).find('option').remove();
        });

        $('select[name="filme_uid"]').select2({
            placeholder: "Seleciona uma opção.",
            language: 'pt-br',
            ajax: {
                headers: {'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')},
                url: '/sessao/lists/getToSelectFilm',
                dataType: 'JSON',
                method: 'POST',
                data: function (parametros) {
                    return {
                        term: parametros.term
                    };
                },
                processResults: function (data) {
                    let array = [];
                    data.results.forEach((film) => {
                        array.push({'id': film.id, 'text': film.original_title})
                    })
                    console.log(array)
                    return {
                        results: array
                    };
                }
            },
            minimumInputLength: 3
        }).on('change', function () {
            console.log($(this).val())
            $('#apelido').val($(this).text());
            self.enviaProduto($(this).val());
            $(this).find('option').remove();
        });
    });
</script>