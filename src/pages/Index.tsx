import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
