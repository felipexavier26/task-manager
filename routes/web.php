<?php

use App\Http\Controllers\TarefaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RelatorioController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/relatorios', [RelatorioController::class, 'index'])->name('relatorios.index');

    Route::prefix('tarefas')->group(function () {
        Route::get('/', [TarefaController::class, 'index'])->name('tarefas.index');
        Route::get('/tarefas/create', [TarefaController::class, 'create'])->name('tarefas.create');
        Route::post('/tarefas', [TarefaController::class, 'store'])->name('tarefas.store');
        Route::get('{id_tarefa}', [TarefaController::class, 'show'])->name('tarefas.show');
        Route::get('{id_tarefa}/edit', [TarefaController::class, 'edit'])->name('tarefas.edit');
        Route::put('{id_tarefa}', [TarefaController::class, 'update'])->name('tarefas.update');
        Route::delete('{id_tarefa}', [TarefaController::class, 'destroy'])->name('tarefas.destroy');
    });
});




require __DIR__ . '/auth.php';
