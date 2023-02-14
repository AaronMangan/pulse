<?php

namespace App\Observers;

use App\Models\Discipline;
use App\Observers\Traits\WritesEvents;
class DisciplineObserver
{
    use WritesEvents;
    /**
     * Handle the Discipline "created" event.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return void
     */
    public function created(Discipline $discipline)
    {
        $this->write($discipline, 'created', 'user');
    }

    /**
     * Handle the Discipline "updated" event.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return void
     */
    public function updated(Discipline $discipline)
    {
        $this->write($discipline, 'updated', 'user');
    }

    /**
     * Handle the Discipline "deleted" event.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return void
     */
    public function deleted(Discipline $discipline)
    {
        $this->write($discipline, 'deleted', 'user');
    }

    /**
     * Handle the Discipline "restored" event.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return void
     */
    public function restored(Discipline $discipline)
    {
        $this->write($discipline, 'restored', 'user');
    }

    /**
     * Handle the Discipline "force deleted" event.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return void
     */
    public function forceDeleted(Discipline $discipline)
    {
        $this->write($discipline, 'force_deleted', 'user');
    }
}
