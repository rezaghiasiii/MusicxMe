<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MusicFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|min:2',
            'singers_id' => 'required|array',
            'image' => 'required|image|mimes:jpeg,png,gif,jpg|max:2048',
            'music' => 'required|mimes:application/octet-stream,audio/mpeg,mpga,mp3,wav',
        ];
    }
}
