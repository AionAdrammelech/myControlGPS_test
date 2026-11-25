


import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Schools from './pages/Schools';
import Dashboard from './pages/Dashboard';
import Parents from './pages/Parents';
import Reports from './pages/Reports';
import Students from './pages/Students';

import MainLayout from './layouts/MainLayout';

function App() {
  
  return (
    <Routes>

      
      <Route path="/login" element={<Login />}/>
      <Route element={<MainLayout />}>
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/students" element={<Students />} />
      </Route>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

    </Routes>
  );
}

export default App;
