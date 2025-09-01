import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy, useContext } from "react";
import { AuthProvider } from "./context/AuthContext";
import { AuthContext } from "./context/AuthContext";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

// Utils
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import ScrollButtons from "./components/ScrollButtons";
import ScrollProgressBar from "./components/ScrollProgressBar";
import DigitalPRPage from "./pages/main/DigitalPRPage";

// ✅ Lazy-loaded Public Pages
const NotFound = lazy(() => import("./components/NotFound"));
const ComingSoon = lazy(() => import("./components/ComingSoon"));
const HomePage = lazy(() => import("./pages/main/HomePage"));
const AboutUs = lazy(() => import("./pages/main/AboutUs"));
const Teams = lazy(() => import("./pages/main/TeamsPage"));
const Blog = lazy(() => import("./pages/main/BlogPage"));
const ContactUs = lazy(() => import("./pages/main/ContactUs"));
const DigitalMarketingPage = lazy(() =>
  import("./pages/main/DigitalMarketingPage")
);
const ContentServicePages = lazy(() => import("./pages/main/ContentServicePages"));
const SEOBlogPage = lazy(() => import("./pages/main/BlogPage/SEOBlog"));
const AwardsPage = lazy(() => import("./pages/main/AwardsPage"));
const CaseStudiesPage = lazy(() => import("./pages/main/CaseStudiePage"));

// ✅ Lazy-loaded Admin Pages
const Login = lazy(() => import("./pages/admin/Login"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Employees = lazy(() => import("./pages/admin/Employees"));
const Roles = lazy(() => import("./pages/admin/Roles"));

// ✅ Protected Route
function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/admin" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Global Helpers */}
        <ScrollProgressBar />
        <ScrollToTop />
        <Loader />
        <ScrollButtons />

        {/* ✅ Suspense wrapper for lazy loading */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              Loading...
            </div>
          }
        >
          <Routes>
            {/* ✅ Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/awards" element={<AwardsPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route
                path="/digital-marketing"
                element={<DigitalMarketingPage />}
              />
              <Route path="/content-as-a-service" element={<ContentServicePages />} />
              <Route path="/digital-pr" element={<DigitalPRPage />} />
              <Route path="/seo-simplified" element={<SEOBlogPage />} />
              <Route path="/comingsoon" element={<ComingSoon />} />

              <Route path="*" element={<NotFound />} />
            </Route>

            {/* ✅ Admin Login */}
            <Route path="/admin" element={<Login />} />

            {/* ✅ Protected Admin Routes */}
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
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
