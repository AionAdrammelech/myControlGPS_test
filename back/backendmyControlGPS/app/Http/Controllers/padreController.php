<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Padre;
use Illuminate\Support\Facades\Validator;

class padreController extends Controller
{
    public function getOnePadre($id){
        $padre=Padre::where('id_padre',$id)->get();
        if ($padre->isEmpty()){
            $responseBody=[
                'message'=>'no existe el padre consultado',
                'id'=>$id,
                'status'=>404
            ];
            return response()->json($responseBody, 404);
        };
        return response()->json($padre, 200);
    }
    public function createPadre(Request $request){
        $validator=Validator::make($request->all(),[
            'nombre'=>'required',
            'direccion'=>'required',
            'telefono'=>'required'
        ]);
        if($validator->fails()){
            $responseBody=[
                'message'=>'error en los datos recibidos',
                'error'=>$validator->errors(),
                'status'=>400
            ];
            return response()->json($responseBody, 404);
        }
        $padre=Padre::create([
            'nombre'=>$request->nombre,
            'direccion'=>$request->direccion,
            'telefono'=>$request->telefono
        ]);
        if(!$padre){
                $responseBody=[
                'message'=>'algo ocurrió',
                'status'=>500
            ];
            return response()->json($responseBody, 500);
        }
        $responseBody=[
            'message'=>'creado',
            'status'=>201
        ];
        return response()->json($responseBody, 201);
        //return 'aun no hay logica para crear una escuela';
    }
}
