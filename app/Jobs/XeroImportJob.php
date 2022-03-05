<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use App\Http\Controllers\Api\XeroController;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use XeroPHP\Models\Accounting\Invoice;
use XeroPHP\Models\Accounting\Payment;
use XeroPHP\Models\Accounting\Account;
use XeroPHP\Models\Accounting\LineItem;
use XeroPHP\Models\Accounting\Contact;
use Throwable;
use Exception;
use DateTime;

use App\Models\Xero_import;

class XeroImportJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $items, $accessToken, $tenantId;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($items = [], $accessToken, $tenantId)
    {
        $this->items = $items;
        $this->accessToken = $accessToken;
        $this->tenantId = $tenantId;
        
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $instace = $this->my_instance($this->accessToken, $this->tenantId);
        foreach($this->items AS $item) {
            $description = $this->invoice($item, $instace);
    
            if($description) {
                $data = new Xero_import();
                $data->sale_id = $item['transactionNumber'];
                $data->details = $description;
                $data->save();
            }
        }
    }

    public function invoice($item, $instance)
    {
        $date_today = new DateTime($item['datePurchase']);
        $invoice = new Invoice($instance);
        $line_item = new LineItem($instance);

        $invoiceNumber = 'STEPUP-AUTH2-' . $item['transactionNumber'];

        if(empty($this->set_invoice($invoiceNumber, $instance))) {

            $invoice->setType('ACCREC');
            $invoice->setDate($date_today);
            $invoice->setDueDate($date_today);
            $invoice->setInvoiceNumber($invoiceNumber);
            $invoice->setReference('');
            $invoice->setCurrencyCode('AED');
            $invoice->setStatus('AUTHORISED');
            $invoice->setLineAmountType('Exclusive');
            $invoice->setContact($this->contacts($item['customer'], $instance));

            foreach ($item['carts'] as $cart) {
                $xero = new XeroController();
                $code = $xero->getCode($cart['item']['productId']);
                $xero_code = $code ? $code['xero'] : '230';
                $line_item_2 = clone $line_item;
                $price_exlc = $cart['item']['price_excl'];
                $total = $cart['item']['price'] * $cart['item']['quantity'];
                $discount_percentage = ($cart['item']['discount'] / $total) * 100;
                $name = $cart['item']['productName'] . ' ' . $cart['item']['pdoName'] . ' ('. $cart['item']['student']['firstName'] . ' ' .$cart['item']['student']['familyName'] .')';

                $line_item_2->setDescription($name);
                $line_item_2->setQuantity($cart['item']['quantity']);
                $line_item_2->setUnitAmount($price_exlc);
                $line_item_2->setAccountCode($xero_code);
                $line_item_2->setTaxType('TAX002');
                $line_item_2->setDiscountRate($discount_percentage);

                $invoice->addLineItem($line_item_2);
            }

            $invoice->save();

            $this->update_accounts($invoice->InvoiceID, $instance, $invoice->InvoiceNumber, $invoice->AmountDue, $item['customer']['fullName']);

            return $invoice;
             
        }
    }

    private function my_instance($access_token, $tenant_id)
    {
        return new \XeroPHP\Application($access_token, $tenant_id);
    }

    private function contacts($item, $instance)
    {
        $contact = new Contact($instance);

        $contact->setContactStatus('ACTIVE');
        $contact->setName($item['fullName']);
        $fullName = explode(" ", $item['fullName']);
        
        $contact->setFirstName(current($fullName));
        $contact->setLastName(end($fullName));
        $contact->setEmailAddress($item['emailAddress']);

        return $contact;
    }

    private function set_invoice($invoice_number, $instance)
    {
        $data = null;
        try {
            $data = $instance->loadByGUID(Invoice::class, $invoice_number);
            return $data;
        } catch(Throwable $t) {
            $data = null;
        } catch(Exception $e) {
            $data = null;
        } 
    }

    private function set_account($invoice_id, $instance)
    {
        $account = new Account($instance);
        $account->getGUIDProperty($invoice_id);
        $account->setCode('101');

        return $account;
    }

    private function update_accounts($invoice_id, $instance, $invoice_number, $amount_due, $reference)
    {
        $payment = new Payment($instance);
        $payment->setInvoice($this->set_invoice($invoice_number, $instance));
        $payment->setAccount($this->set_account($invoice_id, $instance));
        $payment->setDate(new DateTime());
        $payment->setAmount($amount_due);
        $payment->setIsReconciled(true);
        $payment->setReference($reference);

        $instance->save($payment);
    }
}
