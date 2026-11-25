import { getToken } from "../AuthService/tokenRetrievalService";
import { API_URL } from "../config"


export const getAllStudents = async () =>{
    const token = getToken();
    try {   
        const alumnos = await fetch((API_URL+"/alumnos"),
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        ).then((response)=>response.json());
        console.log(alumnos)
        return alumnos
    } catch (error) {
        console.log(error)
    }
}