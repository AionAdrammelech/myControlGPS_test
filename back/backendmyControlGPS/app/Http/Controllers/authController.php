<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;

class authController extends Controller
{
    public function register(Request $request){
        $fields= $request->validate([
            'nombre'=>'required|max:255',
            'usuario'=>'required|max:255|unique:users,usuario',
            'password'=>'required|confirmed',
            'tipo'=>'nullable|boolean'
        ]);
        $fields['tipo'] = $fields['tipo'] ?? 0;
        $user = User::create($fields);
        $token = $user->createToken($request->usuario)->plainTextToken;

        return response()->json([
            'user' => [
                'id' => $user->id,
                'nombre' => $user->nombre,
                'usuario' => $user->usuario,
                'tipo' => $user->tipo,
            ],
            'token' => $token
        ], 201);

    }
    public function login(Request $request){
        $request->validate([
            'usuario'=>'required',
            'password'=>'required',
        ]);
        $user= User::where('usuario', $request->usuario)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json(
                ['message'=>'credenciales incorrectas', "status"=> 400],
                400
            );
        }

        $token = $user->createToken($request->usuario)->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ], 200);
    }
    public function logout(Request $request){
        //echo "logout func";
        $request->user()->tokens()->delete();
        return ["message"=>"logged out"];
    }
}
