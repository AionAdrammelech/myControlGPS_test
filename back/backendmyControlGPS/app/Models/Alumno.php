<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    protected $table='alumnos';
    protected $fillable=[
        'nombre_completo',
        'direccion',
        'telefono',
        'email',
        'foto',
        'genero',
        'latitud',
        'longitud',
        'id_grado',
        'id_seccion',
        'id_school'
    ];
}
