import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

// Public Pages
import NotFound from "./components/NotFound";
import HomePage from "./pages/main/HomePage";

// Admin Pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Employees from "./pages/admin/Employees";
import Roles from "./pages/admin/Roles";
import AboutUs from "./pages/main/AboutUs";
import Teams from "./pages/main/TeamsPage"; // Assuming TeamsPage is the correct import for Teams
import Blog from "./pages/main/BlogPage"; // Assuming BlogPage is the correct import for Blog 
import ContactUs from "./pages/main/ContactUs"; // Assuming ContactUs is the correct import for   Contact
import DigitalMarketingPage from "./pages/main/DigitalMarketingPage";
import SEOBlogPage from "./pages/main/BlogPage/SEOBlog";



// ✅ Protected Route Component
function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/admin" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* ✅ Public Routes (use PublicLayout) */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/seo-simplified" element={<SEOBlogPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* ✅ Admin Login (public, but uses PublicLayout) */}
          <Route >
            <Route path="/admin" element={<Login />} />
          </Route>

          {/* ✅ Admin Protected Routes (use AdminLayout) */}
          <Route
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/roles" element={<Roles />} />

            
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
