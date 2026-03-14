import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", product: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your enquiry has been submitted. We will contact you shortly.");
    setForm({ name: "", email: "", phone: "", product: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: "var(--font-heading)" }}>Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: "var(--font-heading)" }}>
            Get In Touch
          </h2>
          <p className="mt-3 text-muted-foreground">Have a question or need a quote? Fill out the form and we'll get back to you promptly.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="card-industrial p-5 flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-foreground">Phone</h4>
                <p className="text-sm text-muted-foreground">+91 95704 05891 / 99313 78518 / 89879 16181</p>
              </div>
            </div>
            <div className="card-industrial p-5 flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-foreground">Email</h4>
                <p className="text-sm text-muted-foreground">info@controlaccelerate.com</p>
              </div>
            </div>
            <div className="card-industrial p-5 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-foreground">Address</h4>
                <p className="text-sm text-muted-foreground">Registered Office Address :- 515, Industrial Area, Bahuarwa, Near Ashoka Pillar, Lauria,
West Champaran, Bihar - India</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="md:col-span-2 card-industrial p-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input required type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input placeholder="Product Interest" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <textarea required rows={4} placeholder="Your Message / Requirements" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <button type="submit" className="btn-industrial px-6 py-3 text-sm gap-2 self-start">
              <Send className="w-4 h-4" /> Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
