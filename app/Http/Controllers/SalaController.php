<?php

namespace App\Http\Controllers;

use App\Sala;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use League\Flysystem\Exception;
use Yajra\DataTables\Facades\DataTables;

class SalaController extends Controller {

	private $salaModel;

	public function __construct(Sala $sala) {
		$this->salaModel = $sala;
		$this->middleware('auth');
	}

	public function buscaSala(Request $request) {
		$salas = $this->salaModel->buscaPesquisa($request->input('term'));
		$arraysalas = [];
		foreach ($salas as $sala) {
			$arraysalas[] = ['id' => $sala->id, 'text' => 'Nome: '.$sala->nome];
		}
		return response()->json(['salas' => $arraysalas]);
	}

	public function gravar(Request $request) {
		try {
			DB::beginTransaction();
			Sala::create($request->all());
			DB::commit();
			return redirect()->route('sala.listar')->with(['sucesso' => "Sucesso ao gravar sala"]);
		} catch (\Exception $e) {
			DB::rollback();
			return back()->with('erro', 'Erro ao gravar sala'."\n".$e->getMessage());
		}

	}

	public function deletar($id) {
		try {
			DB::beginTransaction();
			$this->salaModel->find($id)->delete();
			DB::commit();
			return response()->json(['erro' => 0, 'mensagem' => "Sucesso ao eliminar sala"]);
		} catch (\Exception $exception) {
			DB::rollBack();
			return response()->json(['erro' => 1, 'mensagem' => "Erro ao eliminar, " . $exception->getMessage()]);
		}
	}

	public function update($id, Request $request) {
		try {
			DB::beginTransaction();
			$sala = $this->salaModel->find($id);
			$sala->update($request->all());
			DB::commit();
			return redirect()->route('sala.listar')->with(['sucesso' => "Sucesso ao editar sala"]);
		} catch (\Exception $e) {
			DB::rollback();
			return back()->with('erro', 'Erro ao editar sala'."\n" . $e->getMessage());
		}

	}

	public function listar() {
		SEOTools::setTitle('Listagem de salas');
		return view('sala/listar');
	}

	public function getFormIncluir() {
		SEOTools::setTitle('Adicionar sala');
		return view('sala/adicionar');
	}

	public function getFormAlterar($id) {
		SEOTools::setTitle('Alterar sala');
		$sala = $this->salaModel->find($id);
		return view('sala/editar', compact('sala'));
	}

	public function datatableAjax() {
		$query = $this->salaModel->all();
		return Datatables::of($query)
			->editColumn('nome', function ($registro) {
				return $registro->nome;
			})
			->editColumn('capacidade', function ($registro) {
				return $registro->capacidade;
			})
			->addColumn('action', function ($registro) {
				return '    <a a-href="/sala/deletar/'.$registro->id.'" title="Excluir"
                           class="btn-confirm-operation btn btn-effect-ripple btn-xs btn-danger"
                           data-original-title="Deletar"><i class="fa fa-times"></i></a>
                           <a href="/sala/alterar/'.$registro->id.'" title="Alterar"
                           class="btn btn-effect-ripple btn-xs btn-success"
                           data-original-title="Alterar"><i class="fa fa-pencil"></i></a>';
			})
			->make(true);
	}

}
