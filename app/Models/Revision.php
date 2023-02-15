<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Revision extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'status', 'description'
    ];

    protected $visible = [
        'id', 'name', 'status', 'description', 'created_at', 'updated_at'
    ];
}
