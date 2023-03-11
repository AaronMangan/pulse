<?php

namespace App\Http\Requests\Documents;

use Illuminate\Foundation\Http\FormRequest;

class CreateNewDocumentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'project_id' => 'numeric|required|exists:projects,id',
            'title' => 'string|max:255|required',
            'type_id' => 'numeric|required|exists:types,id',
            'discipline_id' => 'numeric|required|exists:disciplines,id',
            'revision_id' => 'numeric|required|exists:revisions,id',
            'status_id' => 'numeric|required|exists:statuses,id',
            'description' => 'string|max:50000|nullable',
        ];
    }
}
