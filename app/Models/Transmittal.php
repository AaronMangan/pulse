<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transmittal extends Model
{
    use HasFactory;

    protected $fillable = [
        'to_user_id', 'from_user_id', 'addresses', 'subject', 'details', 'reference', 'external_reference', 'metadata',
    ];
}
