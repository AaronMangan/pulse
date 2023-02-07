<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;

    protected $fillable = [
        'model', 'model_id', 'user_id', 'event', 'level', 'old', 'new', 'description',
    ];

    protected $visible = [
        'id', 'model', 'model_id', 'user_id', 'event', 'level', 'old', 'new', 'description', 'created_at', 'updated_at'
    ];

    protected $casts = [
        'old' => 'array',
        'new' => 'array',
    ];
}