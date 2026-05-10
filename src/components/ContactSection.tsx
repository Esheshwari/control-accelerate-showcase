import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", product: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = 'service_gtuexis';
      const templateId = 'template_q5nl2za';
      const publicKey = 'FfGvxREdE92gMo69h';

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        product: form.product,
        message: form.message,
        to_email: 'shapersindustrial@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Thank you! Your enquiry has been submitted. We will contact you shortly.");
      setForm({ name: "", email: "", phone: "", product: "", message: "" });
    } catch (error) {
      console.error('Email send error:', error);
      toast.error("Failed to send enquiry. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-950 text-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-primary" style={{ fontFamily: "var(--font-heading)" }}>Contact Us</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Need a quote or have a technical question? Send us a message and our team will respond quickly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="grid gap-4">
            <div className="card-industrial p-6 bg-white/5 border-white/10">
              <h3 className="text-xl font-semibold mb-3">Quick Contact</h3>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <span>+91 95704 05891 / 99313 78518 / 89879 16181</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <span>info@controlaccelerate.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <span>515, Industrial Area, Bahuarwa, Near Ashoka Pillar, Lauria, West Champaran, Bihar - India</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-industrial p-5 bg-white/5 border-white/10">
                <h4 className="text-base font-semibold">Fast Response</h4>
                <p className="text-sm text-slate-300">We reply to all enquiries with pricing and technical guidance.</p>
              </div>
              <div className="card-industrial p-5 bg-white/5 border-white/10">
                <h4 className="text-base font-semibold">Trusted Support</h4>
                <p className="text-sm text-slate-300">Our team offers expert recommendations for every product need.</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card-industrial border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.6)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              <input
                placeholder="Product Interest"
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder="Your Message / Requirements"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-4 w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              className="btn-industrial mt-5 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4" /> {isSubmitting ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
