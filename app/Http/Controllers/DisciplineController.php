<?php

namespace App\Http\Controllers;

use App\Models\Discipline;
use Illuminate\Http\Request;
use App\Http\Requests\StoreDisciplineRequest;

class DisciplineController extends Controller
{
    /**
     * Error when creating discipline.
     */
    const CREATE_DISCIPLINE_ERROR = 'An error has occured, please try again or contact your administrator';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDisciplineRequest $request)
    {
        // Get validated data only
        $validated = $request->safe()->only(['name', 'code']);

        // Create the revision.
        $created = Discipline::create([
            'name' => ucwords($validated['name']),
            'code' => strtoupper($validated['code']),
        ]);

        // Make some toast!
        $request->toast(
            ($created) ? 'success' : 'error',
            ($created) ? 'Discipline was created successfully!' : self::CREATE_DISCIPLINE_ERROR
        );

        // Return to the index.
        return redirect()->route('settings.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return \Illuminate\Http\Response
     */
    public function show(Discipline $discipline)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return \Illuminate\Http\Response
     */
    public function edit(Discipline $discipline)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Discipline  $discipline
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Discipline $discipline)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Discipline  $discipline
     * @return \Illuminate\Http\Response
     */
    public function destroy(Discipline $discipline)
    {
        //
    }

    /**
     * Archive the Discipline
     *
     * @param Request $request
     * @param Discipline $discipline
     * @return void
     */
    public function archive(Request $request, Discipline $discipline)
    {
        // Change the status to 'inactive'
        $discipline->status = ($discipline->status == 'active') ? 'inactive' : 'active';
        $discipline->save();
        
        // Notify the user of the outcome.
        $request->session()->flash(
            'success', 'Discipline was updated successfully'
        );
        
        // Return to the settings index.
        return redirect()->route('settings.index');
    }
}