<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Revision;

class SettingsController extends Controller
{
    //
    public function index(Request $request)
    {
        $revisions = Revision::all();
        return Inertia::render('Settings/Settings', ['revisions' => $revisions]);
    }
}
