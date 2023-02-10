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
use Session;

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
 
        
    }
}
