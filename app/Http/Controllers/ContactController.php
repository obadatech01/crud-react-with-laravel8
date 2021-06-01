<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    public function create(Request $request)
    {
        $contacts = Contact::create([
            'name' => $request->name,
            'tel' => $request->tel
        ]);

        return response()->json($contacts);
    }

    public function edit($id)
    {
        $contacts = Contact::find($id);

        return response()->json($contacts);
    }

    public function update(Request $request, $id)
    {
        $contacts = Contact::find($id)->update([
            'name' => $request->name,
            'tel' => $request->tel
        ]);

        return response()->json($contacts);
    }

    public function delete($id)
    {
        $contacts = Contact::find($id)->delete( );

        return response()->json($contacts);
    }
}
