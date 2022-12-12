<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Auth::routes();

Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');

Route::get('/', ['as' => 'index', 'uses' => 'IndexController@index']);

Route::group(['where'                     => ['id'                     => '[0-9]+', 'middleware'                     => 'auth']], function () {

	Route::get('/selecionarsessao', ['as'             => 'selecionar_sessao', 'uses'             => 'IndexController@selecionarSessao']);
	
	Route::group(['prefix'                    => 'sala'], function () {
		Route::get('/listar', ['as'             => 'sala.listar', 'uses'             => 'SalaController@listar']);
		Route::get('/incluir', ['as'            => 'sala.incluir', 'uses'            => 'SalaController@getFormIncluir']);
		Route::get('/alterar/{id}', ['as'       => 'sala.alterar', 'uses'       => 'SalaController@getFormAlterar']);
		Route::post('/deletar/{id}', ['as'      => 'sala.alterar', 'uses'      => 'SalaController@deletar']);
		Route::post('/gravar', ['as'            => 'sala.gravar', 'uses'            => 'SalaController@gravar']);
		Route::post('/update/{id}', ['as'       => 'sala.update', 'uses'       => 'SalaController@update']);
		Route::get('/listar/datatable', ['as'   => 'sala.datatable', 'uses'   => 'SalaController@datatableAjax']);
		Route::post('/lists/getToSelect', ['as' => 'sala.getSelect', 'uses' => 'SalaController@buscaSala']);
	});

	Route::group(['prefix'                    => 'fornecedor'], function () {
		Route::get('/listar', ['as'             => 'fornecedor.listar', 'uses'             => 'FornecedorController@listar']);
		Route::get('/incluir', ['as'            => 'fornecedor.incluir', 'uses'            => 'FornecedorController@getFormIncluir']);
		Route::get('/alterar/{id}', ['as'       => 'fornecedor.alterar', 'uses'       => 'FornecedorController@getFormAlterar']);
		Route::post('/deletar/{id}', ['as'      => 'fornecedor.alterar', 'uses'      => 'FornecedorController@deletar']);
		Route::post('/gravar', ['as'            => 'fornecedor.gravar', 'uses'            => 'FornecedorController@gravar']);
		Route::post('/lists/getToSelect', ['as' => 'fornecedor.alterar', 'uses' => 'FornecedorController@buscaPessoa']);
		Route::post('/update/{id}', ['as'       => 'fornecedor.update', 'uses'       => 'FornecedorController@update']);
		Route::get('/listar/datatable', ['as'   => 'fornecedor.datatable', 'uses'   => 'FornecedorController@datatableAjax']);
	});

	Route::group(['prefix'                    => 'sessao'], function () {
		Route::get('/listar', ['as'             => 'sessao.listar', 'uses'             => 'SessaoController@listar']);
		Route::get('/incluir', ['as'            => 'sessao.incluir', 'uses'            => 'SessaoController@getFormIncluir']);
		Route::get('/alterar/{id}', ['as'       => 'sessao.alterar', 'uses'       => 'SessaoController@getFormAlterar']);
		Route::post('/deletar/{id}', ['as'      => 'sessao.alterar', 'uses'      => 'SessaoController@deletar']);
		Route::post('/gravar', ['as'            => 'sessao.gravar', 'uses'            => 'SessaoController@gravar']);
		Route::post('/lists/getToSelectFilm', ['as' => 'sessao.alterar', 'uses' => 'SessaoController@buscaFilmes']);
		Route::post('/update/{id}', ['as'       => 'sessao.update', 'uses'       => 'SessaoController@update']);
		Route::get('/listar/datatable', ['as'   => 'sessao.datatable', 'uses'   => 'SessaoController@datatableAjax']);
	});




		Route::group(['prefix'                  => 'auth'], function () {
				Route::get('/register', ['as'         => 'cadastrar.usuario', 'uses'         => 'IndexController@register']);
				Route::get('/listar', ['as'           => 'listar.usuario', 'uses'           => 'IndexController@listar']);
				Route::get('/alterar/{id}', ['as'     => 'alterar.usuario', 'uses'     => 'IndexController@alterar']);
				Route::post('/register', ['as'        => 'gravar.usuario', 'uses'        => 'IndexController@create']);
				Route::post('/update/{id}', ['as'     => 'update.usuario', 'uses'     => 'IndexController@update']);
				Route::post('/deletar/{id}', ['as'    => 'deletar.usuario', 'uses'    => 'IndexController@deletaUser']);
				Route::get('/listar/datatable', ['as' => 'datatable.usuario', 'uses' => 'IndexController@datatableAjax']);
			});


		Route::group(['prefix'                => 'contas'], function () {
				Route::group(['prefix'              => 'receber'], function () {
						Route::get('/listar', ['as'       => 'contas.receber.listar', 'uses'       => 'ContaController@listarReceber']);
						Route::get('/incluir', ['as'      => 'contas.receber.incluir', 'uses'      => 'ContaController@getFormAdicionarReceber']);
						Route::get('/alterar/{id}', ['as' => 'contas.receber.alterar', 'uses' => 'ContaController@getFormAlterarReceber']);
					});

				Route::group(['prefix'                  => 'pagar'], function () {
						Route::get('/listar', ['as'           => 'contas.pagar.listar', 'uses'           => 'ContaController@listarPagar']);
						Route::get('/incluir', ['as'          => 'contas.pagar.incluir', 'uses'          => 'ContaController@getFormAdicionarPagar']);
						Route::get('/alterar/{id}', ['as'     => 'contas.pagar.alterar', 'uses'     => 'ContaController@getFormAlterarPagar']);
						Route::get('/listar/datatable', ['as' => 'contas.pagar.datatable', 'uses' => 'ContaController@datatableAjax']);
					});
				Route::post('/deletar/{id}', ['as' => 'contas.deletar', 'uses' => 'ContaController@deletar']);
				Route::post('/buscaContas', ['as'  => 'contas.buscar', 'uses'  => 'ContaController@buscaContas']);
				Route::post('/gravar', ['as'       => 'contas.gravar', 'uses'       => 'ContaController@gravar']);
				Route::post('/update/{id}', ['as'  => 'contas.update', 'uses'  => 'ContaController@update']);

				Route::post('/imprimir', ['as'       => 'relatorio.conta.contas', 'uses'       => 'ContaController@processaRelatorio']);
				Route::get('/relatorioContas', ['as' => 'relatorio.contas', 'uses' => 'ContaController@getFormRelatorio']);

				Route::group(['prefix'                => 'parcelas/'], function () {
						Route::post('/buscaParcelas', ['as' => 'contas.buscar', 'uses' => 'ParcelaController@buscaParcelas']);
						Route::post('/calcular', ['as'      => 'parcelas.calcular', 'uses'      => 'ContaController@calculaParcela']);
						Route::post('/baixar', ['as'        => 'parcelas.baixar', 'uses'        => 'ParcelaController@baixarParcela']);
						Route::post('/estornar/{id}', ['as' => 'estornos.executa', 'uses' => 'ParcelaController@estornoParcela']);
					});
			});

		Route::group(['prefix'                  => 'movimentacao'], function () {
				Route::get('/listar', ['as'           => 'movimentacao.listar', 'uses'           => 'MovimentacaoController@listar']);
				Route::get('/incluir', ['as'          => 'movimentacao.incluir', 'uses'          => 'MovimentacaoController@getFormIncluir']);
				Route::post('/gravar', ['as'          => 'movimentacao.gravar', 'uses'          => 'MovimentacaoController@gravar']);
				Route::post('/deletar/{id}', ['as'    => 'movimentacao.deletar', 'uses'    => 'MovimentacaoController@deletar']);
				Route::get('/listar/datatable', ['as' => 'movimentacao.datatable', 'uses' => 'MovimentacaoController@datatableAjax']);
			});
		Route::group(['prefix'           => 'relatorios'], function () {
				Route::get('/comissao', ['as'  => 'relatorio.comissao', 'uses'  => 'IndexController@getFormRelatorio']);
				Route::post('/imprimir', ['as' => 'relatorio.gravar', 'uses' => 'IndexController@imprimir']);
			});

	});
