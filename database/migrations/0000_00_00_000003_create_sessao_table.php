<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateSessaoTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::create('sessao', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('filme_uid')->index()->nullable();
            $table->integer('sala_id')->unsigned()->nullable();
            $table->string('nome');
            $table->string('descricao');
            $table->date('inicio');
            $table->date('fim');
            
            $table->timestamps();
           
            $table->foreign('sala_id')->references('id')->on('sala');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('sessao');
    }
}
