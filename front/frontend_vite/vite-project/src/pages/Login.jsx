import '../css/Login.css';
import React, { useState } from "react";
import { loginService } from '../services/AuthService/loginService';
import { useNavigate } from 'react-router-dom';
function Login(){
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorCredentials, setErrorCredentials]=useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const login = await loginService(username, password);
      if(login.token){
        navigate("/dashboard", {replace:true});
      }
    } catch (error) {
      console.log(error);
      setErrorCredentials(true);
      console.log("error desde login jsx");
    }
  };

    return (

    <>
      <div className="login-container">
        <div className="login-card">
          <h2>Iniciar sesión</h2>
          <p>Ingresa tus credenciales para continuar</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre de usuario</label>
              <input
                type="text"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => {setUsername(e.target.value); setErrorCredentials(false)}}
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => {setPassword(e.target.value); setErrorCredentials(false)}}
                required
              />
            </div>

            <button type="submit" className="login-button">
              Iniciar sesión
            </button>
          </form>
          {errorCredentials && (
            <div className="error-message">
              Error en las credenciales
            </div>
          )}
        </div>
      </div>


        </>
    );
}
export default Login;