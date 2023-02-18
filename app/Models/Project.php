<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'status', 'description', 'code', 'start', 'end'
    ];

    protected $casts = [
        'start' => 'datetime:d-m-Y',
        'end' => 'datetime:d-m-Y',
    ];

    public function settings()
    {
        return $this->hasOne(\App\Models\ProjectSettings::class);
    }
}
