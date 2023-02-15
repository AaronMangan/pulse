<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Fetch projects.
        $projects = Project::all();
        
        // Return the Inertia view
        return Inertia::render('Projects/Projects', ['projects' => $projects]);
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
        // Get validated data.
        $validated = $request->validated();
        
        $created = Project::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'start' => date('Y-m-d H:i:s', strtotime($validated['start'])),
            'end' => null,
            'code' => $validated['code']
        ]);

        // Create the project settings model as well. This can be modified
        // later to use pre-determined settings from the user.
        \App\Models\ProjectSettings::create([
            'project_id' => $created->id,
            'settings' => [
                'manualNumbering' => false,
                'enforceUploads' => false,
            ]
        ]);

        // Notify the user of the outcome of making a new type.
        $request->session()->flash(
            ($created) ? 'success' : 'error',
            ($created) ? "Project {$created->name} was created successfully!" : 'An error occured, please try again.'
        );

        // Return to the settings index.
        return redirect()->route('projects.index');
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
        // $request->session()->flash('error', 'To Be Implemented');
        // return redirect()->route('projects.index');
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

    /**
     * Archive or Restore the project.
     *
     * @param Project $project
     * @return \Illuminate\Http\Response
     */
    public function archive(Request $request, Project $project)
    {
        // Change the status to 'inactive'
        $project->status = ($project->status == 'active') ? 'inactive' : 'active';
        $project->save();
        
        // Notify the user of the outcome of making a new type.
        $request->session()->flash(
            'success', 'Project was updated successfully'
        );
        
        // Return to the settings index.
        return redirect()->route('projects.index');
    }
}
