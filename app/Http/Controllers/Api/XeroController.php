<?php

namespace App\Http\Controllers\Api;

use XeroPHP\Models\Accounting\Invoice;
use App\Http\Controllers\Controller;
use App\Models\Chart_of_account;
use Illuminate\Http\Request;
use App\Jobs\XeroImportJob;
use App\Traits\Reports;
use App\Traits\Setups;
use App\Models\Xero AS Xeros;
use App\Traits\xero;


class XeroController extends Controller
{
    use xero, Setups, Reports;

    public function get() {
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

    public function xero_login()
    {
        return $this->login();
    }

    
    public function refresh_token(Request $request)
    {
        $token = $this->ref_token($request->token);
        $this->update('xero_token', $token);

        return $this->get();
    }

    public function filter(Request $request) {
        return $this->xeroImport($request->dates);
    }


    public function load(Request $request)
    {
        $accessToken = $request->accessToken;
        $tenantId = $request->tenantId;

        $instance = $this->my_instance($accessToken, $tenantId);

        return $this->load_invoice($instance);
    }

    public function import(Request $request)
    {
        $accessToken = $request->accessToken;
        $tenantId = $request->tenantId;
        $items = $request->items;
        
        dispatch(new XeroImportJob($items, $accessToken, $tenantId))->delay(now()->addSecond(5));
    }


    private function load_invoice($instance)
    {
        return $instance->load(Invoice::class)
            ->where('Status', Invoice::INVOICE_STATUS_AUTHORISED)
            ->where('Type', Invoice::INVOICE_TYPE_ACCREC)
            ->execute();
    }

    public function getChartofAccountByType($type) {
        return Chart_of_account::where('type', $type)->get();
    }

    public function getCode($id) {
        $data =  Xeros::where('product_id', $id)->first();
        if($data) {
            $data['xero'] = Chart_of_account::where('id', $data->chart_of_account_id)->pluck('code')->first();
        }

        return $data;
    }

    public function saveXero(Request $request) {
        $exist = Xeros::where('product_id', $request->product_id)->first();

        if(!$exist) {
            $data = new Xeros();
            $data->product_id = $request->product_id;
            $data->chart_of_account_id = $request->chart_of_account_id;
            $data->save();
        }
        else {
            $exist->chart_of_account_id = $request->chart_of_account_id;
            $exist->save();
        }
    }

}
