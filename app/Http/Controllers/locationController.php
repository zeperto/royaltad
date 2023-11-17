<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class locationController extends Controller{
    public function index(Request $request) {
        $userIp = $request->ip();
        $userIp = '5.238.129.108';
        $locationData = \Location::get($userIp);

        return $locationData;

        $collection = collect($locationData);
        return $collection->get('timezone');
    }
}
