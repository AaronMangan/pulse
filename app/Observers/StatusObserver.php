<?php

namespace App\Observers;

use App\Models\Status;
use App\Observers\Traits\WritesEvents;

class StatusObserver
{
    use WritesEvents;
    /**
     * Handle the Status "created" event.
     *
     * @param  \App\Models\Status  $status
     * @return void
     */
    public function created(Status $status)
    {
        $this->write($status, 'created', 'user');
    }

    /**
     * Handle the Status "updated" event.
     *
     * @param  \App\Models\Status  $status
     * @return void
     */
    public function updated(Status $status)
    {
        $this->write($status, 'updated', 'user');
    }

    /**
     * Handle the Status "deleted" event.
     *
     * @param  \App\Models\Status  $status
     * @return void
     */
    public function deleted(Status $status)
    {
        $this->write($status, 'deleted', 'user');
    }

    /**
     * Handle the Status "restored" event.
     *
     * @param  \App\Models\Status  $status
     * @return void
     */
    public function restored(Status $status)
    {
        $this->write($status, 'restored', 'user');
    }

    /**
     * Handle the Status "force deleted" event.
     *
     * @param  \App\Models\Status  $status
     * @return void
     */
    public function forceDeleted(Status $status)
    {
        $this->write($status, 'force deleted', 'user');
    }
}
