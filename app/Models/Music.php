<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Music extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['name','music_path','image_path','heading_image'];

    protected $table = 'musics';

    public function singers()
    {
        return $this->belongsToMany(Singer::class);
    }
}
