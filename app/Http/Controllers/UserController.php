<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use \App\User;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $newUser = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8']
        ]);

        $newUser['password'] = Hash::make($newUser['password']);

        Log::info('creating user');

        return User::create($newUser);
    }
}
