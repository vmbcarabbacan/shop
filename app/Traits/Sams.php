<?php
    namespace App\Traits;

    use App\Http\Controllers\Api\ImageController;
    use App\Models\Student;
    use App\Models\User;
 
    trait Sams {
        
        public function samsViewUser($myRole, $search, $filter) {
            $role = $myRole == 'User' ? ['User'] : ($myRole == 'Teacher' ? ['Teacher', 'Manager'] : ['Admin' ,'Reception', 'Manager', 'Teacher', 'Accounts', 'Others']);
            return User::select(
                    'users.id AS id',
                    'users.email AS email',
                    'fullname.meta_value AS fullName',
                    'contact.meta_value AS contact',
                    'role.meta_value AS role'
                )
                ->leftJoin('user_metas AS fullname', 'fullname.user_id', '=', 'users.id')
                ->leftJoin('user_metas AS contact', 'contact.user_id', '=', 'users.id')
                ->leftJoin('user_metas AS role', 'role.user_id', '=', 'users.id')
                ->where([
                    "role.meta_key" => "role",
                    "fullname.meta_key" => "momFullName",
                    "contact.meta_key" => "momMobileNumber"
                ])
                ->whereIn("role.meta_value", $role)
                ->where($this->userKey($filter), 'LIKE', '%'.$search.'%')
                ->orderBy("role.meta_value", "ASC")
                ->orderBy("fullname.meta_value", "ASC");
        }

        private function userKey($type) {
            switch ($type) {
                case 'Name':
                    return "fullname.meta_value";
                    break;

                case 'Email':
                    return "users.email";
                    break;

                case 'Role':
                    return "role.meta_value";
                    break;

                case 'Number':
                    return "contact.meta_value";
                    break;
                default: return "fullname.meta_value"; break;
            }
        }

        public function getStudentIds($id) {
            return Student::where('user_id', $id)->pluck('id');
        }

        public function samsViewSudents($search, $perPage) {
            $image = new ImageController();
            $data = $this->studentDetails()
                ->where('fullName.meta_value', 'LIKE', '%'.$search.'%')
                ->paginate($perPage);

            $data->getCollection()->transform(function ($data) use ($image){
                $ids = array();
                array_push($ids, $data->photo);
                $data->image = $image->imageFilterByIdsGetFirstElemet($ids);
                return $data;
            });

            return $data;
        }

        public function studentDetails() {
            return Student::select(
                'students.id AS id',
                'fullName.meta_value AS fullName',
                'students.gender AS gender',
                'students.date_of_birth AS date_of_birth',
                'photo.meta_value AS photo'
            )
            ->leftJoin('student_metas AS fullName', 'fullName.student_id', '=', 'students.id')
            ->leftJoin('student_metas AS photo', 'photo.student_id', '=', 'students.id')
            ->leftJoin('users', 'users.id', '=', 'students.user_id')
            ->where("fullName.meta_key", "full_name")
            ->where("photo.meta_key", "photo")
            ->where("users.deleted_at", null)
            ->orderBy("fullName.meta_value", "ASC");
        }

        public function samsGetStudentById($id) {
            $image = new ImageController();
            $data = $this->samsGetStudent()
                ->where("students.id", $id)
                ->first();
                $ids = array();
                array_push($ids, $data['photo']);
            $data['image'] = $image->imageFilterByIdsGetFirstElemet($ids);

            return $data;
        }

        public function samsGetStudentByParentId($id) {
            return $this->samsGetStudent()  
                ->where("students.user_id", $id)
                ->get();
        }

         public static function samsGetStudent() {
                return Student::select(
                    "students.id",
                    "students.user_id AS user_id",
                    "students.first_name AS firstName",
                    "students.family_name AS familyName",
                    "students.gender AS gender",
                    "students.date_of_birth AS dateOfBirth",
                    "fullName.meta_value AS name",
                    "photo.meta_value AS photo",
                    "nationality.meta_value AS nationality"
                )
                ->leftJoin('student_metas AS fullName', 'fullName.student_id', '=', 'students.id')
                ->leftJoin('student_metas AS photo', 'photo.student_id', '=', 'students.id')
                ->leftJoin('student_metas AS nationality', 'nationality.student_id', '=', 'students.id')
                ->where('fullName.meta_key', 'full_name')
                ->where('photo.meta_key', 'photo')
                ->where('nationality.meta_key', 'nationality');
        }
        
    }

?>