<?php

namespace App\Http\Controllers;

use App\Models\Tarefa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;  

class RelatorioController extends Controller
{
    public function index()
    {
        // Contagem total de tarefas
        $totalTarefas = Tarefa::count();

        // Contagem de tarefas pendentes
        $tarefasPendentes = Tarefa::where('status', 'pendente')->count();

        // Cálculo do tempo médio de conclusão em horas
        $tempoMedioConclusao = Tarefa::whereNotNull('data_hora_conclusao')
            ->whereNotNull('data_hora_criacao')
            ->avg(DB::raw('EXTRACT(EPOCH FROM (data_hora_conclusao - data_hora_criacao)) / 3600'));

        // Retorne a resposta com o Inertia::render
        return Inertia::render('Relatorios/Index', [
            'total' => $totalTarefas,
            'pendentes' => $tarefasPendentes,
            'tempoMedio' => round($tempoMedioConclusao, 2),
        ]);
    }
}
