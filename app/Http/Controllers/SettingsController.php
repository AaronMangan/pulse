<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Revision;
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
        return Inertia::render('Settings/Settings', ['revisions' => $revisions]);
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
}
