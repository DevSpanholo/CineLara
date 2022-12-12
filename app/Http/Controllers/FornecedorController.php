<?php

namespace App\Http\Controllers;

use App\Fornecedor;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use League\Flysystem\Exception;
use Yajra\DataTables\Facades\DataTables;

class FornecedorController extends Controller {

	private $fornecedorModel;

	public function __construct(Fornecedor $fornecedor) {
		$this->fornecedorModel = $fornecedor;
		$this->middleware('auth');
	}

	public function gravar(Request $request) {
		try {
			DB::beginTransaction();
			Fornecedor::create($request->all());
			DB::commit();
			return redirect()->route('fornecedor.listar')->with(['sucesso' => "Sucesso ao gravar fornecedor"]);
		} catch (\Exception $e) {
			DB::rollback();
			return back()->with('erro', 'Erro ao gravar fornecedor'."\n".$e->getMessage());
		}

	}

	public function deletar($id) {
		try {
			DB::beginTransaction();
			$fornecedor = $this->fornecedorModel->find($id);
			if (!is_null($fornecedor->contas->first())) {
				throw new Exception("fornecedor com movimentação financeira, cancele e apague as contas antes de continuar");
			}
			$fornecedor->delete();
			DB::commit();
			return response()->json(['erro' => 0, 'mensagem' => "Sucesso ao eliminar fornecedor"]);
		} catch (\Exception $exception) {
			DB::rollBack();
			return response()->json(['erro' => 1, 'mensagem' => "Erro ao eliminar, ".$exception->getMessage()]);
		}
	}

	public function update($id, Request $request) {
		try {
			DB::beginTransaction();
			$fornecedor = $this->fornecedorModel->find($id);
			$fornecedor->update($request->all());
			DB::commit();
			return redirect()->route('fornecedor.listar')->with(['sucesso' => "Sucesso ao editar fornecedor"]);
		} catch (\Exception $e) {
			DB::rollback();
			return back()->with('erro', 'Erro ao editar fornecedor'."\n".$e->getMessage());
		}

	}

	public function listar() {
		SEOTools::setTitle('Listagem de fornecedor');
		return view('fornecedor/listar');
	}

	public function getFormIncluir() {
		SEOTools::setTitle('Adicionar fornecedor');
		return view('fornecedor/adicionar');
	}

	public function buscafornecedor(Request $request) {

		if ($request->input('tipo') == 'unico') {
			$fornecedor = $this->fornecedorModel->find($request->input('id'));
			return response()->json($fornecedor);
		}

		$fornecedor     = $this->fornecedorModel->buscaPesquisa($request->input('term'));
		$arrayfornecedor = [];
		foreach ($fornecedor as $fornecedor) {
			array_push($arrayfornecedor, ['id' => $fornecedor->id, 'text' => $fornecedor->nomeCompleto().' - '.$fornecedor->cpfCnpj()]);
		}
		return response()->json(['fornecedor' => $arrayfornecedor]);
	}

	public function getFormAlterar($id) {
		SEOTools::setTitle('Alterar fornecedor');
		$fornecedor  = $this->fornecedorModel->find($id);
		return view('fornecedor/editar', compact('fornecedor'));
	}

	public function datatableAjax() {
		$query = $this->fornecedorModel->all();
		return Datatables::of($query)
			->editColumn('nome', function ($registro) {
				return $registro->nomeCompleto();
			})
			->editColumn('cnpj', function ($registro) {
				return $registro->cnpj;
			})
			->editColumn('fone', function ($registro) {
				return $registro->fone;
			})
			->addColumn('action', function ($registro) {
				return '    <a a-href="/fornecedor/deletar/'.$registro->id.'" title="Excluir"
                           class="btn-confirm-operation btn btn-effect-ripple btn-xs btn-danger"
                           data-original-title="Deletar"><i class="fa fa-times"></i></a>
                           <a href="/fornecedor/alterar/'.$registro->id.'" title="Alterar"
                           class="btn btn-effect-ripple btn-xs btn-success"
                           data-original-title="Alterar"><i class="fa fa-pencil"></i></a>';
			})
			->make(true);
	}

}
