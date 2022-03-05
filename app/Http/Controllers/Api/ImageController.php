<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Image;
use App\Traits\Logs;
use Carbon\Carbon;
use File;

class ImageController extends Controller
{
    use Logs;

    public function store(Request $request) {
        $this->validate($request, [
            'file' => 'required|mimes:jpeg,jpg,png'
        ]);

        $year = $this->folder_name('y');
        $month = $this->folder_name('m');
        $day = $this->folder_name('d');

        $path = 'Image' . '/' . $year . '/' . $month . '/' . $day;
        $name = str_replace(' ', '-', pathinfo($request->file->getClientOriginalName(), PATHINFO_FILENAME));
        $fullname = $name . '-' . time() . '.' . $request->file->getClientOriginalExtension();
        $fullname_low = $name . '-' . time() . '_low' . '.' . $request->file->getClientOriginalExtension();

        $this->create_directory($path);

        $normal = $this->move_file($request->file, $fullname, $path);
        $low = $this->move_file($request->file, $fullname_low, $path, 30);

        $this->saveImages($fullname, '', $normal, $low, $name);
        $this->saveLog(auth("api")->user()->id, "Upload new Image");

    }

    public function update(Request $request) {
        
        $slug = str_replace(' ', '-', $request->slug);

        $data = Image::find($request->id);
        $data->name = $request->name;
        $data->alt = $request->alt;
        $data->slug = $slug;
        $data->save();

        $this->saveLog(auth("api")->user()->id, "Updated Image: " . $request->name);
    }

    public function images(Request $request)
    {
        $images = Image::orderBy('id', 'DESC');
        // if ($request->filter <> '' || $request->filter <> 'null') {
        //     $images->where('name', 'LIKE', '%' . $request->filter . '%');
        // }
        return $images->paginate($request->perPage);
    }

    public function imageSearchBySlug($slug) {
        return Image::where("slug", $slug)->orderBy("id", "DESC")->first();
    }

    public function imagesFilterByIds(Request $request) {
        return $this->imageFilterIds($request->ids);
    }

    public function imagesFilterByStudentIds(Request $request) {
        $arr = array();
        array_push($arr, $request->ids);
        return $this->imageFilterByIdsGetFirstElemet($arr);
    }

    public function imageFilterIds($ids) {
        $my_ids = collect($ids);
        $images = Image::whereIn("id", $my_ids)->get();
        $sorted = $my_ids->map(function ($id) use ($images) {
            return $images->where('id', $id)->first();
        });
        return $sorted;
    }

    public function imageFilterByIdsGetFirstElemet ($ids) {
        if(count($ids) === 0) {
            return [];
        }
        
        $imageIds = collect($ids);

        return Image::where("id", $imageIds)->first();
    }

    private function create_directory($path, $mode = 0777, $recursive = false, $force = false)
    {
        if (!File::isDirectory($path)) {
            File::makeDirectory($path, 0777, true, true);
        }
    }

    private function saveImages($name, $alt = '', $link, $low, $slug)
    {
        $images = new Image();
        $images->name = $name;
        $images->alt = $alt;
        $images->link = $link;
        $images->link_res = $low;
        $images->slug = $slug;
        $images->save();
    }

    private function folder_name($n)
    {
        $today = Carbon::now()->format($n);
        return $today;
    }

    private function move_file($file, $name, $path, $quality = null)
    {
        if ($quality != null) {
            \Image::make($file)->save($path . '/' . $name, $quality);
        } else {
            \Image::make($file)->save($path . '/' . $name);
        }
        return $path . '/' . $name;
    }
    
}
