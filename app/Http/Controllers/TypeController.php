<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTypeRequest;
use App\Http\Requests\UpdateTypeRequest;
use App\Models\Type;

class TypeController extends Controller
{
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
     * @param  \App\Http\Requests\StoreTypeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTypeRequest $request)
    {
        $validated = $request->safe()->only(['name', 'code']);
 
        // Create the revision.
        $created = Type::create([
            'name' => ucwords($validated['name']),
            'code' => strtoupper($validated['code']),
        ]);
        
        // Notify the user of the outcome of making a new type.
        $request->toast(
            ($created) ? 'success' : 'error',
            ($created) ? "Type {$created->name} was created successfully!" : ''
        );

        // Return to the settings index.
        return redirect()->route('settings.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Type  $type
     * @return \Illuminate\Http\Response
     */
    public function show(Type $type)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Type  $type
     * @return \Illuminate\Http\Response
     */
    public function edit(Type $type)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTypeRequest  $request
     * @param  \App\Models\Type  $type
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTypeRequest $request, Type $type)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Type  $type
     * @return \Illuminate\Http\Response
     */
    public function destroy(Type $type)
    {
        //
    }

    /**
     * Archive a type.
     *
     * @param Request $request
     * @param Type $type
     * @return void
     */
    public function archiveType(Request $request, Type $type)
    {
        // Change the status to 'inactive'
        $type->status = ($type->status == 'active') ? 'inactive' : 'active';
        $type->save();
        return redirect()->back()->with('flash_success', 'Status updated successfully');
    }
}
