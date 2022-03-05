<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\SanitizeController;
use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User_meta;
use App\Models\User_log;
use App\Models\User;
use App\Traits\Pos;

class UserController extends Controller
{

    use Pos;

    public function getEmail($email) {
        return User::where("email", $email)->first();
    }

    public function getUserById($id) {
        return User::find($id);
    }

    public function getMomMeta($id){
        $data['id'] = $id;
        $data["firstName"] = $this->getMeta($id, "momFirstName", "firstName");
        $data["familyName"] = $this->getMeta($id, "momFamilyName", "familyName");
        $data["fullName"] = $this->getMeta($id, "momFullName", "fullName");
        $data["nationality"] = $this->getMeta($id, "momNationality", "nationality");
        $data["mobileNumber"] = $this->getMeta($id, "momMobileNumber", "mobileNumber");
        $data["homeNumber"] = $this->getMeta($id, "momHomeNumber", "homeNumber");
        $data["workNumber"] = $this->getMeta($id, "momWorkNumber", "workNumber");
        $data["company"] = $this->getMeta($id, "momCompany", "company");
        $data["emailAddress"] = $this->getMeta($id, "momEmailAddress", "emailAddress");

        return $data;
    }

    public function getDadMeta($id){
        $data["firstName"] = $this->getMeta($id, "dadFirstName", "firstName");
        $data["familyName"] = $this->getMeta($id, "dadFamilyName", "familyName");
        $data["fullName"] = $this->getMeta($id, "dadFullName", "fullName");
        $data["nationality"] = $this->getMeta($id, "dadNationality", "nationality");
        $data["mobileNumber"] = $this->getMeta($id, "dadMobileNumber", "mobileNumber");
        $data["homeNumber"] = $this->getMeta($id, "dadHomeNumber", "homeNumber");
        $data["workNumber"] = $this->getMeta($id, "dadWorkNumber", "workNumber");
        $data["company"] = $this->getMeta($id, "dadCompany", "company");
        $data["emailAddress"] = $this->getMeta($id, "dadEmailAddress", "emailAddress");
        
        return $data;
    }

    public function getLocationMeta($id){
        return $this->getMeta($id, "location", "location");
    }

    public function getCreditMeta($id){
        return $this->getMeta($id, "credits", "credits");
    }

    public function getRoleMeta($id){
        return $this->getMeta($id, "role", "role");
    }

    public function getMeta($id, $meta_key, $name) {
        return User_meta::select("meta_value AS {$name}")->where([ "user_id" => $id, "meta_key" => $meta_key ])->pluck($name)->first();
    }

    public function saveUser($email, $password) {
        $sanitizer = new SanitizeController();

        $data = new User();
        $data->email = $sanitizer->string($email);
        $data->password = Hash::make($password);
        $data->save();

        return $data;
    }

    public function updatePassword($id, $password) {
        $data = User::find($id);
        $data->password = Hash::make($password);
        $data->save();
    }

    public function saveUserMeta($id, $form) {
        
        foreach($form AS $key => $value) {
            $data = new User_meta();
            $data->user_id = $id;
            $data->meta_key = $key;
            $data->meta_value = $value;
            $data->save();
        }
    }

    public function updateUserMeta($id, $form) {
        $arr = $this->userMetas($form);

        foreach($arr AS $key => $value) {
            $data = User_meta::where([
                "user_id" => $id,
                "meta_key" => $key
            ])
            ->first();
            $data->meta_value = $value;
            $data->save();
        }
    }

    public function userMetas($form) {
        $sanitizer = new SanitizeController();

        $arr = [
            "momFirstName" => $sanitizer->string($form["mom"]["firstName"]),
            "momFamilyName" => $sanitizer->string($form["mom"]["familyName"]),
            "momFullName" => $sanitizer->string($form["mom"]["firstName"]). " ". $sanitizer->string($form["mom"]["familyName"]),
            "momNationality" => $sanitizer->string($form["mom"]["nationality"]),
            "momMobileNumber" => $sanitizer->number($form["mom"]["mobileNumber"]),
            "momHomeNumber" => $sanitizer->number($form["mom"]["homeNumber"]),
            "momWorkNumber" => $sanitizer->number($form["mom"]["workNumber"]),
            "momCompany" => $sanitizer->string($form["mom"]["company"]),
            "momEmailAddress" => $sanitizer->string($form["mom"]["emailAddress"]),
            "dadFirstName" => $sanitizer->string($form["dad"]["firstName"]),
            "dadFamilyName" => $sanitizer->string($form["dad"]["familyName"]),
            "dadFullName" => $sanitizer->string($form["dad"]["firstName"]). " ". $sanitizer->string($form["dad"]["familyName"]),
            "dadNationality" => $sanitizer->string($form["dad"]["nationality"]),
            "dadMobileNumber" => $sanitizer->number($form["dad"]["mobileNumber"]),
            "dadHomeNumber" => $sanitizer->number($form["dad"]["homeNumber"]),
            "dadWorkNumber" => $sanitizer->number($form["dad"]["workNumber"]),
            "dadCompany" => $sanitizer->string($form["dad"]["company"]),
            "dadEmailAddress" => $sanitizer->string($form["dad"]["emailAddress"]),
            "location" => $sanitizer->string($form["location"]),
            "role" => $form["role"],
            "credits" => "0"
        ];

        return $arr;
    }

    public function deleteUser($id) {
        User::find($id)->delete();
        $student = new StudentController();
        $student->deleteStudent($id);
    }

    public function viewDeleteUser(Request $request) {
        return User::onlyTrashed()->where('email', 'LIKE', '%'.$request->search.'%')->paginate($request->perPage);
    }

    public function restoreDeletedUser($id) {
        User::withTrashed()->find($id)->restore();
        $student = new StudentController();
        $student->restoreStudent($id);
    }

    public function deleteUserMeta($id) {
        User_meta::where("user_id", $id)->delete();
    }

    public function getAllTeachers() {
        return $this->getUsersByArray(['Teacher', 'Manager']);
    }

    public function getReceptions() {
        return $this->getUsersByArray(['Reception']);
    }

    public function getAllUser() {
        return $this->getAllUserData();
    }

    public function findUserMeta($id, $meta_key) {
        return User_meta::where([
            'user_id' => $id,
            'meta_key' => $meta_key
        ])->first();
    }

    public function storeUserLog($user_id, $token, $browser, $ip) {
        $data = new User_log();
        $data->user_id = $user_id;
        $data->token = $token;
        $data->browser = $browser;
        $data->ip = $ip;
        $data->save();
    }

    public function deleteUserLog($user_id) {
        $data = User_log::where('user_id', $user_id)->first();
        $data->delete();
    }

    public function getUserLogToken($browser, $ip) {
        return User_log::where([
            'browser' => $browser,
            'ip' => $ip
        ])
        ->pluck('token')
        ->first();
    }
}
