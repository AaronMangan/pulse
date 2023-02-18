<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreStatusRequest;
use App\Http\Requests\UpdateStatusRequest;
use App\Models\Status;

class StatusController extends Controller
{
    const ERRORMSG = 'An error occurred, please contact your administrator for assistance';

    /**
     * Store the new status
     *
     * @param Request $request
     * @return void
     */
    public function store(StoreStatusRequest $request)
    {
        // Create the validator.
        $validated = $request->safe()->only(['name', 'code']);
 
        // Create the revision.
        $created = Status::create([
            'name' => ucwords($validated['name']),
            'code' => strtoupper($validated['code']),
        ]);

        // Return the appropriate response.
        $request->session()->flash(
            ($created) ? 'success' : 'error',
            ($created) ? "Status {$created->name} was created successfully!" : ''
        );

        // Return the user to the settings index.
        return redirect()->route('settings.index');
    }

    public function update(UpdateStatusRequest $request, Status $status)
    {
        // Get the validated data.
        $valid = $request->safe()->only(['name', 'code']);

        // Update the model.
        $updated = $status->update($valid);
        
        return response()->json([
            'status' => ($updated) ? 'success' : 'error',
            'message' => ($updated)
                ? 'Status was updated successfully!'
                : self::ERRORMSG
        ]);
    }

    public function destroy(Request $request, Status $status)
    {
        // Delete the model from the database. In future this is something
        // that only users with double elevated permissions can do.
        $deleted = (isset($status->id) && !is_null($status->id)) ? $status->deleteOrFail() : false;

        $request->session()->flash(
            ($deleted) ? 'success' : 'error',
            ($deleted) ? "Status {$status->name} was deleted successfully" : self::ERRORMSG
        );
    }

    /**
     * Archive the status.
     *
     * @param Request $request
     * @param Revision $revision
     * @return void
     */
    public function archive(Request $request, Status $status)
    {
        // Change the status to 'inactive'
        $status->status = ($status->status == 'active') ? 'inactive' : 'active';
        $status->save();

        $request->session()->flash('success', 'Status was updated');
        return redirect()->route('settings.index');
    }
}
