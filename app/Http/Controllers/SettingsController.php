<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Revision;
use App\Models\Status;
use App\Models\History;
use App\Models\Discipline;
use App\Models\Type;
use Illuminate\Support\Facades\Validator;

class SettingsController extends Controller
{
    /**
     * Return the index.
     *
     * @param Request $request
     * @return void
     */
    public function index(Request $request)
    {
        $revisions = Revision::all();
        $statuses = Status::all();
        $history = History::with('user')->get();
        $disciplines = Discipline::all();
        $types = Type::all();

        return Inertia::render('Settings/Settings', [
            'revisions' => $revisions ?? [],
            'statuses' => $statuses ?? [],
            'history' => $history ?? [],
            'disciplines' => $disciplines ?? [],
            'types' => $types ?? [],
        ]);
    }

    /**
     * Store the new revision.
     *
     * @param Request $request
     * @return void
     */
    public function storeRevision(Request $request)
    {
        // Create the validator.
        $validator = Validator::make($request->all(), [
            'revision' => 'required|unique:revisions,name|max:10',
        ]);
 
        // If validation fails.
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }
 
        // Retrieve the validated input...
        $validated = $validator->validated();
 
        // Create the revision.
        $created = Revision::create([
            'name' => $validated['revision'],
        ]);

        // Return the appropriate response.
        if($created) {
            return redirect()->back()->with('flash.success', 'Revision created successfully');
        } else {
            return redirect()->back()->with('flash.error', 'Unable to create new revision');
        }
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function storeDiscipline(Request $request)
    {
        // Create the validator.
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:disciplines,name|max:255',
            'code' => 'required|unique:disciplines,code|max:10',
        ]);
 
        // If validation fails.
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }
 
        // Retrieve the validated input...
        $validated = $validator->validated();
 
        // Create the revision.
        $created = Discipline::create([
            'name' => $validated['name'],
            'code' => $validated['code'],
        ]);

        // Return the appropriate response.
        if($created) {
            return redirect()->back()->with('flash.success', 'Discipline created successfully');
        } else {
            return redirect()->back()->with('flash.error', 'Unable to create new Discipline');
        }
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function storeType(Request $request)
    {
        // Create the validator.
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:types,name|max:255',
            'code' => 'required|unique:types,code|max:10',
        ]);
 
        // If validation fails.
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }
 
        // Retrieve the validated input...
        $validated = $validator->validated();
 
        // Create the revision.
        $created = Type::create([
            'name' => $validated['name'],
            'code' => $validated['code'],
        ]);

        // Return the appropriate response.
        if($created) {
            return redirect()->back()->with('flash.success', 'Type created successfully');
        } else {
            return redirect()->back()->with('flash.error', 'Unable to create new Type');
        }
    }


    public function storeStatus(Request $request)
    {
        // Create the validator.
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:statuses,name|max:100',
            'code' => 'required|unique:statuses,code|max:25'
        ]);
 
        // If validation fails.
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }
 
        // Retrieve the validated input...
        $validated = $validator->validated();
 
        // Create the revision.
        $created = Status::create([
            'name' => $validated['name'],
            'code' => $validated['code'],
        ]);

        // Return the appropriate response.
        if($created) {
            return redirect()->back()->with('flash.success', 'Revision created successfully');
        } else {
            return redirect()->back()->with('flash.error', 'Unable to create new revision');
        }
    }

    /**
     * Archive the provided revision.
     *
     * @param Request $request
     * @param Revision $revision
     * @return void
     */
    public function archiveRevision(Request $request, Revision $revision)
    {
        // Change the status to 'inactive'
        $revision->status = ($revision->status == 'active') ? 'inactive' : 'active';
        $revision->save();
        return redirect()->back();
    }

    /**
     * Archive the status.
     *
     * @param Request $request
     * @param Revision $revision
     * @return void
     */
    public function archiveStatus(Request $request, Status $status)
    {
        // Change the status to 'inactive'
        $status->status = ($status->status == 'active') ? 'inactive' : 'active';
        $status->save();
        return redirect()->back()->with('flash_success', 'Status updated successfully');
    }
}
