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
           'id' => 1,  
           'name' => 'Vinicius Spanholo',
           'email' => 'devspanholo@gmail.com',
           'password' => Hash::make('123456'),
       ]);
       DB::table('users')->insert([
        'id' => 2,  
        'name' => 'Vinicius ',
        'email' => 'vini@gmail.com',
        'password' => Hash::make('123456'),
    ]);
    }
}
