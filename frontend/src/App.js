import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { CapabilityProvider } from "@/context/CapabilityContext";
import { ConsentProvider } from "@/context/ConsentContext";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
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

// Normalise legacy URLs that carry a trailing slash (e.g. old WordPress paths)
// to their canonical, slash-free equivalent.
function TrailingSlashNormalizer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname.length > 1 && pathname.endsWith("/")) {
      navigate(pathname.replace(/\/+$/, ""), { replace: true });
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
                <Route path="/" element={<Site><Home /></Site>} />

                {/* Legacy URL redirects (old WordPress / prior slugs) */}
                <Route path="/services" element={<Navigate to="/" replace />} />
                <Route path="/procurement" element={<Navigate to="/services/government-procurement" replace />} />
                <Route path="/services/government-contracting" element={<Navigate to="/services/government-procurement" replace />} />
                <Route path="/services/staffing-solutions" element={<Navigate to="/services/staffing" replace />} />
                <Route path="/services/compliance-as-a-service" element={<Navigate to="/services/cmmc-as-a-service" replace />} />
                <Route path="/cmmc-compliance" element={<Navigate to="/services/cmmc-as-a-service" replace />} />
                <Route path="/shop-all" element={<Navigate to="/" replace />} />
                <Route path="/cmas" element={<Navigate to="/contracts" replace />} />
                <Route path="/cookies-policy" element={<Navigate to="/cookie-policy" replace />} />

                <Route path="/services/:slug" element={<Site><ServicePage /></Site>} />
                <Route path="/industries" element={<Site><Industries /></Site>} />
                <Route path="/contracts" element={<Site><Contracts /></Site>} />
                <Route path="/about" element={<Site><About /></Site>} />
                <Route path="/contact" element={<Site><Contact /></Site>} />
                <Route path="/insights" element={<Site><Insights /></Site>} />
                <Route path="/insights/:slug" element={<Site><BlogPost /></Site>} />
                <Route path="/privacy-policy" element={<Site><PrivacyPolicy /></Site>} />
                <Route path="/cookie-policy" element={<Site><CookiePolicy /></Site>} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<Site><NotFound /></Site>} />
              </Routes>
            </BrowserRouter>
          </ConsentProvider>
        </CapabilityProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
