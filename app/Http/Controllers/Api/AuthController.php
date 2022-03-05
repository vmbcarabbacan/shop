<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\SanitizeController;
use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Api\AddressController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Controller;
use App\Events\eventAgreementTrial;
use App\Events\eventResetPassword;
use App\Events\eventVerifyEmail;
use App\Events\eventAgreement;
use App\Models\Password_reset;
use Illuminate\Http\Request;
use App\Traits\Carts;
use stdClass;


class AuthController extends Controller
{
    public $user, $student, $address;

    use Carts;

    public function __construct(
        UserController $user,
        StudentController $student,
        AddressController $address
        )
    {
        $this->user = $user;
        $this->student = $student;
        $this->address = $address;
    }

    public function validateEmail(Request $request) {
        $request->validate([
            'email' => 'required|string|email|max:255',
        ]);

        $user = $this->user->getEmail($request->email);
        
        if(!$user) {

            $email = array();
            array_push($email, "Email not found. Register new account, email address will be use as Mom's email");

            $err_email = new stdClass();
            $err_email->email = $email;

            $err = new stdClass();
            $err->errors = $err_email;

            return response()->json($err, 421);
            
        }
        
        $user["mom"] = $this->user->getMomMeta($user->id);
        $user["dad"] = $this->user->getDadMeta($user->id);
        $user["location"] = $this->user->getLocationMeta($user->id);
        $user["children"] = $this->student->getStudents($user->id);
        $user["role"] = $this->user->getRoleMeta($user->id);
        $user['address'] = $this->address->getAddress($user->id);

        return $user;

    }

    public function loginCheckToken(Request $request) {
        $ip = $_SERVER['REMOTE_ADDR'];
        $browser = $request->header('User-Agent');

        return $this->user->getUserLogToken($browser, $ip);
    }

    public function login(Request $request) {
        $validation = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $ip = $_SERVER['REMOTE_ADDR'];
        $browser = $request->header('User-Agent');

        if (auth()->attempt($validation)) {
            $accessToken = auth()->user()->createToken('authToken')->accessToken;
            $request->session()->put('key', $accessToken);
            $this->user->storeUserLog(auth()->user()->id, $accessToken, $browser, $ip);
            return response([
                'user' => $this->loginCheck(), 
                'accessToken' => $accessToken,
                "carts" => $this->getCart(true, $browser, $ip, auth()->user()->id), 
                "pos" => $this->getCart(true, $browser, $ip, auth()->user()->id, false), 
                "wishlist" => $this->getCart(false, $browser, $ip, auth()->user()->id)
                ]);
        } else {
            return response()->json('Invalid Credentials', 401);
        }
    }

    public function loginCheck() {
        $user = auth()->user();
        $user["mom"] = $this->user->getMomMeta($user->id);
        $user["dad"] = $this->user->getDadMeta($user->id);
        $user["location"] = $this->user->getLocationMeta($user->id);
        $user["children"] = $this->student->getStudents($user->id);
        $user["role"] = $this->user->getRoleMeta($user->id);
        $user["credits"] = (float) $this->user->getCreditMeta($user->id);
        $user['address'] = $this->address->getAddress($user->id);
        
        return $user;
    }

    public function logout() {
        $this->user->deleteUserLog(auth()->user()->id);

        $access_token = auth('api')->user()->token();
        $access_token->revoke();

    }

    public function register(Request $request) {
        $user = "";
        if($request->form["id"] === 0) {

            $request->validate([
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6'
            ]);

            $user = $this->user->saveUser($request->form["mom"]["emailAddress"], 
                              $request->password);
            $form = $this->user->userMetas($request->form);
            $this->user->saveUserMeta($user->id, $form);
            $this->address->store(
                    $request->form["address"]['id'],
                    $user->id, 
                    $request->form["address"]['street'], 
                    $request->form["address"]['building'], 
                    $request->form["address"]['city'], 
                    $request->form["address"]['area'], 
                    $request->form["address"]['country'], 
                    $request->form["address"]['zip']);

        } else {
            $user = $this->user->getEmail($request->form["mom"]["emailAddress"]);
            $this->user->updateUserMeta($user->id, $request->form);
        }

        if($request->form['role'] == 'User') {
            foreach($request->form["children"] AS $child)
            {
                $this->student->saveStudent($user->id, $child);
                if($child["isSelected"]) {
                    event(new eventAgreement(
                                                $child,
                                                $request->form["mom"],
                                                $request->form["dad"],
                                                $request->form["location"],
                                                date("Y/m/d")
                                            ));
                }
            }
        }

        if($request->form["id"] === 0) {
            event(new eventVerifyEmail($request->form["mom"]["emailAddress"], 
                                       $user->id, $request->form["mom"]["firstName"]));
        }
    }

    public function trial(Request $request) {
        $user = $this->user->getEmail($request->form["mom"]["emailAddress"]);

        if($user) {
            $this->user->updateUserMeta($user->id, $request->form);
            $this->storeTrialStudent($user->id, $request->form["children"], $request->form["mom"], $request->form["dad"]);
            return;
        } 

        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6'
        ]);

        $user = $this->user->saveUser($request->form["mom"]["emailAddress"], 
                          $request->password);
        $form = $this->user->userMetas($request->form);
        $this->user->saveUserMeta($user->id, $form);

        $this->storeTrialStudent($user->id, $request->form["children"], $request->form["mom"], $request->form["dad"]);
        
        if($request->form["id"] === 0) {
            event(new eventVerifyEmail($request->form["mom"]["emailAddress"], 
                                       $user->id, $request->form["mom"]["firstName"]));
        }

    }

    public function storeTrialStudent($id, $chilren, $mom, $dad) {
        foreach($chilren AS $child)
        {
            $this->student->saveStudent($id, $child);
            if($child["isSelected"]) {
                event(new eventAgreementTrial(
                                            $child,
                                            $mom,
                                            $dad,
                                            date("Y/m/d")
                                        ));
            }
        }
    }

    public function resetPassword(Request $request) {
        $user = $this->user->getEmail($request->email);
        

        if(!$user) {
            return response()->json("Email address not found", 421);
        }
        $user['mom'] = $this->user->getMomMeta($user->id);

        $token = $this->saveResetPassword($request->email);

        event(new eventResetPassword($user['mom']['firstName'], $user->id, $token, $user->email));

        return response()->json("Please check your inbox/spam for the reset password instruction", 200);;
    }

    private function saveResetPassword($email) {
        $sanitizer = new SanitizeController();
        $token = $sanitizer->random_strings(28);

        $exist = Password_reset::where("token", $token)->first();

        if($exist) {
            $this->saveResetPassword($email);
            return;
        } else {
            $data = new Password_reset();
            $data->email = $email;
            $data->token = $token;
            $data->save();
        } 
        
        return $token;
    }

    public function updatePassword(Request $request) {
        $user = $this->user->getUserById($request->id);

        $exist = Password_reset::where([
            "email" => $user->email,
            "token" => $request->token
        ])
        ->first();

        if(!$exist) {
            return response()->json("Sorry, your password reset token already expired", 421);
        }

        $this->user->updatePassword($user->id, $request->password);

        $exist->delete();

        return response()->json("Password successfully change!", 200);
    }

    public function saveAddress(Request $request) {
        $this->address->store( 
            $request->address['id'],
            auth()->user()->id,
            $request->address['street'],
            $request->address['building'],
            $request->address['city'],
            $request->address['area'],
            $request->address['country'],
            $request->address['zip']
        );

        return $this->loginCheck();
    }
}
