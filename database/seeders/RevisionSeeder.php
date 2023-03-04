<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Revision;

class RevisionSeeder extends Seeder
{
    protected $revisions = [
        [
            'name' => 'A',
            'status' => 'active',
            'description' => null
        ],
        [
            'name' => 'B',
            'status' => 'active',
            'description' => null
        ],
        [
            'name' => 'C',
            'status' => 'active',
            'description' => null
        ],
        [
            'name' => '0',
            'status' => 'active',
            'description' => null
        ],
        [
            'name' => '1',
            'status' => 'active',
            'description' => null
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Seed the DB
        foreach($this->revisions as $revision)
        {
            $model = new Revision([
                'name' => $revision['name'] ?? '',
                'status' => $revision['status'] ?? 'active',
                'description' => $revision['description'] ?? null,
                'created_at' => date('Y-m-d H:i:s', time()) ?? '2023-02-03 22:31:58', // yyyy-mm-dd hh:mm:ss
                'updated_at' => date('Y-m-d H:i:s', time()) ?? '2023-02-03 22:31:58', // yyyy-mm-dd hh:mm:ss
            ]);
            $model->saveQuietly();
        }
    }
}
