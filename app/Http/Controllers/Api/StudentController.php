<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\SanitizeController;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Student_meta;
use App\Models\Student;

class StudentController extends Controller
{

    public function getStudents($id) {
        return Student::select(
                    "students.id AS id",
                    "students.first_name AS firstName",
                    "students.family_name AS familyName",
                    "students.gender AS gender",
                    "students.date_of_birth AS dateOfBirth",
                    "photo.meta_value AS photo",
                    "nationality.meta_value AS nationality",
                    DB::raw("false AS dob_open"),
                    DB::raw("false AS isSelected")
                )
                ->leftJoin("student_metas AS photo", "photo.student_id", "=", "students.id")
                ->leftJoin("student_metas AS nationality", "nationality.student_id", "=", "students.id")
                ->where([
                    "user_id" => $id,
                    "photo.meta_key" => "photo",
                    "nationality.meta_key" => "nationality"
                ])
                ->get();
    }

    public function getStudentByParentIdAndChildrenName($id) {
        return Student::find($id);
    }

    public function saveStudent($id, $student) {

        if(!empty($student["firstName"])  && !empty($student["familyName"])) {
            $sanitizer = new SanitizeController();

            $data = $student["id"] > 0 
                    ? Student::find($student["id"])
                    : new Student();
            $data->user_id = $id;
            $data->first_name =  $sanitizer->string($student["firstName"]);
            $data->family_name = $sanitizer->string($student["familyName"]);
            $data->gender = $student["gender"];
            $data->date_of_birth = $student["dateOfBirth"];
            $data->save();

            if($student["id"] === 0)
            {
                $this->saveStudentMeta($data->id, $sanitizer->string($student["firstName"]) . ' '. $sanitizer->string($student["familyName"]), $student["nationality"]);
            } else {
                $arr = array(
                    'full_name' => $sanitizer->string($student["firstName"]) . ' '. $sanitizer->string($student["familyName"]),
                    'photo' => $student["photo"],
                    'nationality' => $student["nationality"]
                );
                foreach($arr AS $key => $value) {
                    $this->updateFullName($student['id'], $value, $key);
                }
            }
        }
        
    }

    public function updateFullName($id, $name, $key) {
        $data = Student_meta::where(['student_id' => $id, 'meta_key' => $key])->first();
        $data->meta_value = $name;
        $data->save();
    }

    public function saveStudentMeta($id, $fullName, $nationality) {
        $arr = [
            "full_name" => $fullName,
            "photo" => null,
            "nationality" => $nationality,
            "medical_is_allergies" => false,
            "medical_is_respiratory_of_difficulties" => false,
            "medical_is_physical_disability" => false,
            "medical_is_vision_impairment" => false,
            "medical_is_hearing_impairment" => false,
            "medical_is_other_health_concern" => false,
            "medical_allergies" => null,
            "medical_respiratory_of_difficulties" => null,
            "medical_physical_disability" => null,
            "medical_vision_impairment" => null,
            "medical_hearing_impairment" => null,
            "medical_other_health_concern" => null,
            "non_prescription_is_antiseptic_lotion_liquid_wipe" => false,
            "non_prescription_is_plasters" => false,
            "non_prescription_is_insect_bite_cream_lotion" => false,
            "non_prescription_is_first_aid_ointment" => false,
            "non_prescription_is_calpol_nuerofen_panadol" => false,
            "non_prescription_is_ice" => false,
            "non_prescription_antiseptic_lotion_liquid_wipe" => null,
            "non_prescription_plasters" => null,
            "non_prescription_insect_bite_cream_lotion" => null,
            "non_prescription_first_aid_ointment" => null,
            "non_prescription_calpol_nuerofen_panadol" => null,
            "non_prescription_ice" => null
        ];

        foreach($arr AS $key => $value) {
            $data = new Student_meta();
            $data->student_id = $id;
            $data->meta_key = $key;
            $data->meta_value = $value;
            $data->save();
        }
    }

    public function deleteStudent($id) {
        Student::where('user_id', $id)->delete();
    }

    public function restoreStudent($id) {
        Student::withTrashed()->where('user_id', $id)->restore();
    }
}
