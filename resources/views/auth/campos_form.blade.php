
        <div class="form-group has-feedback">
            <input type="text" class="form-control" placeholder="Nome completo" name="name"password2 value="{{ isset($user) ? $user->name : null }}">
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="Email" name="email" value="{{ isset($user) ? $user->email : null }}">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        @if(isset($user))
        <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Senha antiga" name="password_antigo">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>

        <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Digite nova senha" name="password">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Repita a nova senha" name="password2">
            <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div>
        @else
        <input type="text" hidden name="tipo" value="CLIENTE" >
        <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Senha" name="password" >
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Repita a senha" name="password2">
            <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div>
        @endif

        <div class="row">
            <div class="col-xs-4">
                <button type="submit" class="btn btn-primary btn-block btn-flat">Salvar</button>
            </div>
        </div>