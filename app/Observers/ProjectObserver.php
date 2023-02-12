<?php

namespace App\Observers;

use App\Models\Project;
use App\Models\History;
class ProjectObserver
{
    /**
     * Handle the Project "created" event.
     *
     * @param  \App\Models\Project  $project
     * @return void
     */
    public function created(Project $project)
    {
        $user = \Auth::user();
        $name = $user->name ?? 'system';
        
        // Add the history event.
        History::create([
            'model' => Project::class,
            'model_id' => $project->id,
            'user_id' => \Auth::user()->id,
            'event' => 'created',
            'level' => 'user',
            'old' => json_encode([]),
            'new' => json_encode($project->toArray()),
            'description' => "New project {$project->name} created by: {$name}",
        ]);
    }

    /**
     * Handle the Project "updated" event.
     *
     * @param  \App\Models\Project  $project
     * @return void
     */
    public function updated(Project $project)
    {
        //
        $user = \Auth::user();
        $name = $user->name ?? 'system';
        
        // Add the history event.
        History::create([
            'model' => Project::class,
            'model_id' => $project->id,
            'user_id' => \Auth::user()->id,
            'event' => 'updated',
            'level' => 'user',
            'old' => json_encode([]),
            'new' => json_encode($project->toArray()),
            'description' => "Project {$project->name} updated by: {$name}",
        ]);
    }

    /**
     * Handle the Project "deleted" event.
     *
     * @param  \App\Models\Project  $project
     * @return void
     */
    public function deleted(Project $project)
    {
        //
    }

    /**
     * Handle the Project "restored" event.
     *
     * @param  \App\Models\Project  $project
     * @return void
     */
    public function restored(Project $project)
    {
        //
    }

    /**
     * Handle the Project "force deleted" event.
     *
     * @param  \App\Models\Project  $project
     * @return void
     */
    public function forceDeleted(Project $project)
    {
        //
    }
}
