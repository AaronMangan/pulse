<?php

namespace App\Observers\Traits;

use App\Models\History;
use Illuminate\Database\Eloquent\Model;

trait WritesEvents
{
    protected function write(Model $model, string $event = 'created', ?string $level = 'user')
    {
        $user = \Auth::user();
        $name = $user->name ?? 'System';
        $date = date('d-m-Y @ H:i:s', time());
        $text = ($level == 'user') ? "{$name} on {$date}" : "system on {$date}";
        $what = $model->code ?? $model->name ?? $model->revision ?? '';
        History::create([
            'model' => $model::class,
            'model_id' => $model->id,
            'user_id' => $user->id,
            'event' => $event,
            'level' => $level,
            'old' => json_encode([]),
            'new' => json_encode($model->toArray()),
            'description' => str_replace('App\\Models\\', '', $model::class) . " {$model->id} ({$what}) was {$event} by {$text}",
        ]);
    }
}
