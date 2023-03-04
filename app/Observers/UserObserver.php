<?php

namespace App\Observers;

use App\Models\User;
use App\Observers\Traits\WritesEvents;

class UserObserver
{
    use WritesEvents;

    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {
        //
        $this->write($user, 'created', 'system');
    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {
        //
        $this->write($user, 'updated', 'system');
    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        //
        $this->write($user, 'deleted', 'system');
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        //
        $this->write($user, 'restored', 'system');
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        //
        $this->write($user, 'force deleted', 'system');
    }
}
