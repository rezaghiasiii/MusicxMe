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

        Schema::table('music_singer',function (Blueprint $table){
            $table->dropForeign('musics_singers_music_id_foreign');
            $table->foreign('music_id')
                ->references('id')->on('musics')
                ->cascadeOnUpdate();
            $table->dropForeign('musics_singers_singer_id_foreign');
            $table->foreign('singer_id')
                ->references('id')->on('singers')
                ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
