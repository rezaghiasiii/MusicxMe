<?php

namespace App\Http\Controllers;

use App\Models\Music;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $heading = Music::with('singers')->latest()->take(4)->get();
        $featured = Music::with('singers')->take(4)->get();
        $newTracks = Music::with('singers')->latest()->take(4)->get();
        $bestOfMonth = Music::with('singers')->latest()->take(4)->get();

        return Inertia::render('Welcome',
            [
                'heading' => $heading,
                'featured' => $featured,
                'newTracks' => $newTracks,
                'bestOfMonth' => $bestOfMonth,
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ]);
    }
}
