<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('musics_singers', function (Blueprint $table) {
            $table->foreignId('music_id')->references('id')->on('musics')->cascadeOnDelete();
            $table->foreignId('singer_id')->references('id')->on('singers')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('musics_singers');
    }
};
