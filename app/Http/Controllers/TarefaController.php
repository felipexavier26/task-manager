<?php

namespace App\Http\Controllers;

use App\Models\Tarefa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TarefaController extends Controller

{
    public function index(Request $request)
    {
        // Definindo os valores padrão para ordenação
        $sort = $request->input('sort', 'id_tarefa');
        $direction = $request->input('direction', 'desc');
    
        // Ordena de forma dinâmica conforme os parâmetros passados
        $tarefas = Tarefa::orderBy($sort, $direction)->paginate(10);
    
        return Inertia::render('Tarefas/Index', [
            'tarefas' => $tarefas,
        ]);
    }
    


    public function create()
    {
        return Inertia::render('Tarefas/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'nullable|string',
            'data_hora_criacao' => 'required|date',
            'data_hora_conclusao' => 'nullable|date',
            'status' => 'required|in:pendente,em andamento,concluída',
        ]);

        $tarefa = Tarefa::create([
            'titulo' => $validated['titulo'],
            'descricao' => $validated['descricao'],
            'data_hora_criacao' => $validated['data_hora_criacao'],
            'data_hora_conclusao' => $validated['data_hora_conclusao'] ?? null,
            'status' => $validated['status'],
        ]);

        $tarefa->save();

        return redirect()->route('tarefas.index')->with('success', 'Tarefa criada com sucesso');
    }


    public function edit($id_tarefa)
    {
        $tarefa = Tarefa::find($id_tarefa);

        if (!$tarefa) {
            return redirect()->route('tarefas.index')->with('error', 'Tarefa não encontrada');
        }

        return Inertia::render('Tarefas/Edit', [
            'tarefa' => $tarefa,
        ]);
    }


    public function update(Request $request, $id_tarefa)
    {
        $tarefa = Tarefa::findOrFail($id_tarefa);

        $data = $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'nullable|string',
            'data_hora_conclusao' => 'nullable',
            'status' => 'required|in:pendente,em andamento,concluída',
        ]);      

        if (isset($data['data_hora_conclusao'])) {
            $tarefa->data_hora_conclusao = $data['data_hora_conclusao'];
        }

        $tarefa->titulo = $data['titulo'];
        $tarefa->descricao = $data['descricao'];
        $tarefa->status = $data['status'];

        $tarefa->save();

        return redirect()->route('tarefas.index')->with('success', 'Tarefa atualizada com sucesso');
    }


    public function show($id_tarefa)
    {
        $tarefa = Tarefa::find($id_tarefa);

        if (!$tarefa) {
            return redirect()->route('tarefas.index')->with('error', 'Tarefa não encontrada');
        }

        return Inertia::render('Tarefas/Show', [
            'tarefa' => $tarefa,
        ]);
    }

    public function destroy($id)
    {
        $tarefa = Tarefa::find($id);

        if (!$tarefa) {
            return redirect()->route('tarefas.index')->with('error', 'Tarefa não encontrada');
        }

        $tarefa->delete();

        return redirect()->route('tarefas.index')->with('success', 'Tarefa excluída com sucesso');
    }
}
