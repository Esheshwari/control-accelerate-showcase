import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg2.jpg";
import heroBg3 from "@/assets/hero-bg3.jpg";

const heroSlides = [
  {
    title: "Engineered for the Toughest Sites",
    subtitle: "Heavy-duty safety and control equipment for mining, steel and material handling.",
    description: "Every component is selected for reliability under heat, dust and continuous operation.",
    image: heroBg3,
    badge: "Rugged Reliability",
  },
  {
    title: "Precision Control for Critical Processes",
    subtitle: "Switches, brakes and sensors tuned for conveyor, crane and furnace applications.",
    description: "Maintain uptime with products that deliver accurate performance when failure is not an option.",
    image: heroBg,
    badge: "Precision Performance",
  },
  {
    title: "Fast Quotes and On-Ground Support",
    subtitle: "Project-ready solutions backed by technical expertise and national logistics.",
    description: "Get the right product, the right documentation and local support for urgent industrial orders.",
    image: heroBg2,
    badge: "Project Ready",
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
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/75 to-black" />
      </div>

      <div className="section-container relative z-10 py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-red-600/30 bg-red-950/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-red-300 shadow-black/20">
            Industrial Control & Safety
          </span>
          <h1 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
            {slide.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200 sm:text-xl">
            {slide.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={scrollToProducts} className="btn-industrial px-6 py-3 text-sm font-semibold gap-2">
              Explore Products <ArrowDown className="w-4 h-4" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-red-600/50 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-500/90 hover:bg-white/10"
            >
              Request a Quote
            </a>
          </div>

          <div className="mt-14 rounded-[2rem] border border-red-600/20 bg-slate-950/85 p-8 shadow-2xl shadow-black/60">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-red-300">{slide.badge}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {slide.description}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 w-3 rounded-full transition ${index === activeIndex ? "bg-red-500" : "bg-white/20 hover:bg-white/40"}`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
