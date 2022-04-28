<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function testindex() {
        $response =  file_get_contents(storage_path() . "/test.json");
        $json = json_decode($response);
        $companies = $json->company;
        $community = $json->community;
        // Facebook data
        $facebook = $json->company[0]->Facebook;
        // Github data
        $twilio = $json->company[1]->Twilio;
        // Bitcoin data
        $bitcoin = $json->community[0]->Bitcoin;
        // WithTheDocs data
        $WriteTheDocs = $json->community[1]->WriteTheDocs;

        return view("welcome", compact("companies", "community", "facebook", "twilio", "bitcoin", "WriteTheDocs"));

        // return view('welcome', compact(
        //     "facebook" => $facebook,
        //     "github" => $github,
        //     "bitcoin" => $bitcoin,
        //     "WriteTheDocs" => $WriteTheDocs,
        // ));
    }

}