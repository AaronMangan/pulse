<?php

namespace App\Observers;

use App\Models\Revision;

class RevisionObserver
{
    /**
     * Handle the Revision "created" event.
     *
     * @param  \App\Models\Revision  $revision
     * @return void
     */
    public function created(Revision $revision)
    {
        //
    }

    /**
     * Handle the Revision "updated" event.
     *
     * @param  \App\Models\Revision  $revision
     * @return void
     */
    public function updated(Revision $revision)
    {
        //
    }

    /**
     * Handle the Revision "deleted" event.
     *
     * @param  \App\Models\Revision  $revision
     * @return void
     */
    public function deleted(Revision $revision)
    {
        //
    }

    /**
     * Handle the Revision "restored" event.
     *
     * @param  \App\Models\Revision  $revision
     * @return void
     */
    public function restored(Revision $revision)
    {
        //
    }

    /**
     * Handle the Revision "force deleted" event.
     *
     * @param  \App\Models\Revision  $revision
     * @return void
     */
    public function forceDeleted(Revision $revision)
    {
        //
    }
}
