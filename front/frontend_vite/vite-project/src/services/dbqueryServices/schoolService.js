import { getToken } from "../AuthService/tokenRetrievalService";
import { API_URL } from "../config"


export const getAllSchools = async () =>{
    const token = getToken();
    try {   
        const schools = await fetch((API_URL+"/escuelas"),
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        ).then((response)=>response.json());
        return schools
    } catch (error) {
        console.log(error)
    }
}