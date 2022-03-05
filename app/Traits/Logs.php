<?php
    namespace App\Traits;

    use App\Models\Log;

    trait Logs {
        
        public function saveLog($userId, $status) {
            $data = new Log();
            $data->user_id = $userId;
            $data->status = $status;
            $data->save();
        }
    
        public function viewLogs() {
            return Log::all();
        }
    }

?>