import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";


const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Escuelas", path: "/schools" },
    { name: "Padres", path: "/parents" },
    { name: "Alumnos", path: "/students" },
    { name: "Reportes", path: "/reports" }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Mi Escuela</h2>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;