<?php
    namespace App\Traits;

    use App\Models\App_setup;

    trait Setups {
        
       public function loadSetup($key) {
           return App_setup::select("meta_value AS $key")->where('meta_key', $key)->pluck($key)->first();
       }

       public function save($key, $value) {
           $data = new App_setup();
           $data->meta_key = $key;
           $data->meta_value = $value;
           $data->save();
       }

       public function update($key, $value) {
            $data = $this->findKey($key);
            $data->meta_value = $value;
            $data->save();
       }

       public function findKey($key) {
           return App_setup::where("meta_key", $key)->first();
       }
       
    }

?>