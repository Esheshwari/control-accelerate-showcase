import { ArrowRight, ArrowDown, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg2.jpg";
import heroBg3 from "@/assets/hero-bg3.jpg";

const heroActions = [
  { label: "Online Support", icon: Sparkles },
  { label: "WhatsApp Assistance", icon: ArrowRight },
  { label: "Quick Response", icon: Clock3 },
  { label: "Email Enquiry", icon: ShieldCheck },
];

const heroSlides = [
  {
    title: "Most Trusted Industrial Partner",
    description: "Proven performance across mining, material handling and manufacturing sectors.",
    image: heroBg3,
  },
  {
    title: "Precision Quality Assurance",
    description: "Strict inspection and testing ensure every product meets our high-reliability standards.",
    image: heroBg,
  },
  {
    title: "Rapid Delivery & Support",
    description: "Nationwide logistics and technical service to keep your operations moving.",
    image: heroBg2,
  },
];

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section relative overflow-hidden pt-[80px]">
      <div className="absolute inset-0 bg-[#0b0909]/85" />
      <div className="absolute inset-0">
        <img src={heroBg} alt="Industrial background" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      </div>

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/10 bg-[#7a1b1b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#ffb2b2] shadow-sm shadow-[#ffb2b2]/20">
              Industrial Braking & Safety
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
              Premium Industrial Control & Safety Solutions
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
              High-performance industrial products engineered for reliability, safety and long-term operation in demanding environments.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={scrollToProducts} className="btn-industrial px-6 py-3 text-sm font-semibold gap-2">
                Explore Products <ArrowDown className="w-4 h-4" />
              </button>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/15">
                Request a Quote
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroActions.map((action) => {
                const Icon = action.icon;
                return (
                  <div key={action.label} className="hero-action-card">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{action.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/40">
              <img src={heroBg3} alt="Industrial machinery" className="h-full w-full object-cover" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroSlides.map((slide) => (
                <div key={slide.title} className="card-industrial overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-0 text-white">
                  <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${slide.image})` }} />
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>{slide.title}</h3>
                    <p className="mt-3 text-sm text-slate-300">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
