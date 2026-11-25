<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Alumno;
use Illuminate\Support\Facades\Validator;

class alumnoController extends Controller
{
    public function getOneAlumno($id){
        $alumno=Alumno::where('id_alumno',$id)->get();
        if ($alumno->isEmpty()){
            $responseBody=[
                'message'=>'no existe el alumno consultado',
                'id'=>$id,
                'status'=>404
            ];
            return response()->json($responseBody, 404);
        };
        return response()->json($alumno, 200);
    }

    public function createAlumno(Request $request){
        $validator=Validator::make($request->all(),[
        'nombre_completo'=>'required',
        'direccion'=>'required',
        'telefono'=>'nullable',
        'email'=>'nullable|email',
        'foto'=>'required',
        'genero'=>'required',
        'latitud'=>'required',
        'longitud'=>'required',
        'id_grado'=>'required',
        'id_seccion'=>'required',
        'id_school'=>'required'
        ]);
        if($validator->fails()){
            $responseBody=[
                'message'=>'error en los datos recibidos',
                'error'=>$validator->errors(),
                'status'=>400
            ];
            return response()->json($responseBody, 404);
        }
        $alumno=Alumno::create([
            'nombre_completo'=>$request->nombre_completo,
            'direccion'=>$request->direccion,
            'telefono'=>$request->telefono,
            'email'=>$request->email,
            'foto'=>$request->foto,
            'genero'=>$request->genero,
            'latitud'=>$request->latitud,
            'longitud'=>$request->longitud,
            'id_grado'=>$request->id_grado,
            'id_seccion'=>$request->id_seccion,
            'id_school'=>$request->id_school
        ]);
        if(!$alumno){
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

    public function getAllAlumnos(){
        $alumnos = Alumno::query()->get();
        if ($alumnos->isEmpty()){
            $responseBody=[
                'message'=>'no hay alumnos para mostrar',
                'status'=>404
            ];

            return response()->json($responseBody, 404);
        };
        return response()->json($alumnos, 200);
    }

}
