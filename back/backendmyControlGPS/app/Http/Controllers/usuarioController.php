<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class usuarioController extends Controller
{
    public function getUsuario($id){
        $usuaro=School::where('id_usuario',$id)->where()->get();
        if ($school->isEmpty()){
            $responseBody=[
                'message'=>'usuario no encontrado',
                'id'=>$id,
                'status'=>404
            ];
            return response()->json($responseBody, 404);
        };
        return response()->json($usuario, 200);
    }
}
