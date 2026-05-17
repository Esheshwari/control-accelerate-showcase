import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", product: "", message: "" });
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
        company: form.company,
        from_email: form.email,
        phone: form.phone,
        product: form.product,
        message: form.message,
        to_email: 'shapersindustrial@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Thank you! Your enquiry has been submitted. We will contact you shortly.");
      setForm({ name: "", company: "", email: "", phone: "", product: "", message: "" });
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
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300" style={{ fontFamily: "var(--font-heading)" }}>Contact Us</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
            Request a quote or technical consultation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Reach out for product selection, bulk enquiries or project support and our engineering team will respond promptly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/50">
            <p className="text-sm uppercase tracking-[0.35em] text-red-300" style={{ fontFamily: "var(--font-heading)" }}>Direct Contact</p>
            <h3 className="mt-4 text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Speak with our industrial solutions team
            </h3>
            <p className="mt-4 text-base text-slate-300 leading-7">
              Fill out the enquiry form and include the product or application details for the fastest response.
            </p>
            <div className="mt-8 space-y-5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-red-300" />
                <span>+91 95704 05891 / 99313 78518 / 89879 16181</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-red-300" />
                <span>info@controlandaccelerate.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-red-300" />
                <span>515, Industrial Area, Bahuarwa, Near Ashoka Pillar, Lauria, West Champaran, Bihar - India</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/60">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              />
              <input
                required
                placeholder="Company Name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              />
              <input
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              />
            </div>
            <div className="mt-4">
              <input
                placeholder="Product Interest"
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder="Your Message / Requirements"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-4 w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30 resize-none"
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
