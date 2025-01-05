<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;



class UserSeeder extends Seeder
{
    public function run(): void
    {
        if (!User::where('email', 'teste@teste.com')->first()) {
            User::create([
                'name' => 'teste',
                'email' => 'teste@teste.com',
                'password' => Hash::make('123456') 
            ]);
        }
    }
}

