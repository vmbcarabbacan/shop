<?php

namespace App\Imports;

use App\Models\Schedule_import;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class ScheduleImport implements ToModel, WithStartRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Schedule_import([
            'term' => $row[0],
            'location' => $row[1],
            'lesson' => $row[2],
            'teacher' => $row[3],
            'day' => $row[4],
            'studio' => $row[5],
            'time_start' => $row[6],
            'time_end' => $row[7],
            'limit' => $row[8],
            'price' => $row[9]
        ]);
    }

    public function startRow(): int
    {
        return 2;
    }
}
