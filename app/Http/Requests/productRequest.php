<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class productRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(){
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules() {
        return [
            'productID' => 'required|string',
            'namePersian' => 'required|string',
            'nameEnglish' => 'required|string',
            'amount' => 'required',
            'descriptionPersian' => 'required|string',
            'descriptionEnglish' => 'required|string',
            'discount' => 'required',
            'weight' => 'required',
            'volume' => 'required',
            'dimension' => 'required'
        ];
    }
}
