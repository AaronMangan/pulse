<?php

namespace App\Observers;

use App\Models\Status;
use App\Models\History;

class StatusObserver
{
    /**
     * Handle the Status "created" event.
     *
     * @param  \App\Models\Status  $status
     * @return void
     */
    public function created(Status $status)
    {
        $user = \Auth::user();
        
        // Add the history event.
        History::create([
            'model' => Status::class,
            'model_id' => $status->id,
            'user_id' => \Auth::user()->id,
            'event' => 'created',
            'level' => 'user',
            'old' => json_encode([]),
            'new' => json_encode($status->toArray()),
            'description' => "New model created by: {$user->name}",
        ]);
    }

    /**
     * Handle the Status "updated" event.
     *
     * @param  \App\Models\Status  $status
     * @return void
     */
    public function updated(Status $status)
    {
        //
    }

    /**
     * Handle the Status "deleted" event.
     *
     * @param  \App\Models\Status  $status
     * @return void
     */
    public function deleted(Status $status)
    {
        //
    }

    /**
     * Handle the Status "restored" event.
     *
     * @param  \App\Models\Status  $status
     * @return void
     */
    public function restored(Status $status)
    {
        //
    }

    /**
     * Handle the Status "force deleted" event.
     *
     * @param  \App\Models\Status  $status
     * @return void
     */
    public function forceDeleted(Status $status)
    {
        //
    }
}
