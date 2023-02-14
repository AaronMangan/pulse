<?php

namespace App\Observers;

use App\Models\Discipline;

class DisciplineObserver
{
    /**
     * Handle the Discipline "created" event.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return void
     */
    public function created(Discipline $discipline)
    {
        //
    }

    /**
     * Handle the Discipline "updated" event.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return void
     */
    public function updated(Discipline $discipline)
    {
        //
    }

    /**
     * Handle the Discipline "deleted" event.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return void
     */
    public function deleted(Discipline $discipline)
    {
        //
    }

    /**
     * Handle the Discipline "restored" event.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return void
     */
    public function restored(Discipline $discipline)
    {
        //
    }

    /**
     * Handle the Discipline "force deleted" event.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return void
     */
    public function forceDeleted(Discipline $discipline)
    {
        //
    }
}
