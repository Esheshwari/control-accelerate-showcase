import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DealersSection from "@/components/DealersSection";
import Footer from "@/components/Footer";
import WhyChooseSection from "@/components/WhyChooseSection";

const Index = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.substring(1));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <ProductGrid />
      <AboutSection />
      <WhyChooseSection />
      <DealersSection />
      <ContactSection />
      <Footer />
      <a
        href="https://wa.me/919570405891"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(199,44,44,0.18)] transition hover:bg-red-800"
        aria-label="Chat on WhatsApp"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">WA</span>
        Chat on WhatsApp
      </a>
    </>
  );
};

export default Index;
