<?php

use App\Http\Controllers\Admin\MusicController;
use App\Http\Controllers\Admin\SingerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/',[HomeController::class,'index'])->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::prefix('/admin')->name('admin.')->group(function (){
        Route::get('musics/restore/{music}',[MusicController::class,'restore'])->name('musics.restore');
        Route::resource('musics', MusicController::class);
        Route::get('singers/restore/{singer}', [SingerController::class,'restore'])->name('singers.restore');
        Route::resource('singers', SingerController::class);
    });
});

require __DIR__.'/auth.php';
