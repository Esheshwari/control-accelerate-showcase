import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-slate-950 text-slate-300">
    <div className="section-container py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>Control & Accelerate India</h3>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            Leading manufacturer and supplier of industrial safety systems, electrical control devices, and heating solutions across India.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>Quick Links</h4>
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <Link to="/" className="transition hover:text-primary">Home</Link>
            <a href="#products" className="transition hover:text-primary">Products</a>
            <a href="#about" className="transition hover:text-primary">About Us</a>
            <a href="#contact" className="transition hover:text-primary">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>Contact Info</h4>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 text-primary" />
              <span>+91 95704 05891 / 99313 78518 / 89879 16181</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 text-primary" />
              <span>info@controlandaccelerate.com</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-primary" />
              <span>515, Industrial Area, Bahuarwa, Near Ashoka Pillar, Lauria, West Champaran, Bihar - India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Control & Accelerate India. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
