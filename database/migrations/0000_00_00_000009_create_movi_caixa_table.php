<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateMoviCaixaTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::create('movimentacao_caixa', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('parcela_id')->unsigned()->nullable();
            $table->decimal('valor_total', 10, 2)->default(0.00)->nullable();
            $table->decimal('valor_desconto', 10, 2)->default(0.00)->nullable();
            $table->decimal('valor_pago', 10, 2)->default(0.00)->nullable();
            $table->string('descricao', 255)->nullable();
            $table->char('estornado', 1)->default(0)->nullable();
            
            $table->timestamps();
        });

        Schema::table('movimentacao_caixa', function (Blueprint $table) {
            $table->foreign('parcela_id')->references('id')->on('parcelas_receber_pagar');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('movimentacao_caixa');
    }
}
