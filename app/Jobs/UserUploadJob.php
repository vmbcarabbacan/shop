<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use App\Http\Controllers\Api\SanitizeController;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use App\Http\Controllers\Api\AddressController;
use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\Student;
use App\Models\User;

class UserUploadJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $form;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($form)
    {
        $this->form = $form;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $sanitizer = new SanitizeController();
        $stud = new StudentController();
        $user = new UserController();
        $address = new AddressController();

        $items = array(
                    "momFirstName" => $sanitizer->string($this->form[0]),
                    "momFamilyName" => $sanitizer->string($this->form[1]),
                    "momFullName" => $sanitizer->string($this->form[0]). " ". $sanitizer->string($this->form[1]),
                    "momNationality" => $sanitizer->string($this->form[2]),
                    "momMobileNumber" => $this->form[4],
                    "momHomeNumber" => null,
                    "momWorkNumber" => null,
                    "momCompany" => null,
                    "momEmailAddress" => $sanitizer->string($this->form[3]),
                    "dadFirstName" => $sanitizer->string($this->form[5]),
                    "dadFamilyName" => $sanitizer->string($this->form[6]),
                    "dadFullName" => $sanitizer->string($this->form[5]). " ". $sanitizer->string($this->form[6]),
                    "dadNationality" => $sanitizer->string($this->form[7]),
                    "dadMobileNumber" => $this->form[9],
                    "dadHomeNumber" => null,
                    "dadWorkNumber" => null,
                    "dadCompany" => null,
                    "dadEmailAddress" => $sanitizer->string($this->form[8]),
                    "location" => $sanitizer->string('motor city'),
                    "role" => 'User',
                    "credits" => "0"
                );

        $exist = User::where('email', $this->form[3])->first();
        if(!$exist) {
            $newUser = $user->saveUser($this->form[3], $this->form[15]);
            $user->saveUserMeta($newUser->id, $items);
            $address->store(0, $newUser->id, null, null, 'Dubai', null, 'AE', '00000');

            $data = new Student();
            $data->user_id = $newUser->id;
            $data->first_name = $sanitizer->string($this->form[10]);
            $data->family_name = $sanitizer->string($this->form[11]);
            $data->gender = $this->form[12];
            $data->date_of_birth = date('Y-m-d', strtotime($this->form[14]));
            $data->save();

            $stud->saveStudentMeta($data->id, $sanitizer->string($this->form[10]) . ' '. $sanitizer->string($this->form[11]), $this->form[13]);
            
            return ;
        }

        $address->store(0, $exist->id, null, null, 'Dubai', null, 'AE', '00000');
       
        $studentExist = Student::where([
                'user_id' => $exist->id,
                'first_name' => $this->form[10]
            ])->first();

        if(!$studentExist) {
            $data = new Student();
            $data->user_id = $exist->id;
            $data->first_name = $sanitizer->string($this->form[10]);
            $data->family_name = $sanitizer->string($this->form[11]);
            $data->gender = $this->form[12];
            $data->date_of_birth = date('Y-m-d', strtotime($this->form[14]));
            $data->deleted_at = null;
            $data->save();

            $stud->saveStudentMeta($data->id, $sanitizer->string($this->form[10]) . ' '. $sanitizer->string($this->form[11]), $this->form[13]);
        }
        
    }
}
