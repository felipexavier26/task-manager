<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarefa extends Model
{
    use HasFactory;

    protected $table = 'tarefas';

    protected $primaryKey = 'id_tarefa'; 

    protected $fillable = [
        'titulo',
        'descricao',
        'data_hora_criacao',
        'data_hora_conclusao',
        'id_lista',
    ];
}
