<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->as('auth.')->middleware('guest')->group(function() {
    Route::prefix('login')->as('login.')->group(function() {
        Route::get('', [LoginController::class, 'create'])->name('index');
        Route::post('', [LoginController::class, 'store'])->name('store');
    });
});
