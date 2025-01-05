<?php

namespace App\Http\Controllers\Api;

use App\Models\Tarefa;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class TarefaController extends Controller
{
    public function index()
    {
        $tarefas = Tarefa::all(); 
        return response()->json($tarefas); 
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'nullable|string',
            'status' => 'required|in:pendente,em andamento,concluída',
        ]);

        // Criação da tarefa
        $tarefa = Tarefa::create([
            'titulo' => $validated['titulo'],
            'descricao' => $validated['descricao'],
            'status' => $validated['status'],
            'data_hora_criacao' => now(), 
        ]);

        return response()->json($tarefa, Response::HTTP_CREATED); 
    }

    public function show($id)
    {
        $tarefa = Tarefa::find($id);

        if (!$tarefa) {
            return response()->json(['message' => 'Tarefa não encontrada'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($tarefa); 
    }

    public function update(Request $request, $id)
    {
        $tarefa = Tarefa::find($id);

        if (!$tarefa) {
            return response()->json(['message' => 'Tarefa não encontrada'], Response::HTTP_NOT_FOUND);
        }

        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'nullable|string',
            'status' => 'required|in:pendente,em andamento,concluída',
        ]);

        $tarefa->update($validated);

        return response()->json($tarefa); 
    }

    public function destroy($id)
    {
        $tarefa = Tarefa::find($id);

        if (!$tarefa) {
            return response()->json(['message' => 'Tarefa não encontrada'], Response::HTTP_NOT_FOUND);
        }

        $tarefa->delete(); 
        return response()->json(['message' => 'Tarefa excluída com sucesso'], Response::HTTP_OK);
    }
}
