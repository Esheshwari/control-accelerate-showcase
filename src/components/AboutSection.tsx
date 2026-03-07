import { Shield, Award, Users, Factory } from "lucide-react";

const stats = [
  { icon: Factory, number: "18+", label: "Years Experience" },
  { icon: Users, number: "2000+", label: "Happy Clients" },
  { icon: Shield, number: "16+", label: "Product Categories" },
  { icon: Award, number: "100%", label: "Quality Tested" },
];

const industries = [
  "Mining & Minerals", "Cement & Concrete", "Steel & Metals", "Power Generation",
  "Chemical & Petrochemical", "Food & Beverage", "Pharmaceutical", "Automotive",
];

const reasons = [
  { title: "ISO Certified Quality", desc: "All products manufactured under strict quality control systems." },
  { title: "Pan-India Supply", desc: "Nationwide delivery with prompt dispatch and reliable logistics." },
  { title: "Custom Solutions", desc: "We design and build products tailored to your specific requirements." },
  { title: "Technical Support", desc: "Dedicated engineering team for installation and after-sales support." },
];

const AboutSection = () => (
  <>
    {/* About */}
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: "var(--font-heading)" }}>About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Powering Indian Industry Since 2005
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Control & Accelerate India is a trusted manufacturer and supplier of industrial safety systems, electrical control devices, and heating solutions. With over 18 years of experience, we serve industries across India with reliable, high-quality products that meet international standards. Our commitment to innovation, quality, and customer satisfaction has made us a preferred partner for leading companies in mining, power, cement, steel, and manufacturing sectors.
          </p>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 gradient-industrial">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <s.icon className="w-8 h-8 mx-auto mb-3" style={{ color: "hsl(var(--teal-glow))" }} />
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: "var(--font-heading)", color: "white" }}>{s.number}</div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: "var(--font-heading)" }}>Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: "var(--font-heading)" }}>
            Trusted Across Major Industries
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div key={ind} className="card-industrial p-5 text-center">
              <span className="font-semibold text-foreground text-sm">{ind}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: "var(--font-heading)" }}>Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: "var(--font-heading)" }}>
            Your Reliable Industrial Partner
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((r) => (
            <div key={r.title} className="card-industrial p-6">
              <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutSection;
