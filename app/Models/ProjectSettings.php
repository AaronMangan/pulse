<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectSettings extends Model
{
    use HasFactory;

    protected $fillable = ['project_id', 'settings'];

    protected $casts = [
        'settings' => 'array'
    ];

    /**
     * Return the project.
     *
     * @return void
     */
    public function project() {
        return $this->belongsTo(\App\Models\Project::class);
    }
}
