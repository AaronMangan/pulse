<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Document extends Model
{
    use HasFactory;

    /**
     * Attributes that can be assigned via user input.
     *
     * @var array
     */
    protected $fillable = [
        'number', 'description', 'project_id', 'type_id', 'discipline_id',
        'status_id', 'revision_id', 'attachment_id', 'state', 'latest', 'metadata',
        'created_at', 'updated_at', 'created_by', 'last_updated_by'
    ];

    /**
     * RELATIONSHIPS.
     *
     * This model has a number of relationships to other tables, because it is the main item for the application.
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Project::class);
    }

    /**
     * Return the type associated with this document.
     *
     * @return BelongsTo
     */
    public function type(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Type::class);
    }

    /**
     * Return the discipline associated with this document.
     *
     * @return BelongsTo
     */
    public function discipline(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Discipline::class);
    }

    /**
     * Return the status associated with this document.
     *
     * @return BelongsTo
     */
    public function status(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Status::class);
    }

    /**
     * Return the revision associated with this document.
     *
     * @return BelongsTo
     */
    public function revision(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Revision::class);
    }
}
