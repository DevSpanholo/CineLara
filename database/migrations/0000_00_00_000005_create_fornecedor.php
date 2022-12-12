<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFornecedor extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

		Schema::create('fornecedor', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cidade')->nullable();
            $table->string('razao_social')->nullable();
            $table->string('fantasia')->nullable();
            $table->string('cnpj')->nullable();
            $table->string('ie')->nullable();
            $table->string('email')->nullable();
            $table->string('endereco')->nullable();
            $table->string('cep')->nullable();
            $table->integer('endereco_nro')->nullable();
            $table->string('bairro')->nullable();
            $table->string('complemento')->nullable();
            $table->string('fone')->nullable();
            $table->enum('ativo', array('1', '0'))->defalt('1')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fornecedor');
    }
}
