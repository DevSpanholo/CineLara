<div class="box box-default">
    <div class="box-header with-border">
        <h5 class="box-title">Dados</h5>
    </div>
    <div class="box-body">
        <div class="row">       
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="nome">Nome<i class="text-danger" title="campo obrigatório">*</i></label>
                    {!! Form::text('nome', null, ['class'=>'form-control']) !!}
                </div>
            </div>
        
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="capacidade">Capacidade<i class="text-danger" title="campo obrigatório">*</i></label>
                    {!! Form::text('capacidade', null, ['class'=>'input-positive form-control']) !!}
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