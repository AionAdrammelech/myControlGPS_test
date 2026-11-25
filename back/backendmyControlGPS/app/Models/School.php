<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $table='schools';
    protected $fillable=[
        'nombre',
        'direccion',
        'email',
        'foto',
        'latitud',
        'longitud',
        'id_user'
    ];
}
