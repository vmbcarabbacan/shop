<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Traits\Carts;
use App\Traits\Sales;
use App\Traits\Setups;

class CartController extends Controller
{
    use Carts, Sales, Setups;

    public function addCart(Request $request) {
        $ip = $_SERVER['REMOTE_ADDR'];
        $browser = $request->header('User-Agent');
        $user_id = $request->user_id;

        $this->storeCart(
            $browser,
            $ip,
            $request->item['status'],
            $request->item['type'],
            $request->item['isCart'],
            $request->item['isWeb'],
            $request->item['productId'],
            $request->item,
            $user_id
        );

        return ["carts" => $this->getCart(true, $browser, $ip, $user_id), 
                "pos" => $this->getCart(true, $browser, $ip, $user_id, false), 
                "wishlist" => $this->getCart(false, $browser, $ip, $user_id)];
    }

    public function updateCart(Request $request) {
        $item = $request->items;
        $ip = $_SERVER['REMOTE_ADDR'];
        $browser = $request->header('User-Agent');
        $user_id = $request->user_id;
        $sale_id = $request->sale_id;

        $cart = $this->storeCart(
            $browser,
            $ip,
            $request->item['status'],
            $request->item['type'],
            $request->item['isCart'],
            $request->item['isWeb'],
            $request->item['productId'],
            $request->item,
            $user_id
        );
        array_push($item, $cart);

        $this->updateItem($sale_id, $item, 'items');

        return $this->saleByIdQuery($sale_id);
         
    }

    public function cart(Request $request) {
        $ip = $_SERVER['REMOTE_ADDR'];
        $browser = $request->header('User-Agent');

        return ["carts" => $this->getCart(true, $browser, $ip, $request->id), 
                "pos" => $this->getCart(true, $browser, $ip, $request->id, false),
                "wishlist" => $this->getCart(false, $browser, $ip, $request->id)];
    }

    public function cartUpdateUser(Request $request) {
        $user_id = $request->user_id;
        $carts = $request->carts;
        $wishlist = $request->wishlist;

        if(count($carts) > 0) {
            foreach($carts AS $cart) {
                $this->storeCart(
                    $request->header('User-Agent'),
                    $_SERVER['REMOTE_ADDR'],
                    $cart['status'],
                    $cart['type'],
                    $cart['isCart'],
                    $cart['isWeb'],
                    $cart['productId'],
                    $cart,
                    $user_id
                );
            }
        }
        if(count($wishlist) > 0) {
            foreach($wishlist AS $cart) {
                $this->storeCart(
                    $request->header('User-Agent'),
                    $_SERVER['REMOTE_ADDR'],
                    $cart['status'],
                    $cart['type'],
                    $cart['isCart'],
                    $cart['isWeb'],
                    $cart['productId'],
                    $cart,
                    $user_id
                );
            }
        }

        return [
            "carts" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $request->user_id), 
            "pos" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $request->user_id, false), 
            "wishlist" => $this->getCart(false, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $request->user_id)];
    }

    public function cartDeleteById(Request $request) {
        $this->deleteById($request->cartId);

        return [
            "carts" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $request->user_id), 
            "pos" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $request->user_id, false), 
            "wishlist" => $this->getCart(false, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $request->user_id)
        ];
    }

    public function cartDeleteByIdUpdate(Request $request) {
        $this->deleteById($request->cartId);

        $this->updateItem($request->sale_id, $request->items, 'items');

        return $this->saleByIdQuery($request->sale_id);
    }

    public function deleteById($id) {
        Cart::find($id)->delete();
    }

    public function cartChange(Request $request) {
        $data = Cart::find($request->cartId);
        $data->isCart = $request->isCart;
        $data->save();
        
        return [
            "carts" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $request->user_id), 
            "pos" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $request->user_id, false), 
            "wishlist" => $this->getCart(false, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $request->user_id)
        ];
    }

    public function storeCart($browser, $ip, $status, $type, $isCart, $isWeb, $productId, $item, $user_id) {
        $data = $item['id'] > 0 ? Cart::find($item['id']) : new Cart();
        $data->user_id = $user_id;
        $data->browser = $browser;
        $data->ip = $ip;
        $data->status = $status;
        $data->type = $type;
        $data->isCart = $isCart;
        $data->isWeb = $isWeb;
        $data->productId = $productId;
        $data->item = $item['item'];
        $data->save();

        return $data;
    }

    public function cartUpdateQuantity(Request $request) {
        $cart = $request->cart;
        $cart['item'] = $this->updateCartItemTotal($cart['item'], $cart['item']['quantity'], $cart['item']['price']);
        $this->storeCart(
            $cart['browser'], 
            $cart['ip'],
            $cart['status'],
            $cart['type'],
            $cart['isCart'],
            $cart['isWeb'],
            $cart['productId'],
            $cart,
            $cart['user_id']
        );
        return [
            "carts" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $cart['user_id']), 
            "pos" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $cart['user_id'], false), 
            "wishlist" => $this->getCart(false, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $cart['user_id'])
        ];

    }

    public function updateCartItemTotal($item, $quantity, $price) {
        $app_vat = $this->findKey('vat');
        $vat = (int)$app_vat['meta_value'];
        $tax = $vat / 100;
        $price_excl = $price / ($tax + 1);
        $total_price_excl = $price_excl * $quantity;
        $total_price = $price * $quantity;
        $total_tax = $total_price_excl * $tax;


        $item['price'] = $price;
        $item['quantity'] = $quantity;
        $item['vat'] = $vat;
        $item['tax'] = $tax;
        $item['price_excl'] = $price_excl;
        $item['total_price_excl'] = $total_price_excl;
        $item['total_price'] = $total_price;
        $item['total_tax'] = $total_tax;

        return $item;
    }
}
