import { ShieldCheck, Bolt, Wrench } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Proven Safety", description: "Certified components and rugged controls for industrial risk reduction." },
  { icon: Bolt, title: "Reliable Performance", description: "Designed for continuous duty, harsh sites and demanding process environments." },
  { icon: Wrench, title: "Dedicated Support", description: "Technical guidance, fast quotations and local service wherever you operate." },
];

const WhyChooseSection = () => (
  <section id="services" className="section-padding bg-slate-950 text-white">
    <div className="section-container">
      <div className="text-center mx-auto max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300" style={{ fontFamily: "var(--font-heading)" }}>Why Choose Us</span>
        <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
          Dependable industrial expertise at every stage
        </h2>
        <p className="mt-5 text-base text-slate-300 sm:text-lg">
          Minimal noise, maximum performance — our products and service are tailored to heavy industry demands.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div key={reason.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-slate-950/40">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-red-950/70 text-red-300 mb-6">
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
