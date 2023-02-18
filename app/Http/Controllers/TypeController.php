<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTypeRequest;
use App\Http\Requests\UpdateTypeRequest;
use App\Models\Type;
use Illuminate\Http\Request;

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
        $request->session()->flash(
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
        // Get validated data
        $validated = $request->safe()->only(['name', 'code']);

        $updated = $type->update($validated);

        return response()->json([
            'status' => ($updated) ? 'success' : 'fail',
            'message' => ($updated) 
                ? 'Type was updated successfully!'
                : 'An error occurred, please contact your administrator '
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Type  $type
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Type $type)
    {
        // Delete the type
        $deleted = $type->delete();

        // Make some toast.
        $request->session()->flash(
            ($deleted) ? 'success' : 'fail',
            ($deleted) ? 'Type deleted successfully' : 'An error occurred, please contact your administrator'
        );

        // Return the response
        return redirect()->route('settings.index');
    }

    /**
     * Archive a type.
     *
     * @param Request $request
     * @param Type $type
     * @return void
     */
    public function archive(UpdateTypeRequest $request, Type $type)
    {
        // Change the status to 'inactive'
        $type->status = ($type->status == 'active') ? 'inactive' : 'active';
        $type->save();
        
        // Make toast
        $request->session()->flash(
            'success',
            ($type->status == 'active') ? "{$type->name} was restored successfully" : "{$type->name} was archived successfully"
        );
        
        // Return the user to the settings index.
        return redirect()->route('settings.index');
    }
}
