<div class="box box-default">
    <div class="box-header with-border">
        <h3 class="box-title">Dados fornecedor</h3>
        <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
            </button>
        </div>
    </div>
    <div class="box-body">
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="ativo">Ativo <i class="text-danger" title="Campo obrigatório">*</i></label>
                            {!! Form::select('ativo', ['1'=>'Sim','0'=>'Não'], isset($pessoa) ? $pessoa->ativo:null, ['class'=>'select2 form-control']) !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="razao_social">Razão social <i class="text-danger"
                                                                title="Campo obrigatório">*</i></label>
                    {!! Form::text('razao_social', null, ['class'=>'form-control', 'id'=>'razao_social']) !!}
                </div>
            </div>

            <div class="col-sm-6">
                <div class="form-group">
                    <label for="fantasia">Fantasia <i class="text-danger" title="campo obrigatório">*</i></label>
                    {!! Form::text('fantasia', null, ['class'=>'form-control', 'id'=>'fantasia']) !!}
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="cnpj">CNPJ</label>
                    <div class="input-group">
                        {!! Form::text('cnpj', null, ['class'=>'input-cnpj form-control', 'id'=>'cnpj']) !!}
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="form-group">
                    <label for="cep">Inscrição estadual</label>
                    <div class="input-group">
                        {!! Form::text('ie', null, ['class'=>'form-control input-positive3']) !!}
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="fone">Telefone <i class="text-danger" title="Campo obrigatório">*</i></label>
                    {!! Form::text('fone', null, ['class'=>'input-fone form-control']) !!}
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    {!! Form::text('email', null, ['type'=>'email', 'class'=>'input-email form-control', 'id'=>'email']) !!}
                </div>
            </div>
        </div>

    </div>
</div>


<div class="box box-default">
    <div class="box-header with-border">
        <h3 class="box-title">Endereço</h3>
        <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
            </button>
        </div>
    </div>
    <div class="box-body">
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="cep">CEP</label>
                    <div class="input-group">
                        {!! Form::text('cep', null, ['class'=>'input-cep form-control', 'id'=>'cep_endereco']) !!}
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="form-group">
                    <label for="endereco">Endereço <i class="text-danger" title="campo obrigatório">*</i></label>
                    {!! Form::text('endereco', null, ['class'=>'form-control', 'id'=>'endereco']) !!}
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="endereco_nro">Número <i class="text-danger" title="campo obrigatório">*</i></label>
                    {!! Form::text('endereco_nro', null, ['class'=>'input-positive form-control', 'id'=>'nro_endereco']) !!}
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    {!! Form::label('complemento','Complemento') !!}
                    {!! Form::text('complemento', null, ['class'=>'form-control']) !!}
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="bairro">Bairro <i class="text-danger" title="campo obrigatório">*</i></label>
                    {!! Form::text('bairro', null, ['class'=>'form-control', 'id'=>'bairro']) !!}
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <div class="form-group form-actions">
            {!! Form::submit('Salvar', ['class'=> 'btn-submit btn btn-effect-ripple btn-success']) !!}
            <a href="{{route('fornecedor.listar')}}" class="btn btn-effect-ripple btn-danger">Voltar</a>
        </div>
    </div>
</div>

<script src="{{ elixir('js/jquery-2.2.0.min.js') }}"></script>
<script src="{{ elixir('js/app.js') }}"></script>