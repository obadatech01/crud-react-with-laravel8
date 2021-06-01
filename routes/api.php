<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/contacts', [ContactController::class, 'index'])->name('contact.index');
Route::post('/contact/create', [ContactController::class, 'create'])->name('contact.create');
Route::get('/contact/{id}/edit', [ContactController::class, 'edit'])->name('contact.edit');
Route::put('/contact/{id}/update', [ContactController::class, 'update'])->name('contact.update');
Route::delete('/contact/{id}/delete', [ContactController::class, 'delete'])->name('contact.delete');

