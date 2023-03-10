<?php

/**
* Handles creating, updating, assigning & encoding/decoding of document numbers.
*
* @category Custom Class
* @author Aaron Mangan <azza.mangan@gmail.com>
* @version 1.0.0
*/

namespace App\Classes;

use App\Models\Document;

class Auditor
{
    /**
     * Cached data to re-use. This should hopefully cut down on DB calls.
     *
     * @var array
     */
    private $cache = [];

    /**
     * Project id
     *
     * @var int|bool
     */
    private $projectId = false;

    /**
     * Class Constructor.
     *
     * @return void
     */
    public function __construct(int $project_id)
    {
        // Set the project id for the instance.
        $this->projectId = ($project_id !== false && $project_id > 0) ? $project_id : false;

        //
        if ($this->projectId != false) {
            $this->setCache();
        }
    }


    protected function setCache(?string $refresh = 'all'): ?self
    {
        $temp = [];
        $keys = array_keys(config('pulse.objectMap'));
        foreach ($keys as $key) {
            if ($key == 'project') {
                $temp[$key] = config('pulse.objectMap')[$key]['model']::where('id', '=', $this->projectId)->with($relationships ?? [])->first(config("pulse.objectMap.{$key}.columns") ?? ['*'])->toArray();
            } else {
                // $temp[$key] = config('pulse.objectMap')[$key]['model']::where('status', '!=', 'inactive')->with($relationships ?? [])->get(config("pulse.objectMap.{$key}.columns") ?? ['*'])->toArray();
                $results = config('pulse.objectMap')[$key]['model']::where('status', '!=', 'inactive')->with($relationships ?? [])->get(config("pulse.objectMap.{$key}.columns") ?? ['*'])->toArray();
                foreach ($results as $result) {
                    $temp[$key][$result['id']] = $result;
                }
            }
        }
        $this->cache = $temp ?? [];
        // $this->cache = (isset($this->projectId)) ? [
        //     'project' => \App\Models\Project::where('id', '=', $this->projectId)->with($relationships ?? [])->get(config('pulse.objectMap.project.columns') ?? ['*'])->toArray(),
        //     '' => '',
        // ] : [];
        return $this;
    }

    /**
     * Returns the currently set cache.
     *
     * @return array|null
     */
    public function getCache(): ?array
    {
        return $this->cache ?? [];
    }
}
