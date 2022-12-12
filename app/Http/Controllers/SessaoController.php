<?php

namespace App\Http\Controllers;

use App\Conta;
use App\Parcela;
use App\UserSessao;
use App\Sessao;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Yajra\DataTables\Facades\DataTables;

class SessaoController extends Controller {

	private $sessaoModel;

	public function __construct(Sessao $sessao) {
		$this->sessaoModel = $sessao;
		$this->middleware('auth');
	}

	public function buscaFilmes(Request $request) {
		$search = $request->input('term');

		$ch = curl_init();

		curl_setopt($ch, CURLOPT_URL, 'https://api.themoviedb.org/3/search/movie?api_key=4073296c07315478b1ce979cd9d743e2&query='.$search);
		curl_setopt($ch, CURLOPT_HEADER, 0);

		curl_exec($ch);
	}

	public function gravar(Request $request) {
		try {
			DB::beginTransaction();
			Sessao::create($request->all());
			DB::commit();
			return redirect()->route('sessao.listar')->with(['sucesso' => "Sucesso ao gravar sessão"]);
		} catch (\Exception $e) {
			DB::rollback();
			return back()->with('erro', 'Erro ao gravar sessão'."\n".$e->getMessage());
		}

	}

	public function gravarSessao($id) {
		try {
			DB::beginTransaction();
	
			$sessao = Sessao::find($id);

			UserSessao::create([
				'user_id' => auth()->user()->id,
        		'sessao_id' => $id,
        		'cadeira' => rand(0, $sessao->sala->capacidade)
			]);

			$conta = Conta::create([
				'user_id' => auth()->user()->id,
				'titulo' => rand(0, 100),
				// 'data_emissao' => date('Y-m-d'),
				'vlr_total' => $sessao->valor,
				'vlr_restante' => $sessao->valor,
				'qtd_parcelas' => 1,
				'observacao' => 'Sessão de cinema',
 				'tipo_operacao' => 'R', // P ou R
				'qtd_dias' => 30
			]);
			
			Parcela::create([
				'nro_parcela' => 1,
				'valor' => $sessao->valor,
				// 'valor_pago' => 0,
				'valor_original' =>	$sessao->valor,
				'data_vencimento' => date('Y-m-d'),
				'data_recebimento' => null,
				'baixada' => 0,
				'conta_id' => $conta->id
			]);

			DB::commit();
			return redirect()->route('selecionar_sessao')->with(['sucesso' => "Sucesso ao reservar cadeira"]);
		} catch (\Exception $e) {
			DB::rollback();
			return back()->with('erro', 'Erro ao reservar cadeira'."\n".$e->getMessage());
		}

	}

	public function deletar($id) {
		try {
			DB::beginTransaction();
			$this->sessaoModel->find($id)->delete();
			DB::commit();
			return response()->json(['erro' => 0, 'mensagem' => "Sucesso ao eliminar sessão"]);
		} catch (\Exception $exception) {
			DB::rollBack();
			return response()->json(['erro' => 1, 'mensagem' => "Erro ao eliminar, " . $exception->getMessage()]);
		}
	}

	public function update($id, Request $request) {
		try {
			DB::beginTransaction();
			$sessao = $this->sessaoModel->find($id);
			$sessao->update($request->all());
			DB::commit();
			return redirect()->route('sessao.listar')->with(['sucesso' => "Sucesso ao editar sessão"]);
		} catch (\Exception $e) {
			DB::rollback();
			return back()->with('erro', 'Erro ao editar sessão'."\n" . $e->getMessage());
		}

	}

	public function listar() {
		SEOTools::setTitle('Listagem de sessãos');
		return view('sessao/listar');
	}

	public function getFormIncluir() {
		SEOTools::setTitle('Adicionar sessão');
		return view('sessao/adicionar');
	}

	public function getFormAlterar($id) {
		SEOTools::setTitle('Alterar sessão');
		$sessao = $this->sessaoModel->find($id);
		return view('sessao/editar', compact('sessao'));
	}

	public function datatableAjax() {
		$query = $this->sessaoModel->all();
		return Datatables::of($query)
			->editColumn('nome', function ($registro) {
				return $registro->nome;
			})
			->editColumn('inicio', function ($registro) {
				return $registro->inicio;
			})
			->editColumn('fim', function ($registro) {
				return $registro->fim;
			})
			->addColumn('action', function ($registro) {
				return '    <a a-href="/sessao/deletar/'.$registro->id.'" title="Excluir"
                           class="btn-confirm-operation btn btn-effect-ripple btn-xs btn-danger"
                           data-original-title="Deletar"><i class="fa fa-times"></i></a>';
			})
			->make(true);
	}

}
