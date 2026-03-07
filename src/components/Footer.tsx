import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="gradient-industrial text-primary-foreground">
    <div className="section-container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Control & Accelerate India</h3>
          <p className="text-sm opacity-80 leading-relaxed">Leading manufacturer and supplier of industrial safety systems, electrical control devices, and heating solutions across India.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
            <a href="#products" className="hover:opacity-100 transition-opacity">Products</a>
            <a href="#about" className="hover:opacity-100 transition-opacity">About Us</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm opacity-80">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 12345 67890</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@controlandaccelerate.in</span>
            <span className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> Industrial Area, New Delhi, India</span>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Control & Accelerate India. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
