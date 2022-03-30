<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Jobs\UserUploadJob;
use App\Traits\Setups;
use App\Traits\Sams;
use Excel;
use App\Traits\xero;
use App\Imports\UserImport;
use App\Imports\ChartOfAccountsImport;
use App\Jobs\ChartOfAccountUploadJob;

class SetupController extends Controller
{
    use Sams, Setups, xero;

    public function getUsers() {
        return [
            'staffs' => $this->samsViewUser('All', null, 'Name')->get()
        ];
    }

    public function getSetups() {
        return [
            'ebd' => $this->loadSetup('ebd'),
            'vat' => $this->loadSetup('vat'),
            'emails' => $this->loadSetup('emails'),
            'is_start_term' => $this->loadSetup('is_start_term'),
        ];
    }


    public function saveXero(Request $request) {
        $arr = array(
            'xero_code' => $request->code,
            'xero_scope' => $request->scope,
            'xero_session_state' => $request->session_state,
            'xero_state' => $request->state
        );

        $this->token($request->code);
        

        foreach($arr AS $key => $value) {
            $exist = $this->findKey($key);
            $exist ? $this->update($key, $value) : $this->save($key, $value);
        } 

        return [
            'code' => json_decode($this->loadSetup('xero_code')),
            'scope' => json_decode($this->loadSetup('xero_scope')),
            'session_state' => json_decode($this->loadSetup('xero_session_state')),
            'state' => json_decode($this->loadSetup('xero_state')),
            'token' => json_decode($this->loadSetup('xero_token')),
            'tenant' => json_decode($this->loadSetup('xero_tenant')),
            'owner' => json_decode($this->loadSetup('xero_owner'))
        ];
    }

    public function saveSetup(Request $request) {
        // return $request->all();
        foreach($request->filter AS $key => $value) {
            $exist = $this->findKey($key);
            $exist ? $this->update($key, $value) : $this->save($key, $value);
        }

        return $this->getSetups();
    }

    public function uploadUser(Request $request) {
        $rows = Excel::toArray(new UserImport, $request->file('file'));
        foreach($rows[0] AS $row) {
            dispatch(new UserUploadJob($row))->delay(now()->addSecond(5));
        }
    }

    public function uploadChartOfAccounts(Request $request) {
        $rows = Excel::toArray(new ChartOfAccountsImport, $request->file('file'));
        
        foreach($rows[0] AS $row) {
            if(!empty($row[0])) {
                dispatch(new ChartOfAccountUploadJob($row))->delay(now()->addSecond(5));
            }
        }
    }
}
