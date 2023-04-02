<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Singer extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['first_name','last_name','image_path'];

    public function musics()
    {
        return $this->belongsToMany(Music::class);
    }
}
