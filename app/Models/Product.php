<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Campos que podem ser atribuídos em massa
    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
        'active',
    ];

    // Conversões de tipos para atributos
    protected $casts = [
        'active' => 'boolean',
        'price' => 'decimal:2',
    ];
}
