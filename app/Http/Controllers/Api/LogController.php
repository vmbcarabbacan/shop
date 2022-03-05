<?php

namespace App\Http\Controllers\Api;

use App\Models\Log;

class LogController
{
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
