<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Type extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'code', 'status'
    ];

    /**
     * Return the documents associated with this type.
     *
     * @return HasMany
     */
    public function documents(): HasMany
    {
        return $this->hasMany(\App\Models\Document::class);
    }
}
