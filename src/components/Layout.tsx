import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";

const serviceLinks = [
  { label: "AI Lead Reactivation", path: "/services/lead-reactivation" },
  { label: "AI Cold Calling", path: "/services/cold-calling" },
  { label: "AI Receptionist", path: "/services/receptionist" },
  { label: "AI Appointment Setters", path: "/services/appointment-setters" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/solutions", hasDropdown: true },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoIcon} alt="Appoint Funnels" className="h-8 w-8" />
            <span className="text-lg font-display font-bold text-gradient">Appoint Funnels</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.path} className="relative group">
                  <button className={`inline-flex items-center gap-1 text-[15px] font-semibold px-4 py-2 transition-colors hover:text-primary ${
                     location.pathname.startsWith("/services") || location.pathname === "/solutions" ? "text-foreground" : "text-muted-foreground"
                   }`}>
                    {link.label} <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-56 rounded-lg border border-border bg-background shadow-lg py-2">
                      {serviceLinks.map((s) => (
                        <Link key={s.path} to={s.path} className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[15px] font-semibold px-4 py-2 transition-colors hover:text-primary ${
                     location.pathname === link.path ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-background"
            >
              <nav className="container flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium transition-colors ${
                      location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground text-center"
                >
                  Book a Call
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="flex-1 pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2">
                <img src={logoIcon} alt="Appoint Funnels" className="h-7 w-7" />
                <span className="text-lg font-display font-bold text-gradient">Appoint Funnels</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Scale your business with AI-driven funnels that automate and optimize customer acquisition.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/services/lead-reactivation" className="hover:text-primary transition-colors">AI Lead Reactivation</Link></li>
                <li><Link to="/services/cold-calling" className="hover:text-primary transition-colors">AI Cold Calling</Link></li>
                <li><Link to="/services/receptionist" className="hover:text-primary transition-colors">AI Receptionist</Link></li>
                <li><Link to="/services/appointment-setters" className="hover:text-primary transition-colors">AI Appointment Setters</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@appointfunnels.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Appoint Funnels. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
