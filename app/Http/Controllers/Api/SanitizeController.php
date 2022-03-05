<?php

namespace App\Http\Controllers\Api;

class SanitizeController
{

    public function string($string) {
        return filter_var(strtolower($string), FILTER_SANITIZE_STRING);
    }

    public function email($string) {
        return filter_var(strtolower($string), FILTER_SANITIZE_EMAIL);
    }

    public function website($string) {
        return filter_var(strtolower($string), FILTER_SANITIZE_URL);
    }

    public function number($string) {
        return filter_var($string, FILTER_SANITIZE_NUMBER_INT);
    }

    public function float($string) {
        return filter_var($string, FILTER_SANITIZE_NUMBER_FLOAT);
    }

    public function random_strings($length_of_string)
    {

        // String of all alphanumeric character
        $str_result = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        // Shufle the $str_result and returns substring
        // of specified length
        return substr(
            str_shuffle($str_result),
            0,
            $length_of_string
        );
    }
}
