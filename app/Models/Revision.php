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

    /**
     * Return the documents associated with this revision.
     *
     * @return HasMany
     */
    public function documents(): HasMany
    {
        return $this->hasMany(\App\Models\Document::class);
    }
}
