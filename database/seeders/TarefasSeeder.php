<?php

namespace Database\Seeders;

// database/seeders/TarefasSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class TarefasSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 10; $i++) {
            DB::table('tarefas')->insert([
                'titulo' => $faker->sentence,
                'descricao' => $faker->paragraph,
                'data_hora_criacao' => now(),
                'data_hora_conclusao' => $faker->dateTimeThisYear(),
                'status' => $faker->randomElement(['pendente', 'em andamento', 'concluída']),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
