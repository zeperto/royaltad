<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\authController;
use App\Http\Controllers\locationController;
use App\Http\Controllers\adminController;
use App\Models\test;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/addUser', [adminController::class, 'addUser']);

Route::post('/login', [authController::class, 'login']);
Route::post('/register', [authController::class, 'register']);
Route::get('/location', [locationController::class, 'index']);
Route::post('/products', [productController::class, 'store']);
Route::put('/products/{id}', [productController::class, 'update']);
// Route::delete('/products/{id}', [productController::class, 'destroy']);

// Protected Routes
Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::post('/logout', [authController::class, 'logout']);
});

////////////////
//Admin Routes//
////////////////

//Public Admin Routes
Route::post('/adminLogin', [adminController::class, 'login']);
Route::post('/admin/addProduct', [adminController::class, 'addProduct']);

Route::get('/admin/getProduct', function(){
	return test::create([
		'name' => 'ALI AKBAR'
	]);
});



//Private Admin Routes
// Route::group(['middleware'=>['auth:sanctum']], function(){
//     Route::post('/admin/Logout', [adminController::class, 'logout']);
//     Route::post('/admin/addProduct', [adminController::class, 'addProduct']);
//     Route::put('/admin/updateProduct', [adminController::class, 'updateProduct']);
//     Route::delete('/admin/deleteProduct', [admninController::class, 'deleteProduct']);
// });
