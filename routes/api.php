<?php

use App\Http\Controllers\Api\TarefaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/tarefas', [TarefaController::class, 'index']);
Route::get('/tarefas/{id}', [TarefaController::class, 'show']);
Route::post('/tarefas', [TarefaController::class, 'store']);
Route::put('/tarefas/{id}', [TarefaController::class, 'update']);
Route::delete('/tarefas/{id}', [TarefaController::class, 'destroy']);