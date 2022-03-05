<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Controller;
use App\Models\Enrollment;
use Illuminate\Http\Request;
use App\Traits\ScheduleList;
use App\Traits\Sams;

class SamsController extends Controller
{
    
    use ScheduleList, Sams;
    

    public function get(Request $request) {
        $user = new UserController();
        $role = $user->getRoleMeta(auth()->user()->id);
        $roles = array("Teacher", "Manager");
        $data =  $this->scheduleQuery()
            ->where([
                'schedules.location_id' => $request->location_id,
                'schedules.date_range_id' => $request->date_range_id
            ]);
            if(in_array($role, $roles)) {
                $data->where('schedules.user_id', auth()->user()->id);
            }
            

        $datas = $data->get()->transform(function ($data) {
            $data->students = Enrollment::select(
                'students.id AS id',
                'fullName.meta_value AS fullName'
            )
            ->leftJoin('students', 'students.id', '=', 'enrollments.student_id')
            ->leftJoin('student_metas AS fullName', 'fullName.student_id', '=', 'students.id')
            ->where('fullName.meta_key', 'full_name')
            ->where('enrollments.schedule_id', $data->id)
            ->get();
            return $data;
        });

        return $datas;
    }

    public function getStudentSchedule() {
        $students = $this->getStudentIds(auth()->user()->id);
        $data = $this->scheduleQuery()
            ->addSelect('users.email AS teacher_email')
            ->leftJoin('enrollments', 'enrollments.schedule_id', '=', 'schedules.id')
            ->whereIn('enrollments.student_id', $students)
            ->where([
                'enrollments.is_permanent' => 1,
                'enrollments.is_end' => 0
            ])
            ->get();

        $data->transform(function ($data) use ($students) {
            $data->students = Enrollment::select(
                'students.id AS id',
                'fullName.meta_value AS fullName'
            )
            ->leftJoin('students', 'students.id', '=', 'enrollments.student_id')
            ->leftJoin('student_metas AS fullName', 'fullName.student_id', '=', 'students.id')
            ->where([
                'enrollments.is_permanent' => 1,
                'enrollments.is_end' => 0,
                'fullname.meta_key' => 'full_name',
                'enrollments.schedule_id' => $data->id
            ])
            ->whereIn('enrollments.student_id', $students)
            ->get();
            return $data;
        });
        return $data;
    }

    public function users($role, Request $request) {
        return $this->samsViewUser($role, $request->search, $request->filter)
                ->paginate($request->perPage);
    }

    
    public function samsGet(Request $request) {
        return $this->samsViewSudents($request->search, $request->perPage);
    }

    
    public function samsDeleteParent(Request $request) {
        $user = new UserController();
        $user->deleteUser($request->id);
    }

    public function samsGetUser($id) {
        return $this->samsGetStudentById($id);
    }

    public function samsGetStudentByParent($id) {
        $user = new UserController();
        return ['children' => $this->samsGetStudentByParentId($id), 'credits' => $user->findUserMeta($id, 'credits')];
    }

    public function samsStoreUser(Request $request) {
        $student = new StudentController();
        $student->saveStudent($request->form['id'], $request->form);

        return response()->json('Successfully save!', 200);
    }

    public function updateAttendance(Request $request) {
        
        foreach($request->attendance AS $attendance) {
            foreach($attendance['attendance'] AS $att) {
                $this->updateAttendances($att['id'], $att['status']);
            }
        }
        $this->scheduleNoteSave($request->schedule_id, $request->date, $request->notes);
    }

    public function getCredits($id) {
        $user = new UserController();
        return $user->getMeta($id, 'credits', 'credits');
    }

    public function updateCredit(Request $request) {
        $user = new UserController();
        $credits = $user->findUserMeta($request->id, 'credits');
        $credits->meta_value = $request->value;
        $credits->save();
    }
}
