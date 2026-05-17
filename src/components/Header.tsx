import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ShoppingCart, LogOut, Globe2, Search } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { getTotalItems } = useCart();

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/60 text-white">
      <div className="section-container flex items-center justify-between h-16 md:h-20 gap-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-images.png" alt="Control & Accelerate Logo" className="w-11 h-11 rounded-md border border-white/10 bg-white/5 object-cover" />
            <div className="leading-tight">
              <span className="font-bold text-sm md:text-base" style={{ fontFamily: "var(--font-heading)" }}>Control & Accelerate</span>
              <span className="block text-[11px] text-slate-300">Industrial Solutions</span>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-100">
          <button onClick={() => scrollTo("home")} className="transition hover:text-primary">Home</button>
          <button onClick={() => scrollTo("products")} className="transition hover:text-primary">Products</button>
          <button onClick={() => scrollTo("about")} className="transition hover:text-primary">About Us</button>
          <button onClick={() => scrollTo("services")} className="transition hover:text-primary">Services</button>
          <button onClick={() => scrollTo("dealers")} className="transition hover:text-primary">Dealers</button>
          <button onClick={() => scrollTo("contact")} className="transition hover:text-primary">Contact</button>
          <Link to="/cart" className="group relative flex items-center gap-2 transition hover:text-primary">
            <ShoppingCart className="w-5 h-5" />
            Cart
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] text-primary-foreground">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-slate-200">Welcome, {user?.name}</span>
              <button onClick={logout} className="btn-industrial px-4 py-2 text-sm">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-slate-100 transition hover:text-primary">Login</Link>
              <Link to="/register" className="btn-industrial px-4 py-2 text-sm">Register</Link>
            </>
          )}
          <a href="tel:+919570405891" className="btn-industrial px-4 py-2 text-sm gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 border-t border-slate-800/70">
          <div className="section-container py-4 flex flex-col gap-3">
            <button onClick={() => scrollTo("home")} className="text-left text-sm font-medium py-2 text-white transition hover:text-primary">Home</button>
            <button onClick={() => scrollTo("products")} className="text-left text-sm font-medium py-2 text-white transition hover:text-primary">Products</button>
            <button onClick={() => scrollTo("about")} className="text-left text-sm font-medium py-2 text-white transition hover:text-primary">About Us</button>
            <button onClick={() => scrollTo("services")} className="text-left text-sm font-medium py-2 text-white transition hover:text-primary">Services</button>
            <button onClick={() => scrollTo("dealers")} className="text-left text-sm font-medium py-2 text-white transition hover:text-primary">Dealers</button>
            <button onClick={() => scrollTo("contact")} className="text-left text-sm font-medium py-2 text-white transition hover:text-primary">Contact</button>
            <Link to="/cart" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-sm font-medium py-2 text-white transition hover:text-primary">
              <ShoppingCart className="w-4 h-4" /> Cart ({getTotalItems()})
            </Link>
            {isAuthenticated ? (
              <>
                <span className="text-sm text-slate-300 py-2">Hi, {user?.name}</span>
                <button
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="text-left text-sm font-medium py-2 text-white transition hover:text-primary flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="text-sm font-medium py-2 text-white transition hover:text-primary">Login</Link>
                <Link to="/register" onClick={() => setIsOpen(false)} className="btn-industrial px-3 py-2 text-sm">Register</Link>
              </>
            )}
            <a href="tel:+919570405891" className="btn-industrial px-4 py-2 text-sm text-center gap-2">
              <Phone className="w-4 h-4" /> Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
