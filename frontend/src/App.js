import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { CapabilityProvider } from "@/context/CapabilityContext";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import Industries from "@/pages/Industries";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Insights from "@/pages/Insights";
import BlogPost from "@/pages/BlogPost";
import Contracts from "@/pages/Contracts";
import Login from "@/pages/Login";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/NotFound";

const Site = ({ children }) => <Layout>{children}</Layout>;

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CapabilityProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Site><Home /></Site>} />
            <Route path="/services/:slug" element={<Site><ServicePage /></Site>} />
            <Route path="/industries" element={<Site><Industries /></Site>} />
            <Route path="/contracts" element={<Site><Contracts /></Site>} />
            <Route path="/about" element={<Site><About /></Site>} />
            <Route path="/contact" element={<Site><Contact /></Site>} />
            <Route path="/insights" element={<Site><Insights /></Site>} />
            <Route path="/insights/:slug" element={<Site><BlogPost /></Site>} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Site><NotFound /></Site>} />
          </Routes>
        </BrowserRouter>
        </CapabilityProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
