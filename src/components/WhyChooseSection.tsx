import { ShieldCheck, Bolt, Wrench, TrendingUp } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Trusted Quality", description: "Rigorous inspection and proven performance for every industrial application." },
  { icon: Bolt, title: "Engineered Reliability", description: "Built to withstand harsh operations, temperature extremes and continuous duty." },
  { icon: Wrench, title: "After Sales Support", description: "Dedicated maintenance and service guidance for long-term uptime." },
  { icon: TrendingUp, title: "Fast Turnaround", description: "Quick response, rapid quotes and efficient supply across India." },
];

const WhyChooseSection = () => (
  <section id="services" className="section-padding bg-slate-950 text-white">
    <div className="section-container">
      <div className="text-center mx-auto max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-primary" style={{ fontFamily: "var(--font-heading)" }}>Why Choose Us</span>
        <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
          Complete Service, Support and Industrial Expertise
        </h2>
        <p className="mt-5 text-base text-slate-300 sm:text-lg">
          We deliver premium products, technical service and customer experience designed for manufacturing, mining, material handling and energy sectors.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div key={reason.title} className="card-industrial p-8 border-white/10 bg-white/5 hover:border-primary/50">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary mb-6">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>{reason.title}</h3>
              <p className="text-slate-300">{reason.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
