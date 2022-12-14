<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateParcelaReceberPagarTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::create('parcelas_receber_pagar', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('conta_id')->unsigned()->nullable();
            $table->integer('nro_parcela')->unsigned()->nullable();
            $table->char('baixada', 1)->default(0)->nullable();
            $table->decimal('valor', 10, 2)->default(0.00)->nullable();
            $table->decimal('valor_original', 10, 2)->default(0.00)->nullable();
            $table->date('data_vencimento')->nullable();
            $table->date('data_recebimento')->nullable();
            $table->timestamps();
        });

        Schema::table('parcelas_receber_pagar', function (Blueprint $table) {
            $table->foreign('conta_id')->references('id')->on('contas_receber_pagar')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('parcelas_receber_pagar');
    }
}
