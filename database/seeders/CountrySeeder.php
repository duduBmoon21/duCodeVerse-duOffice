<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $countries = [
            'Ethiopia',
        ];

        DB::table('countries')
            ->insert(
                collect($countries)->map(fn($i) => ['name' => $i])->toArray()
            );
    }
}
