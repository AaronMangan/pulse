<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransmittalDocuments extends Model
{
    use HasFactory;

    protected $fillable = [
        'document_id', 'transmittal_id'
    ];
}
