import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg2.jpg";
import heroBg3 from "@/assets/hero-bg3.jpg";

const heroSlides = [
  {
    title: "Engineered for Heavy Industry",
    description: "High-reliability safety, control and braking systems for mining, material handling and power plants.",
    image: heroBg3,
  },
  {
    title: "Built to Perform in Tough Conditions",
    description: "Rugged products designed for continuous operation, severe duty and demanding factory environments.",
    image: heroBg,
  },
  {
    title: "Precision Safety, Faster Delivery",
    description: "Customised industrial solutions backed by rapid quotes, technical support and dependable logistics.",
    image: heroBg2,
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = heroSlides[activeIndex];

  return (
    <section id="home" className="hero-section relative overflow-hidden pt-[80px]">
      <div className="absolute inset-0 bg-slate-950/85" />
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/70 to-slate-950" />
      </div>

      <div className="section-container relative z-10 py-28 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/10 bg-red-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-300 shadow-sm shadow-black/30">
            Industrial Partners
          </span>
          <h1 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
            Control & Protect your operations with premium industrial equipment
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Trusted by manufacturing, mining and energy operators for robust controls, safety systems and engineered support across India.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={scrollToProducts} className="btn-industrial px-6 py-3 text-sm font-semibold gap-2">
              Explore Products <ArrowDown className="w-4 h-4" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-500/80 hover:bg-white/10"
            >
              Request a Quote
            </a>
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/70">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-red-300">Featured message</p>
                <h2 className="mt-2 text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {slide.title}
                </h2>
              </div>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">{slide.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
