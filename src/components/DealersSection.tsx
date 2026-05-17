import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg2.jpg";
import { ArrowRight, Users, MapPin } from "lucide-react";

const DealersSection = () => (
  <section id="dealers" className="section-padding bg-gradient-to-br from-black via-red-950 to-black text-white">
    <div className="section-container">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300" style={{ fontFamily: "var(--font-heading)" }}>Dealers & Distributors</span>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
            Partner with us for faster delivery and local support
          </h2>
          <p className="text-base text-slate-300 sm:text-lg">
            We work with a network of dealers and distributors across India to ensure prompt supply, installation support and regional service for large industrial orders.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-industrial p-6 bg-black/80 border-red-600/20">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-red-700/15 text-red-300 mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">National Network</h3>
              <p className="mt-2 text-sm text-slate-300">Strong presence in major industrial corridors and fast logistics across the country.</p>
            </div>
            <div className="card-industrial p-6 bg-black/80 border-red-600/20">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-red-700/15 text-red-300 mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Local Service</h3>
              <p className="mt-2 text-sm text-slate-300">Regional contact points for after-sales support, inquiries and product guidance.</p>
            </div>
          </div>
          <a href="#contact" className="btn-industrial inline-flex items-center gap-2 px-6 py-3 text-sm">
            <ArrowRight className="w-4 h-4" /> Contact Sales
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card-industrial overflow-hidden rounded-[2rem] bg-black/80 border-red-600/20">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
            <div className="p-6">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">Distributor Program</span>
              <p className="mt-4 text-slate-300 text-sm">Join our distribution network and access priority pricing for industrial OEMs.</p>
            </div>
          </div>
          <div className="card-industrial overflow-hidden rounded-[2rem] bg-black/80 border-red-600/20">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg2})` }} />
            <div className="p-6">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">Focused Support</span>
              <p className="mt-4 text-slate-300 text-sm">Dedicated sales team available for bulk enquiries and technical consultations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DealersSection;
