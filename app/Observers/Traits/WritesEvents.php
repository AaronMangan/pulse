<?php

namespace App\Observers\Traits;

use App\Models\History;
use Illuminate\Database\Eloquent\Model;

trait WritesEvents
{
    protected function write(Model $model, string $event = 'created', ?string $level = 'user')
    {
        $user = \Auth::user();
        $date = date('d-m-Y @ H:i:s', time());
        $text = ($level == 'user') ? "{$user->name} on {$date}" : "system on {$date}";
        History::create([
            'model' => $model::class,
            'model_id' => $model->id,
            'user_id' => $user->id,
            'event' => $event,
            'level' => $level,
            'old' => json_encode([]),
            'new' => json_encode($model->toArray()),
            'description' => str_replace('App\\Models\\', '', $model::class) . " {$model->id} was {$event} by {$text}",
        ]);
    }
}