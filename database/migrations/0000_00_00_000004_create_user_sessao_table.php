<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateUserSessaoTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::create('user_sessao', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->nullable();
            $table->integer('sessao_id')->unsigned()->nullable();
            $table->string('cadeira');

            $table->timestamps();
        });

        
        Schema::table('user_sessao', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('sessao_id')->references('id')->on('sessao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('user_sessao');
    }
}
