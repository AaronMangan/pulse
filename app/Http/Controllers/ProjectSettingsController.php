<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectSettingsRequest;
use App\Http\Requests\UpdateProjectSettingsRequest;
use App\Models\ProjectSettings;
use Illuminate\Http\Request;

class ProjectSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, int $id)
    {
        // Fetch the Project.
        return response()->json(ProjectSettings::where('project_id', $id)->get() ?? []);
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
     * @param  \App\Http\Requests\StoreProjectSettingsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProjectSettingsRequest $request, $id)
    {
        //
        $validated = $request->safe()->only(['manualNumbering', 'enforceUploads', 'numberFormat']);
        $projectSettings = ProjectSettings::findOrFail($id);
        
        $projectSettings->settings = $validated;
        $saved = $projectSettings->save();
        $request->session()->flash(
            ($saved) ? 'success' : 'error',
            ($saved) ? "Project settings were updated" : 'Unable to update project settings, please try again'
        );
        return redirect()->route('projects.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProjectSettings  $projectSettings
     * @return \Illuminate\Http\Response
     */
    public function show(ProjectSettings $projectSettings)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProjectSettings  $projectSettings
     * @return \Illuminate\Http\Response
     */
    public function edit(ProjectSettings $projectSettings)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProjectSettingsRequest  $request
     * @param  \App\Models\ProjectSettings  $projectSettings
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProjectSettingsRequest $request, ProjectSettings $projectSettings)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProjectSettings  $projectSettings
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectSettings $projectSettings)
    {
        //
    }
}
