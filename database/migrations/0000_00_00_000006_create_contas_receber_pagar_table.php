<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContasReceberPagarTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('contas_receber_pagar', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fornecedor_id')->nullable()->unsigned();
            $table->integer('user_sessao_id')->nullable()->unsigned();
            $table->integer('user_id')->nullable()->unsigned();
            $table->string('titulo')->index()->nullable();
            $table->decimal('vlr_total', 10, 2)->default(0.00)->nullable();
            $table->decimal('vlr_restante', 10, 2)->default(0.00)->nullable();
            $table->integer('qtd_parcelas')->nullable();
            $table->integer('qtd_dias')->nullable();
            $table->string('observacao')->nullable();
            $table->enum('tipo_operacao', ['R', 'P'])->nullable();
            $table->timestamps();
        });

        Schema::table('contas_receber_pagar', function ($table) {
            $table->foreign('fornecedor_id')->references('id')->on('fornecedor');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('user_sessao_id')->references('id')->on('user_sessao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('contas_receber_pagar');
    }
}
