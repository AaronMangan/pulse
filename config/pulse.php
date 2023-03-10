<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Pulse Config
    |--------------------------------------------------------------------------
    |
    | This array contains the configuration for the Pulse DMS. Options such
    | as accepted placeholders, pagination limits, etc.
    |
    */

    // Pagination
    'paginationSettings' => [
        'default' => 25,
        'documents' => 100,
        'users' => 50,
        'settings' => 20,
    ],

    // Map of various metadata objects and wat fields they use.
    'objectMap' => [
        'project' => [
            'model' => \App\Models\Project::class,               // Which model does this refer to?
            'use' => 'code',                                    // What prop on the model is used?
            'as' => [                                           // Define your placeholder aliases
                'project', 'project_code',
                'proj', 'project_id'
            ],
            'columns' => [
                'id', 'name', 'code', 'status'
            ],
            'relationships' => [
                'projectSettings'
            ],
        ],
        'type' => [
            'model' => \App\Models\Type::class,
            'use' => 'code',
            'as' => [
                'type', 'type_id',
                'doc_type', 'document_type'
            ],
            'columns' => [
                'id', 'name', 'code', 'status'
            ],
        ],
        'discipline' => [
            'model' => \App\Models\Discipline::class,
            'use' => 'code',
            'as' => [
                'discipline', 'discipline_id',
                'doc_discipline', 'document_discipline'
            ],
            'columns' => [
                'id', 'name', 'code', 'status'
            ],
        ],
        'revision' => [
            'model' => \App\Models\Revision::class,
            'use' => 'name',
            'as' => [
                'revision', 'rev', 'doc_rev', 'document_revision'
            ],
            'columns' => [
                'id', 'name', 'status'
            ],
        ],
        'status' => [
            'model' => \App\Models\Status::class,
            'use' => 'code',
            'as' => [
                'status', 'status_id',
                'doc_status', 'document_status'
            ],
            'columns' => [
                'id', 'name', 'code', 'status'
            ],
        ]
    ],
];
