<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'code', 'status', 'description',
    ];

    protected $visible = [
        'id', 'name', 'code', 'status', 'description', 'created_at', 'updated_at'
    ];
}
