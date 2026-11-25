import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config.js';
import { delUser, getUser, setUser } from './tokenRetrievalService.js';

export const loginService = async (user, pass)=> {
    if(localStorage.getItem('token')){
        throw new Error("usuario ya esta loggeado (esto no deberia pasar si la ruta no lo permite pero bueh)")
    }
    //console.log('usuario:'+user+" contra:"+pass);
    const response = await fetch((API_URL+"/login"),
        {
            method: "POST",
            body: JSON.stringify({
                usuario: user,
                password: pass,
            }),
            headers: {
                "Content-type": "application/json",
            },
        }
    ).then((response)=>response.json());
    console.log(response)
    if(!response.token){
        throw new Error("datos incorrectos")
    }
    console.log("grdando en lastorage")
    //console.log(response.user.nombre);
    setUser( JSON.stringify(response.user), response.token);
    
    //console.log(getUser())
    return response
}