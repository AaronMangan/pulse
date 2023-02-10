<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Revision;
use App\Http\Requests\StoreRevisionRequest;

class RevisionController extends Controller
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRevisionRequest $request)
    {
        //
        $validated = $request->safe()->only(['revision']);

        // Create the revision.
        $created = Revision::create([
            'name' => strtoupper($validated['revision']),
        ]);

        // Return the appropriate response.
        if($created) {
            return redirect()->back()->with('flash.success', 'Revision created successfully');
        } else {
            return redirect()->back()->with('flash.error', 'Unable to create new revision');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Archive the provided revision.
     *
     * @param Request $request
     * @param Revision $revision
     * @return void
     */
    public function archive(Request $request, Revision $revision)
    {
        // Change the status to 'inactive'
        $revision->status = ($revision->status == 'active') ? 'inactive' : 'active';
        $revision->save();
        return redirect()->back();
    }
}
