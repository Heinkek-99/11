<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Route::group(['middleware' => 'auth'], function(){
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});


Route::get('profile','HomeController@profile' )->name('profile');
Route::get('markers','HomeController@markers' )->name('markers');
Route::get('vehicle','HomeController@vehicle' )->name('vehicle');
// Route::post('/dashboard', 'AjaxController@ajax_call');
require __DIR__.'/auth.php';
