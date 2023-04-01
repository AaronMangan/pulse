<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Document;
use Illuminate\Http\Request;
use App\Http\Requests\Documents\CreateNewDocumentRequest;
use App\Classes\Auditor;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        //
        return Inertia::render('Documents/Documents', [
            'documents' => \App\Models\Document::with(['type', 'discipline', 'revision', 'status'])->get(),
            'types' => \App\Models\Type::where('status', 'active')->get(),
            'disciplines' => \App\Models\Discipline::where('status', 'active')->get(['id', 'code', 'name']),
            'revisions' => \App\Models\Revision::where('status', 'active')->get(['id', 'name']),
            'statuses' => \App\Models\Status::where('status', 'active')->get(['id', 'code', 'name']),
            'projects' => \App\Models\Project::where('status', 'active')->with('settings')->get(['id', 'code', 'name']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(CreateNewDocumentRequest $request)
    {
        //
        $valid = $request->safe()->only([
            'number',
            'title',
            'type_id',
            'discipline_id',
            'revision_id',
            'status_id',
            'project_id',
            'description',
        ]);

        $auditor = new \App\Classes\Auditor($valid['project_id'], true);
        $data = $auditor->assign($valid);
        if ($data['status']) {
            $valid['number'] = $data['number'] ?? '';
            $new = new Document([
                // 'title' => $valid['title'] ?? '',
                'number' => $valid['number'] ?? null,
                'type_id' => $valid[''] ?? null,
                'discipline_id' => $valid[''] ?? null,
                'revision_id' => $valid[''] ?? null,
                'status_id' => $valid[''] ?? null,
                'description' => $valid[''] ?? null,
                'created_at' => $valid[''] ?? null,
                'updated_at' => $valid[''] ?? null,
                'state' => 'active',
                'latest' => true,
                'metadata' => json_encode([]) ?? null,
            ]);
            $new->save();
        }

        $request->session()->flash(($data['status']) ? 'success' : 'error', ($data['success']) ? 'Document created successfully' : 'An error occurred');
        return redirect()->route('documents.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Document $document)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        //
    }
}
