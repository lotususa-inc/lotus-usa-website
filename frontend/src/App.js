import "@/App.css";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { AuthProvider } from "@/context/AuthContext";
import { CapabilityProvider } from "@/context/CapabilityContext";
import { ConsentProvider } from "@/context/ConsentContext";

import { Layout } from "@/components/Layout";

import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";

import GovernmentProcurement from "@/pages/GovernmentProcurement";
import ProfessionalServices from "@/pages/ProfessionalServices";
import Staffing from "@/pages/Staffing";
import Aviation from "@/pages/Aviation";

import Industries from "@/pages/Industries";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Insights from "@/pages/Insights";
import BlogPost from "@/pages/BlogPost";
import Contracts from "@/pages/Contracts";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiePolicy from "@/pages/CookiePolicy";
import Login from "@/pages/Login";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/NotFound";

const Site = ({ children }) => <Layout>{children}</Layout>;

function TrailingSlashNormalizer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.length > 1 && pathname.endsWith("/")) {
      navigate(pathname.replace(/\/+$/, ""), {
        replace: true,
      });
    }
  }, [pathname, navigate]);

  return null;
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CapabilityProvider>
          <ConsentProvider>
            <BrowserRouter>
              <TrailingSlashNormalizer />

              <Routes>

                {/* =====================================================
                    HOME
                ===================================================== */}

                <Route
                  path="/"
                  element={
                    <Site>
                      <Home />
                    </Site>
                  }
                />

                {/* =====================================================
                    DEDICATED GOVERNMENT PROCUREMENT
                ===================================================== */}

                <Route
                  path="/services/government-procurement"
                  element={
                    <Site>
                      <GovernmentProcurement />
                    </Site>
                  }
                />

                {/* =====================================================
                    DEDICATED PROFESSIONAL SERVICES
                ===================================================== */}

                <Route
                  path="/services/professional-services"
                  element={
                    <Site>
                      <ProfessionalServices />
                    </Site>
                  }
                />

                {/* =====================================================
                    DEDICATED STAFFING
                ===================================================== */}

                <Route
                  path="/services/staffing"
                  element={
                    <Site>
                      <Staffing />
                    </Site>
                  }
                />

                {/* =====================================================
                    GENERIC SERVICE SLUG FALLBACK
                    Allows other existing service slugs to continue working
                ===================================================== */}

                <Route
                  path="/services/:slug"
                  element={
                    <Site>
                      <ServicePage />
                    </Site>
                  }
                />

                {/* =====================================================
                    AVIATION
                ===================================================== */}

                <Route
                  path="/aviation"
                  element={
                    <Site>
                      <Aviation />
                    </Site>
                  }
                />

                {/* =====================================================
                    LEGACY REDIRECTS
                ===================================================== */}

                <Route
                  path="/services"
                  element={
                    <Navigate
                      to="/"
                      replace
                    />
                  }
                />

                <Route
                  path="/procurement"
                  element={
                    <Navigate
                      to="/services/government-procurement"
                      replace
                    />
                  }
                />

                <Route
                  path="/services/government-contracting"
                  element={
                    <Navigate
                      to="/services/government-procurement"
                      replace
                    />
                  }
                />

                <Route
                  path="/services/staffing-solutions"
                  element={
                    <Navigate
                      to="/services/staffing"
                      replace
                    />
                  }
                />

                <Route
                  path="/services/compliance-as-a-service"
                  element={
                    <Navigate
                      to="/services/cmmc-as-a-service"
                      replace
                    />
                  }
                />

                <Route
                  path="/cmmc-compliance"
                  element={
                    <Navigate
                      to="/services/cmmc-as-a-service"
                      replace
                    />
                  }
                />

                <Route
                  path="/industries"
                  element={
                    <Navigate
                      to="/"
                      replace
                    />
                  }
                />

                <Route
                  path="/services/enterprise-solutions"
                  element={
                    <Navigate
                      to="/"
                      replace
                    />
                  }
                />

                <Route
                  path="/shop-all"
                  element={
                    <Navigate
                      to="/"
                      replace
                    />
                  }
                />

                <Route
                  path="/cmas"
                  element={
                    <Navigate
                      to="/contracts"
                      replace
                    />
                  }
                />

                {/* =====================================================
                    CONTRACTS
                ===================================================== */}

                <Route
                  path="/contracts"
                  element={
                    <Site>
                      <Contracts />
                    </Site>
                  }
                />

                {/* =====================================================
                    ABOUT
                ===================================================== */}

                <Route
                  path="/about"
                  element={
                    <Site>
                      <About />
                    </Site>
                  }
                />

                {/* =====================================================
                    CONTACT
                ===================================================== */}

                <Route
                  path="/contact"
                  element={
                    <Site>
                      <Contact />
                    </Site>
                  }
                />

                {/* =====================================================
                    INSIGHTS
                ===================================================== */}

                <Route
                  path="/insights"
                  element={
                    <Site>
                      <Insights />
                    </Site>
                  }
                />

                <Route
                  path="/insights/:slug"
                  element={
                    <Site>
                      <BlogPost />
                    </Site>
                  }
                />

                {/* =====================================================
                    PRIVACY
                ===================================================== */}

                <Route
                  path="/privacy-policy"
                  element={
                    <Site>
                      <PrivacyPolicy />
                    </Site>
                  }
                />

                {/* =====================================================
                    COOKIE POLICY
                ===================================================== */}

                <Route
                  path="/cookie-policy"
                  element={
                    <Site>
                      <CookiePolicy />
                    </Site>
                  }
                />

                <Route
                  path="/cookies-policy"
                  element={
                    <Site>
                      <CookiePolicy />
                    </Site>
                  }
                />

                {/* =====================================================
                    LOGIN
                ===================================================== */}

                <Route
                  path="/login"
                  element={<Login />}
                />

                {/* =====================================================
                    ADMIN
                ===================================================== */}

                <Route
                  path="/admin"
                  element={<Admin />}
                />

                {/* =====================================================
                    404
                ===================================================== */}

                <Route
                  path="*"
                  element={
                    <Site>
                      <NotFound />
                    </Site>
                  }
                />

              </Routes>
            </BrowserRouter>
          </ConsentProvider>
        </CapabilityProvider>
      </AuthProvider>
    </div>
  );
}

export default App;