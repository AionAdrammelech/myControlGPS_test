
import { useState } from 'react';
import '../css/UserMenu.css';
import { getToken, getUser } from '../services/AuthService/tokenRetrievalService';
import { logoutService } from '../services/AuthService/logoutService';
import { useNavigate } from 'react-router-dom';

function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    var userdata=JSON.parse(getUser());
  const hasUser = true;
  const navigate = useNavigate();

  const user = {
    name: userdata.nombre,
    type: userdata.tipo
  };

  return (
    <div className="user-menu-container">

      <button
        className="user-menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="user-avatar">
          {hasUser
            ? user.name.charAt(0).toUpperCase()
            : '?'}
        </div>

        <span>
          {hasUser ? user.name : 'Usuario'}
        </span>

        <span className="user-menu-arrow">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <div className="user-dropdown">

          {hasUser ? (
            <>
              <div className="user-info">
                <strong>{user.name}</strong>

                <small>
                  {user.type === 1
                    ? 'Administrador'
                    : 'Usuario'}
                </small>
              </div>

              <button
                onClick={() => setIsOpen(false)}
              >
                Mi perfil
              </button>

              <button
                className="logout-button"
                onClick={() => {
                  setIsOpen(false);
                    console.log(localStorage.getItem('token'))
                    logoutService();
                    navigate("/login", {replace:true});
                }}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setIsOpen(false);

              }}
            >
              Iniciar sesión
            </button>
          )}

        </div>
      )}

    </div>
  );
}

export default UserMenu;
