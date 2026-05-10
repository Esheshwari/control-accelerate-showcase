import { Shield, Award, Users, Factory } from "lucide-react";

const stats = [
  { icon: Factory, number: "18+", label: "Years Experience" },
  { icon: Users, number: "2000+", label: "Happy Clients" },
  { icon: Shield, number: "16+", label: "Product Categories" },
  { icon: Award, number: "100%", label: "Quality Tested" },
];

const features = [
  { title: "ISO Certified Quality", desc: "All products manufactured under strict quality control systems." },
  { title: "Pan-India Supply", desc: "Nationwide delivery with prompt dispatch and reliable logistics." },
  { title: "Custom Solutions", desc: "We design and build products tailored to your specific requirements." },
  { title: "Technical Support", desc: "Dedicated engineering team for installation and after-sales support." },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-slate-950 text-white">
    <div className="section-container">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-primary" style={{ fontFamily: "var(--font-heading)" }}>About Us</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
            Powering Indian Industry Since 2005
          </h2>
          <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            Control & Accelerate India is a trusted manufacturer and supplier of industrial safety systems, electrical control devices, and heating solutions. With over 18 years of experience, we serve industries across India with reliable, high-quality products that meet international standards.
          </p>
          <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
            Our commitment to innovation, quality, and customer satisfaction has made us a preferred partner for leading companies in mining, power, cement, steel, and manufacturing sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="card-industrial p-6 border-white/5 bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{item.number}</div>
                    <p className="text-sm text-slate-300">{item.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="card-industrial p-8 border-white/10 bg-white/5 hover:-translate-y-1 transition-transform duration-200">
            <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>{feature.title}</h3>
            <p className="mt-3 text-slate-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
