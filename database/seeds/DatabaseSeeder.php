<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
           'name' => 'Vinicius Spanholo',
           'email' => 'devspanholo4@gmail.com',
           'password' => Hash::make('123456'),
       ]);
        
       DB::table('users')->insert([
        'name' => 'Vinicius ',
        'email' => 'vini4@gmail.com',
        'password' => Hash::make('123456'),
        ]);

        DB::table('fornecedor')->insert([
            'razao_social' => 'Fornecedor 1',
		'fantasia' => 'Fornecedor 1',
		'cnpj' => '123456789',
		'ie' => '123456789',
		'ativo' => 1,
		'fone' => '123456789',
		'email' => 'teste@gmail.com',
		'endereco' => 'Rua teste',
		'cep' => '123456789',
		'endereco_nro' => '123456789',
		'bairro' => 'Bairro teste',
		'complemento' => 'Complemento teste',
		'cidade' => 'Cidade teste'
        ]);


        DB::table('sala')->insert([
		'nome' => 'Sala 1',
		'capacidade' => 32,
        ]);
    }
}
