import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Roles from "./pages/Roles";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route
            path="/"
            element={
              <PublicLayout>
                <Login />
              </PublicLayout>
            }
          />

          {/* Admin Pages */}
          <Route
            path="/dashboard"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/employees"
            element={
              <AdminLayout>
                <Employees />
              </AdminLayout>
            }
          />
          <Route path="/roles" element={<AdminLayout><Roles /></AdminLayout>} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
