<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 3 Projects. Two active and one inactive.
        Project::create([
            'name' => 'QLD BR-1 Pipeline',
            'status' => 'active',
            'description' => 'Queensland BR-1 Pipeline - Cairns/Brisbane - Industrial LNG - PowerCorp',
            'code' => 'QBR1',
            'start' => date('Y-m-d H:i:s', time()),
            'end' => null,
            'created_at' => date('Y-m-d H:i:s', time()),
            'updated_at' => date('Y-m-d H:i:s', time()),
        ]);

        // Project 2
        Project::create([
            'name' => 'QLD BR-2 Pipeline',
            'status' => 'active',
            'description' => 'Queensland BR-2 Pipeline - Mackay/Bundaburg - Industrial LNG - PowerCorp',
            'code' => 'QBR2',
            'start' => date('Y-m-d H:i:s', time()),
            'end' => null,
            'created_at' => date('Y-m-d H:i:s', time()),
            'updated_at' => date('Y-m-d H:i:s', time()),
        ]);

        // Project 3
        Project::create([
            'name' => 'QLD BR-3 Pipeline',
            'status' => 'active',
            'description' => 'Queensland BR-3 Pipeline - Toowoomba/Winton - Industrial LNG - PowerCorp',
            'code' => 'QBR3',
            'start' => date('Y-m-d H:i:s', time()),
            'end' => null,
            'created_at' => date('Y-m-d H:i:s', time()),
            'updated_at' => date('Y-m-d H:i:s', time()),
        ]);
    }
}
