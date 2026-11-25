<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\School;
use Illuminate\Support\Facades\Validator;
    

class schoolController extends Controller
{
    public function getAllSchools(){
        $schools = School::query()->get();
        if ($schools->isEmpty()){
            $responseBody=[
                'message'=>'no hay escuelas para mostrar',
                'status'=>404
            ];

            return response()->json($responseBody, 404);
        };
        return response()->json($schools, 200);
    }

    public function getOneSchool($id_school){
        $school=School::where('id_school',$id_school)->get();
        if ($school->isEmpty()){
            $responseBody=[
                'message'=>'no existe la escuela consultada',
                'id'=>$id_school,
                'status'=>404
            ];
            return response()->json($responseBody, 404);
        };
        return response()->json($school, 200);
        
    }


    public function createSchool(Request $request){
        $validator=Validator::make($request->all(),[
            'nombre'=>'required',
            'direccion'=>'required',
            'email'=>'required|email',
            'foto'=>'required',
            'latitud'=>'required',
            'longitud'=>'required',
            'id_user'=>'required',
        ]);
        if($validator->fails()){
            $responseBody=[
                'message'=>'error en los datos recibidos',
                'error'=>$validator->errors(),
                'status'=>400
            ];
            return response()->json($responseBody, 404);
        }
        $school=School::create([
            'nombre'=>$request->nombre,
            'direccion'=>$request->direccion,
            'email'=>$request->email,
            'foto'=>$request->foto,
            'latitud'=>$request->latitud,
            'longitud'=>$request->longitud,
            'id_user'=>$request->id_user,
        ]);
        if(!$school){
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
