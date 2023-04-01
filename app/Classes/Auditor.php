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
     * Undocumented variable
     *
     * @var boolean
     */
    private $new = false;

    /**
     * Undocumented variable
     *
     * @var string
     */
    private $leader = '';


    /**
     * Undocumented variable
     *
     * @var string
     */
    private $documentNumber = '';

    /**
     * Class Constructor.
     *
     * @return void
     */
    public function __construct(int $project_id, ?bool $new = false, ?int $id = null)
    {
        // Set the project id for the instance.
        $this->projectId = ($project_id !== false && $project_id > 0) ? $project_id : false;

        //
        if ($this->projectId != false) {
            $this->setAuditCache();
        }

        $this->new = $new;
        //
        // if (!$new) {
        //     $this->load($id);
        // }
    }


    public function assign(array $input): ?array
    {
        //
        if (!$this->new) {
            return [];
        }

        $this->populateLeader($input);
        $this->documentNumber = $this->setIndex();
        return [
            'status' => true,
            'number' => $this->documentNumber,
        ];
    }

    private function populateLeader(array $input): self
    {
        $this->leader = "{$this->cache['project']['code']}-{$this->cache['type'][$input['type_id']]['code']}-{$this->cache['discipline'][$input['discipline_id']]['code']}";
        return $this;
    }

    private function setIndex(): ?string
    {
        return "{$this->leader}-001";
    }
    /**
     * Sets a cache to use for metadata to help limit the number of DB Calls.
     *
     * @param string|null $refresh
     * @return self|null
     */
    protected function setAuditCache(?string $refresh = 'all'): ?self
    {
        $temp = [];
        $keys = ($refresh == 'all')
            ? array_keys(config('pulse.objectMap'))
            : array_keys(config("pulse.objectMap.{$refresh}", []));

        foreach ($keys as $key) {
            // Get the matching project.
            if ($key == 'project') {
                $temp[$key] = config('pulse.objectMap')[$key]['model']::where('id', '=', $this->projectId)
                    ->with(config("pulse.objectMap.{$key}.relationships"))
                    ->first(config("pulse.objectMap.{$key}.columns") ?? ['*'])
                    ->toArray();
            }
            // Get the metadata fields
            else {
                $results = config('pulse.objectMap')[$key]['model']::where('status', '!=', 'inactive')
                    ->with(config("pulse.objectMap.{$key}.relationships"))
                    ->get(config("pulse.objectMap.{$key}.columns") ?? ['*'])
                    ->toArray();

                foreach ($results as $result) {
                    $temp[$key][$result['id']] = $result;
                }
            }
        }
        $this->cache = $temp ?? [];
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
