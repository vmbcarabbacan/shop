<?php

namespace App\Imports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class ProductImport implements ToModel, WithStartRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Product([
            'id' => $row[0],
            'product' => $row[1],
            'option' => $row[2],
            'price' => $row[3],
            'availableStocksInPOS' => $row[4],
            'availableStocksInActual' => $row[5],
            'newStocks' => $row[6],
        ]);
    }

    public function startRow(): int
    {
        return 2;
    }
}
