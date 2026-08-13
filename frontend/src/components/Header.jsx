import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { IMG } from "@/data/site";
import { Icon, PrimaryButton } from "@/components/common";

const PHONE = "707-765-3969";

const SERVICE_ITEMS = [
  {
    label: "Professional Services",
    to: "/services/professional-services",
    icon: "Briefcase",
    desc: "Professional services and technology support for government and enterprise organizations.",
  },
  {
    label: "Staffing",
    to: "/services/staffing",
    icon: "Users",
    desc: "IT and healthcare staffing solutions supporting government and commercial requirements.",
  },
  {
    label: "CMMC as a Service",
    to: "/services/cmmc-as-a-service",
    icon: "ShieldCheck",
    desc: "CMMC readiness and cybersecurity support for organizations serving the defense supply chain.",
  },
  {
    label: "Digital Solutions",
    to: "/services/digital-solutions",
    icon: "Monitor",
    desc: "Web, mobile, software, and digital technology solutions.",
  },
  {
    label: "Aviation",
    to: "/aviation",
    icon: "Plane",
    desc: "Aviation infrastructure, airport lighting, runway systems, and related solutions.",
  },
];

const NAV_ITEMS = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Procurement",
    to: "/procurement",
  },
  {
    label: "Contracts",
    to: "/contracts",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export function Header() {
  const [openServices, setOpenServices] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const loc = useLocation();

  useEffect(() => {
    setMobile(false);
    setOpenServices(false);
    setMobileServices(false);
  }, [loc.pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenServices(false);
        setMobile(false);
        setMobileServices(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white shadow-sm"
      data-testid="site-header"
    >
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center"
          data-testid="logo-link"
          aria-label="Lotus USA Inc. Home"
        >
          <img
            src={IMG.logo}
            alt="Lotus USA Inc."
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-2 lg:flex"
          data-testid="desktop-nav"
        >
          {NAV_ITEMS.slice(0, 2).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:text-royal ${
                loc.pathname === item.to
                  ? "text-royal"
                  : "text-navy/85"
              }`}
              data-testid={`nav-${item.label
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              {item.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            <button
              type="button"
              onClick={() => setOpenServices((value) => !value)}
              className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:text-royal ${
                loc.pathname.startsWith("/services") ||
                loc.pathname === "/aviation"
                  ? "text-royal"
                  : "text-navy/85"
              }`}
              data-testid="nav-services"
              aria-expanded={openServices}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  openServices ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openServices && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-200/70 bg-white p-3 shadow-[0_20px_60px_rgba(7,27,51,0.14)]">

                    {SERVICE_ITEMS.map((service) => (
                      <Link
                        key={service.to}
                        to={service.to}
                        className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-[#1769E0]/5"
                        data-testid={`mega-${service.to
                          .split("/")
                          .pop()}`}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#071B33] text-white transition-colors group-hover:bg-[#1769E0]">
                          <Icon
                            name={service.icon}
                            className="h-5 w-5"
                          />
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-[#071B33]">
                            {service.label}
                          </div>

                          <div className="mt-1 text-xs leading-snug text-[#52667A]">
                            {service.desc}
                          </div>
                        </div>
                      </Link>
                    ))}

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contracts */}
          <Link
            to="/contracts"
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:text-royal ${
              loc.pathname === "/contracts"
                ? "text-royal"
                : "text-navy/85"
            }`}
            data-testid="nav-contracts"
          >
            Contracts
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:text-royal ${
              loc.pathname === "/contact"
                ? "text-royal"
                : "text-navy/85"
            }`}
            data-testid="nav-contact"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Contact + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 text-sm font-semibold text-steel transition-colors hover:text-navy"
            data-testid="header-phone"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>

          <PrimaryButton
            to="/contact"
            className="px-5 py-2.5"
            data-testid="header-cta"
          >
            Request a Quote
          </PrimaryButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-navy lg:hidden"
          onClick={() => setMobile(true)}
          data-testid="mobile-menu-open"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
              onClick={() => setMobile(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                ease: [0.22, 1, 0.36, 1],
                duration: 0.35,
              }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-white p-6"
              data-testid="mobile-nav"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setMobile(false)}
                >
                  <img
                    src={IMG.logo}
                    alt="Lotus USA Inc."
                    className="h-9 w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setMobile(false)}
                  data-testid="mobile-menu-close"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-navy" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="mt-8 flex flex-col gap-1">

                <Link
                  to="/"
                  onClick={() => setMobile(false)}
                  className="rounded-lg px-3 py-3 text-lg font-semibold text-navy"
                >
                  Home
                </Link>

                <Link
                  to="/procurement"
                  onClick={() => setMobile(false)}
                  className="rounded-lg px-3 py-3 text-lg font-semibold text-navy"
                >
                  Procurement
                </Link>

                {/* Mobile Services */}
                <div className="rounded-lg">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileServices((value) => !value)
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-lg font-semibold text-navy"
                    aria-expanded={mobileServices}
                  >
                    <span>Services</span>

                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        mobileServices ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServices && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-3 flex flex-col border-l border-slate-200 pl-3">
                          {SERVICE_ITEMS.map((service) => (
                            <Link
                              key={service.to}
                              to={service.to}
                              onClick={() => setMobile(false)}
                              className="rounded-lg px-3 py-2.5 text-base font-medium text-navy/80 hover:bg-slate-50"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/contracts"
                  onClick={() => setMobile(false)}
                  className="rounded-lg px-3 py-3 text-lg font-semibold text-navy"
                >
                  Contracts
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobile(false)}
                  className="rounded-lg px-3 py-3 text-lg font-semibold text-navy"
                >
                  Contact
                </Link>

              </nav>

              {/* Mobile Phone */}
              <a
                href={`tel:${PHONE}`}
                className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-navy"
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>

              {/* Mobile CTA */}
              <PrimaryButton
                to="/contact"
                className="mt-3 w-full"
                onClick={() => setMobile(false)}
              >
                Request a Quote
              </PrimaryButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
