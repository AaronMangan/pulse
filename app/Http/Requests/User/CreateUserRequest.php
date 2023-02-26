<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;
use App\Models\User;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return \Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'string|max:255|required|unique:users,name',
            'email' => 'email|required|unique:users,email',
            'isAdmin' => 'boolean|nullable',
            'password' => 'confirmed|min:8,',
            'password_confirmation' => 'string|min:8'
        ];
    }
}
