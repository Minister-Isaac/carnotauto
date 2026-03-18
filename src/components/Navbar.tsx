import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoPlaceholder from "@/assets/logo.png"; // Make sure you have this image in assets

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <img src={logoPlaceholder} alt="Logo" className="h-40 w-32 object-contain" />
      
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link to="/testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link>
          <Link to="/founder" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Founder</Link>
          <Link to="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Button variant="ghost" size="sm" onClick={() => { logout(); navigate("/"); }}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>Login</Button>
              <Button variant="hero" size="sm" onClick={() => navigate("/register")}>Get Started</Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <span className="text-xl font-bold">×</span> : <span className="text-xl font-bold">☰</span>}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-card p-4 space-y-2 animate-fade-in">
          <Link to="/" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/services" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link to="/about" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>About</Link>
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