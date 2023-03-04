<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Models\Status;
use App\Observers\StatusObserver;
use App\Models\Project;
use App\Observers\ProjectObserver;
use App\Models\Discipline;
use App\Observers\DisciplineObserver;
use App\Models\Type;
use App\Observers\TypeObserver;
use App\Models\Revision;
use App\Observers\RevisionObserver;
use App\Models\User;
use App\Observers\UserObserver;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Observers
     *
     * @var array
     */
    protected $observers = [
        Status::class => [StatusObserver::class],
        Project::class => [ProjectObserver::class],
        Discipline::class => [DisciplineObserver::class],
        Type::class => [TypeObserver::class],
        Revision::class => [RevisionObserver::class],
        User::class => [UserObserver::class],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
