<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('tarefas', function (Blueprint $table) {
            $table->id('id_tarefa');
            $table->string('titulo');
            $table->text('descricao')->nullable();
            $table->timestamp('data_hora_criacao')->useCurrent();
            $table->timestamp('data_hora_conclusao')->nullable();
            $table->unsignedBigInteger('id_lista');
            $table->foreign('id_lista')->references('id')->on('listas_tarefas')->onDelete('cascade');
            $table->timestamps();
        });
    }    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tarefas');
    }
};
