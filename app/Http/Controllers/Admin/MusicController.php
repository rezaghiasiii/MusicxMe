<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MusicFormRequest;
use App\Models\Music;
use App\Models\Singer;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class MusicController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $musics = Music::withTrashed()->with('singers')->get();

        return Inertia::render('Admin/Music/Index', compact('musics'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $singers = Singer::select('id', 'first_name', 'last_name')->get();
        return Inertia::render('Admin/Music/Create', compact('singers'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MusicFormRequest $request)
    {
        $music = Music::create([
            'name' => $request->name,
            'image_path' => $this->storeImage($request->file('image')),
            'heading_image' => $this->storeImage($request->file('heading_image')),
            'music_path' => $this->storeMusic($request->file('music')),
        ]);

        $music->singers()->attach($request->singers_id);

        return redirect()->route('admin.musics.index');
    }

    public function storeImage(UploadedFile $image)
    {
        if (!$image) {
            return null;
        }

        $imageName = $image->getClientOriginalName();

        $image_path = $image->storeAs('musicImages', $imageName);

        return $image_path;
    }


    public function storeMusic(UploadedFile $music)
    {
        if (!$music) {
            return null;
        }

        $musicName = $music->getClientOriginalName();

        $music_path = $music->storeAs('musics', $musicName);

        return $music_path;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Music $music)
    {
        $music_singers = $music->singers;

        $singers = Singer::select('id', 'first_name', 'last_name')->get();

        return Inertia::render('Admin/Music/Edit', compact('music', 'singers', 'music_singers'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Music $music)
    {
        $request->validate([
            'name' => 'required|min:2',
            'singers_id' => 'required',
        ]);

        $music->name = $request->name;

        if ($request->file('music') !== null) {
            File::delete(asset('app/musics') . '/' . $music->music_path);
            $music->music_path = $this->storeImage($request->file('music'));
        }
        if ($request->file('image') !== null) {
            File::delete(asset('app/musicImages') . '/' . $music->image_path);
            $music->image_path = $this->storeImage($request->file('image'));
        }
        if ($request->file('heading_image') !== null) {
            File::delete(asset('app/musicImages') . '/' . $music->heading_image);
            $music->heading_image = $this->storeImage($request->file('heading_image'));
        }

        $music->singers()->sync($request->singers_id);

        $music->update();

        return redirect()->route('admin.musics.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $music = Music::FindOrFail($id);
        $music->delete();
    }

    public function restore(string $id)
    {
        $music = Music::withTrashed()->FindOrFail($id);
        $music->restore();
    }
}
