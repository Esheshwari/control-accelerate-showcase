import { ArrowRight, ArrowDown, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg3 from "@/assets/hero-bg3.jpg";

const heroActions = [
  { label: "Online", icon: Sparkles },
  { label: "Whatsapp", icon: ArrowRight },
  { label: "Message", icon: Clock3 },
  { label: "Email", icon: ShieldCheck },
];

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section relative overflow-hidden pt-[80px]">
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <img src={heroBg} alt="Industrial background" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      </div>

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary shadow-sm shadow-primary/20">
              Industrial Braking & Safety
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
              Premium Quality Products
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-200 sm:text-lg">
              Strict quality control and high performance industrial products that keep your operations safe, stable, and productive. Our solutions are engineered for durability and designed to perform in demanding environments.
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

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/40">
              <img src={heroBg3} alt="Industrial machinery" className="h-full w-full object-cover" />
            </div>
            <div className="hero-feature-card">
              <span className="text-xs uppercase tracking-[0.24em] text-slate-300">Trusted across industries</span>
              <h2 className="mt-3 text-2xl font-semibold text-white">Built for durability, verified for performance.</h2>
              <p className="mt-3 text-sm text-slate-300">Every product is designed to deliver reliable operation in harsh industrial environments while maintaining strict quality standards.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="feature-pill">24/7 Support</span>
                <span className="feature-pill">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
