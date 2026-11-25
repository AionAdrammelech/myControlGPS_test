
import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import UserMenu from "../components/UserMenu";
function MainLayout() {
  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">
        <UserMenu></UserMenu>
        <Outlet />
      </main>

      <style>{`
        .app-layout {
          display: flex;
          min-height: 100vh;
          width: 100%;
        }

        .main-content {
          flex: 1;
          min-width: 0;
          padding: 25px;
          background: #f8fafc;
        }
      `}</style>

    </div>
  );
}

export default MainLayout;
