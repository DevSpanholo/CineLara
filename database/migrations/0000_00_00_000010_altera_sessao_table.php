<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class AlteraSessaoTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::table('sessao', function (Blueprint $table) {
            $table->decimal('valor', 10, 2)->default(0.00)->nullable();
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
