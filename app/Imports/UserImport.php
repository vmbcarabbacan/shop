<?php

namespace App\Imports;

use App\Models\User_import;
use Maatwebsite\Excel\Concerns\ToModel;

class UserImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new User_import([
            'mFirstName' => $row[0],
            'mFamilyName' => $row[1],
            'mNationality' => $row[2],
            'mEmail' => $row[3],
            'mMobileNumber' => $row[4],
            'fFirstName' => $row[5],
            'fFamilyName' => $row[6],
            'fNationality' => $row[7],
            'fEmail' => $row[8],
            'fMobileNumber' => $row[9],
            'childFirstName' => $row[10],
            'childFamilyName' => $row[11],
            'childGender' => $row[12],
            'childNationality' => $row[13],
            'childDateOfBirth' => \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row[14]),
            'password' => $row[15]
        ]);
    }
}
