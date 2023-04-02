<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SingerFormRequest;
use App\Models\Singer;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class SingerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $singers = Singer::withTrashed()->get();
        return Inertia::render('Admin/Singer/Index',compact('singers'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Singer/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SingerFormRequest $request)
    {
        Singer::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'image_path' => $this->storeImage($request->file('image'), $request->first_name . ' ' . $request->last_name)
        ]);

        return redirect()->route('admin.singers.index');
    }

    public static function storeImage(UploadedFile $image, $fileName): string
    {
        $image_path = $image->storeAs('singers', $fileName . '.jpg');

        return $image_path;
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
    public function edit(Singer $singer)
    {
        return Inertia::render('Admin/Singer/Edit', compact('singer'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,Singer $singer)
    {
        $request->validate([
            'first_name' => 'required|min:3',
        ]);

        $singer->first_name = $request->first_name;
        $singer->last_name = $request->last_name;

        if ($request->file('image') !== null) {
            File::delete(asset('app/singers') . '/' . $singer->image_path);
            $singer->image_path = $this->storeImage($request->file('image'), $request->first_name . ' ' . $request->last_name);
        }

        $singer->update();

        return redirect()->route('admin.singers.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $singer = Singer::FindOrFail($id);
        $singer->delete();
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(string $id)
    {
        $singer = Singer::withTrashed()->FindOrFail($id);

        $singer->restore();
    }
}
