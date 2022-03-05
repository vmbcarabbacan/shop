<?php

namespace App\Imports;

use App\Models\Chart_of_account;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class ChartOfAccountsImport implements ToModel, WithStartRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Chart_of_account([
            'code' => $row[0],
            'name' => $row[1],
            'type' => $row[2],
            'description' => $row[4],
        ]);
    }

    
    public function startRow(): int
    {
        return 2;
    }
}
