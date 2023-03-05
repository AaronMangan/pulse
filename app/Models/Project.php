<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Project extends Model
{
    use HasFactory;

    /**
     * These can be set via user input.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'status', 'description', 'code', 'start', 'end'
    ];

    /**
     * Cast these attributes.
     *
     * @var array
     */
    protected $casts = [
        'start' => 'datetime:d-m-Y',
        'end' => 'datetime:d-m-Y',
    ];

    /**
     * Returns the related settings.
     *
     * @return HasOne
     */
    public function settings(): HasOne
    {
        return $this->hasOne(\App\Models\ProjectSettings::class);
    }

    /**
     * Returns the related documents.
     *
     * @return HasMany
     */
    public function documents(): HasMany
    {
        return $this->hasMany(\App\Models\Document::class);
    }
}
