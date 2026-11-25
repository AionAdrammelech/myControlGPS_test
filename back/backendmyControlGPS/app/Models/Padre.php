<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Padre extends Model
{
    protected $table='padres';
    protected $fillable=[
        'nombre',
        'direccion',
        'telefono'
    ];
}
