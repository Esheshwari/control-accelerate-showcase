import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Control & Accelerate Logo" className="w-10 h-10 rounded-md" />
          <div className="leading-tight">
            <span className="font-bold text-foreground text-sm md:text-base" style={{ fontFamily: "var(--font-heading)" }}>Control & Accelerate</span>
            <span className="block text-xs text-muted-foreground">India</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
          <button onClick={() => scrollTo("products")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Products</button>
          <button onClick={() => scrollTo("about")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</button>
          <a href="tel:+91 95704 05891" className="btn-industrial px-4 py-2 text-sm gap-2">
            <Phone className="w-4 h-4" /> Get a Quote
          </a>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="section-container py-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-medium py-2">Home</Link>
            <button onClick={() => scrollTo("products")} className="text-sm font-medium py-2 text-left">Products</button>
            <button onClick={() => scrollTo("about")} className="text-sm font-medium py-2 text-left">About</button>
            <button onClick={() => scrollTo("contact")} className="text-sm font-medium py-2 text-left">Contact</button>
            <a href="tel:+91 95704 05891" className="btn-industrial px-4 py-2 text-sm text-center gap-2">
              <Phone className="w-4 h-4" /> Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
