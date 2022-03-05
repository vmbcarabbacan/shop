<?php
    namespace App\Traits;

    use App\Models\Sale;
    use App\Models\Sale_meta;
    use App\Models\Sale_item;

trait Sales {

        public static function saleQuery() {
            return Sale::select(
                    'sales.id AS id',
                    'fullName.meta_value AS name',
                    'sales.total AS total',
                    'sales.status AS status',
                    'sales.updated_at AS purchase_date'
                )
                ->leftJoin('users', 'users.id', '=', 'sales.user_id')
                ->leftJoin('user_metas AS fullName', 'fullName.user_id', '=', 'users.id')
                ->where('fullName.meta_key', 'momFullName')
                ->orderBy('sales.id', 'DESC');
        }

        public function saleByIdQuery($id) {
            $payment = $this->getMeta($id, 'payment');

            $data =  Sale::find($id);
            $data['link'] = $this->getMeta($id, 'link');
            $data['mom'] = $this->getMeta($id, 'customer');
            $data['payment'] = $payment;
            $data['item'] = $this->getMeta($id, 'items');
            $data['total'] = $this->getMeta($id, 'total');
            $data['address'] = $this->getMeta($id, 'address');
            $data['notes'] = $this->getMeta($id, 'notes');
            $data['pay'] = collect($payment)->pluck('payment');

            return $data;
        }

        public function getSaleItems($ids) {
            return Sale_item::whereIn('cart_id', $ids)->get();
        }

        private function getMeta($id, $key) {
            return Sale_meta::select("meta_value")->where([
                    'meta_key' => $key,
                    'sale_id' => $id
                ])
                ->pluck('meta_value')
                ->first();
        }

        public function findMeta($id, $key) {
            return Sale_meta::where([
                'meta_key' => $key,
                'sale_id' => $id
            ])
            ->first();
        }

        public function updateItem($sale_id, $item, $key) {
            $data = Sale_meta::where([
                        'sale_id' => $sale_id,
                        'meta_key' => $key
                    ])->first();
                    $data->meta_value = $item;
            $data->save();
        }

    }

?>