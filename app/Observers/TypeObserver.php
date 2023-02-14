<?php

namespace App\Observers;

use App\Models\Type;
use App\Observers\Traits\WritesEvents;

class TypeObserver
{
    use WritesEvents;

    /**
     * Handle the Type "created" event.
     *
     * @param  \App\Models\Type  $type
     * @return void
     */
    public function created(Type $type)
    {
        $this->write($type, 'created', 'user');
    }

    /**
     * Handle the Type "updated" event.
     *
     * @param  \App\Models\Type  $type
     * @return void
     */
    public function updated(Type $type)
    {
        $this->write($type, 'updated', 'user');
    }

    /**
     * Handle the Type "deleted" event.
     *
     * @param  \App\Models\Type  $type
     * @return void
     */
    public function deleted(Type $type)
    {
        $this->write($type, 'deleted', 'user');
    }

    /**
     * Handle the Type "restored" event.
     *
     * @param  \App\Models\Type  $type
     * @return void
     */
    public function restored(Type $type)
    {
        $this->write($type, 'restored', 'user');
    }

    /**
     * Handle the Type "force deleted" event.
     *
     * @param  \App\Models\Type  $type
     * @return void
     */
    public function forceDeleted(Type $type)
    {
        $this->write($type, 'force deleted', 'user');
    }
}
