<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    function profile(){
        return view('profile');
    }

    function markers(){
        return view('markers');
    }

    function vehicle(){
        return view('vehicle');
    }


}
