<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\ProjectSettings;

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
        $one = Project::create([
            'name' => 'QLD BR-1 Pipeline',
            'status' => 'active',
            'description' => 'Queensland BR-1 Pipeline - Cairns/Brisbane - Industrial LNG - PowerCorp',
            'code' => 'QBR1',
            'start' => date('Y-m-d H:i:s', time()),
            'end' => null,
            'created_at' => date('Y-m-d H:i:s', time()),
            'updated_at' => date('Y-m-d H:i:s', time()),
        ]);

        // Create Settings for the project.
        ProjectSettings::create([
            'project_id' => $one->id,
            'settings' => json_encode([
                'manualNumbering' => true,
                'enforceUploads' => false,
            ]),
        ]);

        // Project 2
        $two = Project::create([
            'name' => 'QLD BR-2 Pipeline',
            'status' => 'active',
            'description' => 'Queensland BR-2 Pipeline - Mackay/Bundaburg - Industrial LNG - PowerCorp',
            'code' => 'QBR2',
            'start' => date('Y-m-d H:i:s', time()),
            'end' => null,
            'created_at' => date('Y-m-d H:i:s', time()),
            'updated_at' => date('Y-m-d H:i:s', time()),
        ]);

        ProjectSettings::create([
            'project_id' => $two->id,
            'settings' => json_encode([
                'manualNumbering' => false,
                'enforceUploads' => true,
            ]),
        ]);

        // Project 3
        $three = Project::create([
            'name' => 'QLD BR-3 Pipeline',
            'status' => 'active',
            'description' => 'Queensland BR-3 Pipeline - Toowoomba/Winton - Industrial LNG - PowerCorp',
            'code' => 'QBR3',
            'start' => date('Y-m-d H:i:s', time()),
            'end' => null,
            'created_at' => date('Y-m-d H:i:s', time()),
            'updated_at' => date('Y-m-d H:i:s', time()),
        ]);

        ProjectSettings::create([
            'project_id' => $three->id,
            'settings' => json_encode([
                'manualNumbering' => true,
                'enforceUploads' => true,
            ]),
        ]);
    }
}
