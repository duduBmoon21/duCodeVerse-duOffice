<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('currencies')->insert([
            [
                'code' => 'USD',
                'name' => 'US Dollar',
                'symbol' => '$',
                'decimals' => 2,
            ],
            [
                'code' => 'ETB',
                'name' => 'ET Birr',
                'symbol' => 'birr',
                'decimals' => 2,
            ],
        ]);
    }
}
