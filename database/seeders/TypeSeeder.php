<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Type;

class TypeSeeder extends Seeder
{
    protected $types = [
        [
            'name' => 'Draft',
            'code' => 'DFT',
            'description' => null,
            'status' => 'active',
        ],
        [
            'name' => '',
            'code' => '',
            'description' => null,
            'status' => 'active',
        ],
        [
            'name' => '',
            'code' => '',
            'description' => null,
            'status' => 'active',
        ],
        [
            'name' => '',
            'code' => '',
            'description' => null,
            'status' => 'active',
        ],
        [
            'name' => '',
            'code' => '',
            'description' => null,
            'status' => '',
        ],
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
    }
}
