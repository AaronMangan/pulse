<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Discipline;

class DisciplineSeeder extends Seeder
{
    protected $disciplines = [
        [
            'name' => 'General',
            'code' => 'GEN',
        ],
        [
            'name' => 'Mechanical',
            'code' => 'MEC',
        ],
        [
            'name' => 'Electrical',
            'code' => 'ELE',
        ],
        [
            'name' => 'Civil',
            'code' => 'CIV',
        ],
        [
            'name' => 'Process',
            'code' => 'PRO',
        ],
        [
            'name' => 'Structural',
            'code' => 'STR',
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->disciplines as $discipline)
        {
            $model = new Discipline($discipline);
            $model->created_at = date('Y-m-d H:i:s', time());
            $model->updated_at = date('Y-m-d H:i:s', time());
            $model->saveQuietly();
        }
    }
}
