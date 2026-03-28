import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const serviceLinks = [
  { label: "ECU Repair", to: "/services/ecu-repair" },
  { label: "EIS/EZS Repair", to: "/services/eis-repair" },
  { label: "ESL/ELV Repair", to: "/services/esl-repair" },
  { label: "Key Repair", to: "/services/key-repair" },
  { label: "7G-Tronic", to: "/services/7g-tronic" },
  { label: "ISM Module", to: "/services/ism-repair" },
  { label: "Steering Angle Sensor", to: "/services/steering-angle-sensor" },
  { label: "Wiring Harness", to: "/services/wiring-harness" },
  { label: "FBS-4 Solutions", to: "/services/fbs4-solutions" },
  { label: "FBS-3 Solutions", to: "/services/fbs3-solutions" },
  { label: "All Services", to: "/services" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

const navLinks2 = [
  { label: "Spare Parts", to: "/spare-parts" },
  { label: "MB-Keys", to: "/mb-keys" },
  { label: "Media Center", to: "/media-center" },
];

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors";

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      {/* Top bar */}
      <div className="border-b bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-1.5">
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">{l.label}</Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">Dashboard</Link>
                <button onClick={() => { logout(); navigate("/"); }} className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">Login</Link>
                <Link to="/register" className="text-xs text-accent hover:text-accent/80 font-semibold transition-colors">Get Started</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <img src={logo} alt="KingsCarNotAutomobile" className="h-8 w-8 object-contain" />
          <span className="hidden sm:inline">KingsCarNotAutomobile</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <Link to="/" className={linkClass}>Home</Link>

          <DropdownMenu>
            <DropdownMenuTrigger className={`${linkClass} inline-flex items-center gap-1`}>
              Service <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {serviceLinks.map((s) => (
                <DropdownMenuItem key={s.to} onClick={() => navigate(s.to)} className="cursor-pointer">
                  {s.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks2.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass}>{l.label}</Link>
          ))}

          <Link to="/testimonials" className={linkClass}>Testimonials</Link>
          <Link to="/founder" className={linkClass}>Founder</Link>
          <Link to="/projects" className={linkClass}>Projects</Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-card p-4 space-y-2 animate-fade-in max-h-[80vh] overflow-y-auto">
          <Link to="/" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/services" className="block py-2 text-sm font-semibold" onClick={() => setMobileOpen(false)}>Services</Link>
          {serviceLinks.filter(s => s.to !== "/services").map((s) => (
            <Link key={s.to} to={s.to} className="block py-1.5 pl-4 text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>{s.label}</Link>
          ))}
          <Link to="/about" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/news" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>News</Link>
          <Link to="/contact" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link to="/faq" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>FAQ</Link>
          <Link to="/spare-parts" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>Spare Parts</Link>
          <Link to="/mb-keys" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>MB-Keys</Link>
          <Link to="/media-center" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>Media Center</Link>
          <Link to="/testimonials" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>Testimonials</Link>
          <Link to="/founder" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>Founder</Link>
          <Link to="/projects" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>Projects</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>Dashboard</Link>
              <Button variant="ghost" size="sm" className="w-full" onClick={() => { logout(); navigate("/"); setMobileOpen(false); }}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" className="w-full" onClick={() => { navigate("/login"); setMobileOpen(false); }}>Login</Button>
              <Button variant="hero" size="sm" className="w-full" onClick={() => { navigate("/register"); setMobileOpen(false); }}>Get Started</Button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
