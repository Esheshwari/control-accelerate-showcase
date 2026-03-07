import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center" style={{ marginTop: "80px" }}>
      <div className="absolute inset-0">
        <img src={heroBg} alt="Industrial facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </div>
      <div className="relative section-container py-20">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
            style={{ background: "hsl(var(--teal-glow) / 0.2)", color: "hsl(var(--teal-glow))", fontFamily: "var(--font-heading)" }}>
            Trusted Since 2005
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "white" }}>
            Industrial Safety Systems & Electrical Control Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
            Manufacturer & supplier of conveyor safety switches, temperature controllers, industrial heaters, and automation systems for industries across India.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={scrollToProducts} className="btn-industrial px-8 py-3 text-base gap-2">
              Explore Products <ArrowDown className="w-5 h-5" />
            </button>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-base border-2 transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "white", fontFamily: "var(--font-heading)" }}>
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
