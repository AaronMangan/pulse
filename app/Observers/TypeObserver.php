<?php

namespace App\Observers;

use App\Models\Type;

class TypeObserver
{
    /**
     * Handle the Type "created" event.
     *
     * @param  \App\Models\Type  $type
     * @return void
     */
    public function created(Type $type)
    {
        //
    }

    /**
     * Handle the Type "updated" event.
     *
     * @param  \App\Models\Type  $type
     * @return void
     */
    public function updated(Type $type)
    {
        //
    }

    /**
     * Handle the Type "deleted" event.
     *
     * @param  \App\Models\Type  $type
     * @return void
     */
    public function deleted(Type $type)
    {
        //
    }

    /**
     * Handle the Type "restored" event.
     *
     * @param  \App\Models\Type  $type
     * @return void
     */
    public function restored(Type $type)
    {
        //
    }

    /**
     * Handle the Type "force deleted" event.
     *
     * @param  \App\Models\Type  $type
     * @return void
     */
    public function forceDeleted(Type $type)
    {
        //
    }
}
