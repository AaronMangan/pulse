<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if(env('APP_ENV') === 'local'){
            $user = new \App\Models\User([
                'name' => 'Aaron Mangan',
                'email' => 'azza.mangan@gmail.com',
                'email_verified_at' => '2023-02-03 22:31:58',
                'password' => '$2y$10$Va/KW5rmRpOW5gKROSc3SeZYd3PmhQ9FGQNaXOsrqDdfIatfa01Ye',
            ]);
            $user->saveQuietly();
            $this->call(RevisionSeeder::class);
            $this->call(StatusSeeder::class);
            $this->call(ProjectSeeder::class);
            $this->call(DisciplineSeeder::class);
            $this->call(TypeSeeder::class);
        }
    }
}
