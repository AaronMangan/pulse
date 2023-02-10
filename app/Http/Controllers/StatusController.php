<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreStatusRequest;
use App\Models\Status;
class StatusController extends Controller
{
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
        if($created) {
            return redirect()->back()->with('flash.success', 'Revision created successfully');
        } else {
            return redirect()->back()->with('flash.error', 'Unable to create new revision');
        }
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
        return redirect()->back()->with('flash_success', 'Status updated successfully');
    }
}
