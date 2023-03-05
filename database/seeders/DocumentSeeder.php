<?php

namespace Database\Seeders;

use App\Models\Document;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DocumentSeeder extends Seeder
{
    private $data = [
        [
            'number' => 'QBR1-REP-MEC-001',
            'description' => 'QLD BR-1 Pipeline - Mechanical - Pump Motor PM-1 Condition Report',
            'project_id' => 1,
            'type_id' => 6,
            'discipline_id' => 2,
            'status_id' => 1,
            'revision_id' => 1,
            'created_by' => 1,
            'last_updated_by' => 1,
            'latest' => true,
            'metadata' => null,
        ],[
            'number' => 'QBR1-REP-GEN-001',
            'description' => 'QLD BR-1 Pipeline - General - Site Report January 2023',
            'project_id' => 1,
            'type_id' => 6,
            'discipline_id' => 1,
            'status_id' => 1,
            'revision_id' => 1,
            'created_by' => 1,
            'last_updated_by' => 1,
            'latest' => true,
            'metadata' => null,
        ],[
            'number' => 'QBR1-REP-CIV-001',
            'description' => 'QLD BR-1 Pipeline - Civil - Site Setup, Access & Egress Report',
            'project_id' => 1,
            'type_id' => 6,
            'discipline_id' => 4,
            'status_id' => 1,
            'revision_id' => 1,
            'created_by' => 1,
            'last_updated_by' => 1,
            'latest' => true,
            'metadata' => null,
        ]
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create the documents
        foreach ($this->data as $document) {
            $model = new Document($document);
            $model->created_at = date('Y-m-d H:i:s', time());
            $model->updated_at = date('Y-m-d H:i:s', time());
            $model->saveQuietly();
        }
    }
}
