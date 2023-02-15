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
            'description' => 'Document is in a draft state and can not be used until it is approved \ issued.',
            'status' => 'active',
        ],
        [
            'name' => 'Issued For Approval',
            'code' => 'IFA',
            'description' => 'Document is currently undergoing a review & approval cycle.',
            'status' => 'active',
        ],
        [
            'name' => 'Issued For Use',
            'code' => 'IFU',
            'description' => 'Document has been release for use of its intended purpose.',
            'status' => 'active',
        ],
        [
            'name' => 'Information Only',
            'code' => 'INF',
            'description' => 'This document is for information purposes only, and may not be up-to-date or complete.',
            'status' => 'active',
        ],
        [
            'name' => 'Deleted',
            'code' => 'DEL',
            'description' => 'Document has been deleted and can no longer be used.',
            'status' => 'active',
        ],
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Iterate through the types and add them
        if(env('APP_ENV') == 'local') {
            foreach($this->types as $type)
            {
                Type::create($type);
            }
        }
    }
}
