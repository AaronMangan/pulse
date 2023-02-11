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
}
