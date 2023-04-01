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
            'description',
            'project_id',
            'type_id',
            'discipline_id',
            'status_id',
            'revision_id',
            'created_by',
            'last_updated_by',
            'state',
            'latest',
            'metadata',
            'created_at',
            'updated_at',
        ]);

        $auditor = new \App\Classes\Auditor($valid['project_id'], true);
        $data = $auditor->assign($valid);
        if ($data['status']) {
            $valid['number'] = $data['number'] ?? '';
            $new = new Document([
                'number' => $valid['number'] ?? null,
                'title' => $valid['title'] ?? '',
                'project_id' => $valid['project_id'] ?? '',
                'type_id' => $valid['type_id'] ?? null,
                'discipline_id' => $valid['discipline_id'] ?? null,
                'revision_id' => $valid['revision_id'] ?? null,
                'status_id' => $valid['status_id'] ?? null,
                'description' => $valid['description'] ?? null,
                'created_at' => $valid['created_at'] ?? null,
                'updated_at' => $valid['updated_at'] ?? null,
                'created_by' => $request->user()->id,
                'last_updated_by' => $request->user()->id,
                'state' => 'active',
                'latest' => true,
                'metadata' => json_encode([]) ?? null,
            ]);
            $new->save();
        }

        // QBR1-MEC-REP-001
        // Qld BR-1 Maintenance Report 2022 Summary - All Zones
        // $request->session()->flash(($data['status']) ? 'success' : 'error', ($data['success']) ? 'Document created successfully' : 'An error occurred');
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

/*

number,
title,
description,
project_id,
type_id,
discipline_id,
status_id,
revision_id,
created_by,
last_updated_by,
state,
latest,
metadata,
created_at,
updated_at,
*/
