<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Status;

class StatusSeeder extends Seeder
{
    protected $statuses = [
        [
            'name' => 'Draft',
            'code' => 'DFT',
            'status' => 'active',
            'description' => 'The document is in a draft state, and is not ready for use.'
        ],
        [
            'name' => 'Approval',
            'code' => 'APP',
            'status' => 'active',
            'description' => 'A review cycle is currently in progress for the document and it cannot be used until it is approved'
        ],
        [
            'name' => 'Issued For Use',
            'code' => 'IFU',
            'status' => 'active',
            'description' => 'Document has been issued for use.'
        ],
        [
            'name' => 'Superseded',
            'code' => 'SUP',
            'status' => 'active',
            'description' => 'Document has been superseded by another revision.'
        ],
        [
            'name' => 'Obsolete',
            'code' => 'OBS',
            'status' => 'active',
            'description' => 'The document is no longer relevant and cannot be used.'
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
        foreach($this->statuses as $status)
        {
            $model = new Status([
                'name' => $status['name'],
                'code' => $status['code'],
                'status' => $status['status'],
                'description' => $status['description'],
                'created_at' => date('Y-m-d H:i:s', time()) ?? '2023-02-03 22:31:58', // yyyy-mm-dd hh:mm:ss
                'updated_at' => date('Y-m-d H:i:s', time()) ?? '2023-02-03 22:31:58', // yyyy-mm-dd hh:mm:ss
            ]);
            $model->saveQuietly();
        }
    }
}
