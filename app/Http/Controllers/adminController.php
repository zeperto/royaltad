<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;
use App\Http\Requests\productRequest;
use App\Models\productsModel;
use App\Models\test;
use Illuminate\Database\QueryException;
use Illuminate\Support\Collection;

class adminController extends Controller{

    public function login(Request $request){

        $email = $request->email;
        $password = $request->password;

        $user = User::where('email', $email)->first();

        if($user){

            $dbPassword = $user->password;
            $dbPassword = Crypt::decryptString($dbPassword);

            if($password != $dbPassword){
                return response([
                    'code' => 0,
                    'message' => 'USERNAME OR PASSWORD WRONG'
                ]);
            }

            $token = $user->createToken('admin',['admin'])->plainTextToken;

            return response([
                'code' => '1',
                'token' => $token
            ]);
        }
        else{
            return response([
                'code' => 0,
                'message' => 'USERNAME OR PASSWORD WRONG'
            ]);
        }

    }

    public function addProduct(Request $request){
        // return $request;
        $arr = $request->all();

        $items = collect($arr['product']);

        try{

            $product = new productsModel;

            $product->productNamePersian = $items->get('productNamePersian');
            $product->productNameEnglish = $items->get('productNameEnglish');
            $product->persianDescription = $items->get('descriptionPersian');
            $product->englishDescription = $items->get('descriptionEnglish');
            // $product->amount = $items->get('amount');
            // $product->weight = $items->get('weight');
            // $product->dimension = $items->get('dimension');

            $product->save();

            return response([
                'code' => '13',
                'message' => 'Successful'
            ]);
        }
        catch(QueryException $ex){
            return response([
                'code' => '3',
                'message'=>'Something wrong happened'
            ]);
        }

    }

    public function editProduct(){

    }

}

