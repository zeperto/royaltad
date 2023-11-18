<?php

namespace App\Http\Controllers;

use App\Models\test;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\productsModel;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\productRequest;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\QueryException;

class adminController extends Controller{

    public function addUser(Request $request){
      $user = new User();
      $user->password = Hash::make('22102212');
      $user->email = 'ali.zi.zeperto@gmail.com';
      $user->name = 'appacki';
      $user->save();
    }

    public function login(Request $request){

        $name = $request->username;
        $password = $request->password;

        $user = User::where('name', $name)->first();

        if($user){
            if(!Hash::check($password, $user->password)){
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

