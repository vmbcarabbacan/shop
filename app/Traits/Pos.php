<?php
    namespace App\Traits;

    use App\Http\Controllers\Api\ImageController;
    use Illuminate\Support\Facades\DB;
    use App\Models\Product_option;
    use App\Models\Category;
    use App\Models\Schedule;
    use App\Models\Product;
    use App\Models\User;

    trait Pos {

        public function getProductByTypes($type) {
            return $this->getPOSProducts("type", $type);
        }

        public function getProductBySearch($search) {
            return $this->getPOSProducts("name", $search);
        }

        public function checkVariantIfAvailable($id, $value) {
            return $value == 'Lessons' 
                ? Schedule::select(
                    'schedules.id AS id',
                    'schedules.product_id AS productID',
                    DB::raw('CONCAT(locations.name, " ", weekdays.name, " - ",schedules.time_start) AS name'),
                    'weekdays.value AS quantity',
                    'schedules.price AS price',
                    'schedules.isVisible AS isVisible',
                    'schedules.location_id AS targetEbd'
                )
                ->leftJoin('locations', 'locations.id', '=', 'schedules.location_id')
                ->leftJoin('weekdays', 'weekdays.id', '=', 'schedules.weekday_id')
                ->where(['schedules.product_id' => $id, 'schedules.isVisible' => 1])->get() 
                : Product_option::where(['productId' => $id, 'isVisible' => 1])->get();
        }

        public function getPOSProducts($field, $value) {
            $image = new ImageController();
            $data = Product::where($field, "LIKE", "%".$value."%")
            ->orderBy("name", "ASC")
            ->get();
            
                $data->transform(function ($data) use ($image, $value) {
                    $data->image = $image->imageFilterIds($data->imageIds)->first();
                    $data->totalQty = $this->checkVariantIfAvailable($data->id, $value)->sum('quantity');
                    return $data;
                });

            return $data;
        }

        public function getAllUserData() {
            return User::select(
                'users.id AS id',
                'users.email AS emailAddress',
                'fullname.meta_value AS fullName',
                'contact.meta_value AS contact',
                'role.meta_value AS role'
            )
            ->leftJoin('user_metas AS fullname', 'fullname.user_id', '=', 'users.id')
            ->leftJoin('user_metas AS contact', 'contact.user_id', '=', 'users.id')
            ->leftJoin('user_metas AS role', 'role.user_id', '=', 'users.id')
            ->where([
                "role.meta_key" => "role",
                "fullname.meta_key" => "momFullName",
                "contact.meta_key" => "momMobileNumber",
                "role.meta_value" => "User"
            ])
            ->orderBy("fullname.meta_value", "ASC")
            ->get();
        }

        public function getUsersByArray($arr) {
            return User::select(
                'users.id AS id',
                'users.email AS email',
                'fullName.meta_value AS name'
            )
            ->leftJoin('user_metas AS fullName', 'fullName.user_id', '=', 'users.id')
            ->leftJoin('user_metas AS role', 'role.user_id', '=', 'users.id')
            ->where('fullName.meta_key', 'momFullName')
            ->whereIn('role.meta_value', $arr)
            ->get();
        }

        public function randomProducts($type, $number) {
            $image = new ImageController();
            $data = Product::where([
                'type' => $type,
                'isVisible' => 1
            ])
            ->inRandomOrder()
            ->limit($number)
            ->get();
            $data->transform(function ($data) use ($image, $type) {
                $data->image = $image->imageFilterIds($data->imageIds)->first();
                $data->totalQty = $this->checkVariantIfAvailable($data->id, $type)->sum('quantity');
                $data->pdo = $this->checkVariantIfAvailable($data->id, $type)->first();
                return $data;
            });

            return $data;
        }
    }

?>