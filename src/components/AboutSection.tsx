import { Shield, Factory } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding bg-slate-950 text-white">
    <div className="section-container">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300" style={{ fontFamily: "var(--font-heading)" }}>About Us</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
            Industrial safety systems engineered to last
          </h2>
          <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Control & Accelerate India delivers rugged electrical and mechanical products for the most demanding industrial environments. Our focus is reliability, compliance and support for long-term plant uptime.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="rounded-3xl bg-red-950/70 p-3 text-red-300">
                <Factory className="h-6 w-6" />
              </div>
              <div>
                <p className="text-base font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>18+ years of industrial expertise</p>
                <p className="mt-2 text-sm text-slate-300">From engineering to delivery, we partner with OEMs and plant teams across India.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-red-300">Quality</p>
                <p className="mt-3 text-base text-slate-300">Products manufactured under strict inspection and test procedures.</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-red-300">Support</p>
                <p className="mt-3 text-base text-slate-300">Engineering guidance, installation support and after-sales service.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/60">
          <div className="flex items-center gap-4">
            <div className="rounded-3xl bg-red-950/70 p-3 text-red-300">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-300">Industry Trust</p>
              <h3 className="mt-2 text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>Trusted by heavy industry across India</h3>
            </div>
          </div>
          <p className="mt-6 text-base leading-7 text-slate-300">
            We supply products for conveyors, cranes, furnaces, motors and critical safety systems. Every item is selected for durability, accuracy and dependable field performance.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
