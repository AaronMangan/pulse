<?php

namespace App\Observers;

use App\Models\Revision;
use App\Observers\Traits\WritesEvents;

class RevisionObserver
{
    use WritesEvents;
    /**
     * Handle the Revision "created" event.
     *
     * @param  \App\Models\Revision  $revision
     * @return void
     */
    public function created(Revision $revision)
    {
        $this->write($revision, 'created', 'user');
    }

    /**
     * Handle the Revision "updated" event.
     *
     * @param  \App\Models\Revision  $revision
     * @return void
     */
    public function updated(Revision $revision)
    {
        $this->write($revision, 'updated', 'user');
    }

    /**
     * Handle the Revision "deleted" event.
     *
     * @param  \App\Models\Revision  $revision
     * @return void
     */
    public function deleted(Revision $revision)
    {
        $this->write($revision, 'deleted', 'user');
    }

    /**
     * Handle the Revision "restored" event.
     *
     * @param  \App\Models\Revision  $revision
     * @return void
     */
    public function restored(Revision $revision)
    {
        $this->write($revision, 'restored', 'user');
    }

    /**
     * Handle the Revision "force deleted" event.
     *
     * @param  \App\Models\Revision  $revision
     * @return void
     */
    public function forceDeleted(Revision $revision)
    {
        $this->write($revision, 'force deleted', 'user');
    }
}
