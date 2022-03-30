<?php
    namespace App\Traits;

    use App\Models\Cart;
    use App\Models\Schedule;
    use App\Models\Product_option;

    trait Carts {
        
        public function getCart($isCart, $browser, $ip, $user_id, $isWeb = true) {
            if($user_id > 0) {
                return Cart::where([
                    'user_id' => $user_id,
                    'isCart' => $isCart,
                    'isWeb' => $isWeb
                ])
                ->where('status', 'Pending')
                ->get();
            } else {
                return Cart::where([
                    'user_id' => 0,
                    'browser' => $browser,
                    'ip' => $ip,
                    'isCart' => $isCart,
                    'isWeb' => $isWeb
                ])
                ->where('status', 'Pending')
                ->get();
            } 
        }

        public function uniformDecrement($id, $quantity) {
            $data = Product_option::find($id);
            $data->decrement("quantity", $quantity);
        }

        public function uniformIncrement($id, $quantity) {
            $data = Product_option::find($id);
            $data->increment("quantity", $quantity);
        }

        public function scheduleDecrement($id) {
            $data = Schedule::find($id);
            $data->decrement("quantity", 1);
        }

        public function scheduleIncrement($id) {
            $data = Schedule::find($id);
            $data->increment("quantity", 1);
        }
    }

?>