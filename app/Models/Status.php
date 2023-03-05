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

    /**
     * Return the documents associated with this status.
     *
     * @return HasMany
     */
    public function documents(): HasMany
    {
        return $this->hasMany(\App\Models\Document::class);
    }
}
