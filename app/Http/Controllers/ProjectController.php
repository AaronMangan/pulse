<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Return the Inertia view
        return Inertia::render('Projects/Projects', [
            'projects' => [
                [
                    'id' => 1,
                    'name' => 'Test Project',
                    'status' => 'active',
                    'description' => 'A simple test project',
                    'project_code' => 'TEST',
                    'project_start' => date('Y-m-d H:i:s', time()) ?? '2023-02-03 22:31:58',
                    'project_end' => date('Y-m-d H:i:s', time()) ?? '2023-02-03 22:31:58',
                ],
                [
                    'id' => 2,
                    'name' => 'Test Project #2',
                    'status' => 'active',
                    'description' => 'A simple test project',
                    'project_code' => 'TST2',
                    'project_start' => date('Y-m-d H:i:s', time()) ?? '2023-02-03 22:31:58',
                    'project_end' => date('Y-m-d H:i:s', time()) ?? '2023-02-03 22:31:58',
                ],
                [
                    'id' => 3,
                    'name' => 'Test Project #3',
                    'status' => 'inactive',
                    'description' => 'A simple test project',
                    'project_code' => 'TST3',
                    'project_start' => date('Y-m-d H:i:s', time()) ?? '2023-02-03 22:31:58',
                    'project_end' => date('Y-m-d H:i:s', time()) ?? '2023-02-03 22:31:58',
                ],
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProjectRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProjectRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProjectRequest  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }
}
