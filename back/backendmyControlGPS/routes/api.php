<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\schoolController;
use App\Http\Controllers\padreController;
use App\Http\Controllers\alumnoController;
use App\Http\Controllers\authController;

//Auth
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [authController::class, 'logout']);

    //todos
    Route::get('/escuelas', [schoolController::class, 'getAllSchools']);
    Route::get('/alumnos', [alumnoController::class, 'getAllAlumnos']);

    //uno
    Route::get('/escuelas/{id}', [schoolController::class, 'getOneSchool']);
    Route::get('/alumnos/{id}',[alumnoController::class, 'getOneAlumno']);
    Route::get('/padres/{id}', [padreController::class, 'getOnePadre']);
       
    //crear
    Route::post('/escuelas', [schoolController::class, 'createSchool']);
    Route::post('/alumnos', [alumnoController::class, 'createAlumno']);
    Route::post('/padres', [padreController::class, 'createPadre']);
    
    
    Route::patch('/escuelas/{id}', function () {
        return "actualizar escuela";
    });
    Route::patch('/alumnos/{id}', function () {
        return "actualizar alumno por id";
    });

        

    //Metodos de alumnos padres


    });
Route::post('/register', [authController::class, 'register']);
Route::post('/login', [authController::class, 'login']);
