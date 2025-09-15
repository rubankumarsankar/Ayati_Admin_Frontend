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
import WebAndECommerce from "./pages/main/Web&E-Commerce";
import ContactUs from "./pages/main/ContactUs";
import JeepCaseStudy from "./pages/main/Case Study/JeepCaseStudy";

// ✅ Lazy-loaded Public Pages
const NotFound = lazy(() => import("./components/NotFound"));
const ComingSoon = lazy(() => import("./components/ComingSoon"));
const HomePage = lazy(() => import("./pages/main/HomePage"));
const AboutUs = lazy(() => import("./pages/main/AboutUs"));
const Teams = lazy(() => import("./pages/main/TeamsPage"));
const Blog = lazy(() => import("./pages/main/BlogPage"));
const CareersPage = lazy(() => import("./pages/main/CareersPage"));

const DigitalMarketingPage = lazy(() =>
  import("./pages/main/DigitalMarketingPage")
);
const ContentServicePages = lazy(() =>
  import("./pages/main/ContentServicePages")
);
const SeoServicesPage = lazy(() => import("./pages/main/Services-SeoPage"));
const SocialMediaServicesPage = lazy(() =>
  import("./pages/main/Services-SocialMediaPage")
);
const EmailServicesPage = lazy(() =>
  import("./pages/main/Services-EmailMarketingPage")
);
const InstagramServicesPage = lazy(() =>
  import("./pages/main/Services-InstagramMarketingPage")
);
const AffiliateMarketingServicesPage = lazy(() =>
  import("./pages/main/Services-AffiliateMarketingPage")
);
const ProgrammaticServicesPage = lazy(() =>
  import("./pages/main/Services-ProgrammaticPage")
);
const VideoMarketingServicesPage = lazy(() =>
  import("./pages/main/Services-VideoMarketingPage")
);
const BrandingServicesPage = lazy(() =>
  import("./pages/main/Services-BrandingPage")
);
const VideoCreationServicesPage = lazy(() =>
  import("./pages/main/Services-VideoCreationPage")
);
const MultilingualServicesPage = lazy(() =>
  import("./pages/main/Services-MultilingualPage")
);
const DigitalPRServicesPage = lazy(() =>
  import("./pages/main/Services-DigitalPRPage")
);
const InfluencerServicesPage = lazy(() =>
  import("./pages/main/Services-InfluencerPage")
);
const OnlineMarketingServicesPage = lazy(() =>
  import("./pages/main/Services-OnlineMarketingPage")
);
const UXUIDesignServicesPage = lazy(() =>
  import("./pages/main/Services-UXUIDesignPage")
);
const WebDevelopmentServicesPage = lazy(() =>
  import("./pages/main/Services-WebDevelopmentPage")
);
const WebMaintenanceServicesPage = lazy(() =>
  import("./pages/main/Services-WebMaintenancePage")
);
const ShopifyServicesPage = lazy(() =>
  import("./pages/main/Services-ShopifyPage")
);
const ECommerceServicesPage = lazy(() =>
  import("./pages/main/Services-E-commercePage")
);


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
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* ✅ Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/team" element={<Teams />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/awards" element={<AwardsPage />} />
              <Route path="case-study" element={<CaseStudiesPage />} />
              <Route path="case-study/jeep-case-study" element={<JeepCaseStudy />} />
              <Route
                path="/digital-marketing-services"
                element={<DigitalMarketingPage />}
              />
              <Route
                path="/content-as-a-service"
                element={<ContentServicePages />}
              />
              <Route path="/digital-pr" element={<DigitalPRPage />} />
              <Route path="/web-ecommerce" element={<WebAndECommerce />} />
              <Route path="/seo-simplified" element={<SEOBlogPage />} />

              <Route
                path="/digital-marketing-services/seo"
                element={<SeoServicesPage />}
              />
              <Route
                path="/digital-marketing-services/social-media-marketing"
                element={<SocialMediaServicesPage />}
              />
              <Route
                path="/digital-marketing-services/email-marketing"
                element={<EmailServicesPage />}
              />
              <Route
                path="/digital-marketing-services/instagram-marketing"
                element={<InstagramServicesPage />}
              />
              <Route
                path="/digital-marketing-services/affiliate-marketing"
                element={<AffiliateMarketingServicesPage />}
              />
              <Route
                path="/digital-marketing-services/programmatic-marketing"
                element={<ProgrammaticServicesPage />}
              />
              <Route
                path="/digital-marketing-services/video-marketing"
                element={<VideoMarketingServicesPage />}
              />
              <Route
                path="/content-as-a-service/branding-service"
                element={<BrandingServicesPage />}
              />
              <Route
                path="/content-as-a-service/video-creation"
                element={<VideoCreationServicesPage />}
              />
              <Route
                path="/content-as-a-service/multilingual-marketing"
                element={<MultilingualServicesPage />}
              />
              <Route
                path="/digital-pr/digital-pr-services"
                element={<DigitalPRServicesPage />}
              />
              <Route
                path="/digital-pr/influencer-marketing"
                element={<InfluencerServicesPage />}
              />
              <Route
                path="/digital-pr/online-reputation-media-outreach"
                element={<OnlineMarketingServicesPage />}
              />
              <Route
                path="/web-ecommerce/ux-ui-design"
                element={<UXUIDesignServicesPage />}
              />
              <Route
                path="/web-ecommerce/web-development"
                element={<WebDevelopmentServicesPage />}
              />
              <Route
                path="/web-ecommerce/web-maintenance"
                element={<WebMaintenanceServicesPage />}
              />
              <Route
                path="/web-ecommerce/shopify-development"
                element={<ShopifyServicesPage />}
              />
               <Route
                path="/web-ecommerce/ecommerce-solutions"
                element={<ECommerceServicesPage />}
              />
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
