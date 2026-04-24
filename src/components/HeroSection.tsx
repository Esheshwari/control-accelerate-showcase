import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg2.jpg";
import heroBg3 from "@/assets/hero-bg3.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    {
      image: heroBg,
      title: "Industrial Safety Systems & Electrical Control Solutions",
      subtitle: "Trusted Since 2005",
      description: "We provide reliable electrical and mechanical solutions for industries that demand consistent performance. Designed for real-world conditions, our systems ensure durability, safety, and efficiency. By combining precision and strength, we help reduce downtime and improve operations. We deliver quality solutions you can depend on - because reliability is essential to your success.",
      buttonText: "Explore Products"
    },
    {
      image: heroBg2,
      title: "Looking for the Best Industrial Solutions?",
      subtitle: "Expert Manufacturing Solutions",
      description: "Discover cutting-edge industrial equipment and safety systems designed to optimize your operations. Our comprehensive range of products ensures maximum efficiency, safety, and productivity for your manufacturing needs. Partner with us for reliable, high-performance solutions that drive your business forward.",
      buttonText: "Get Started"
    },
    {
      image: heroBg3,
      title: "Premium Quality Products & Services",
      subtitle: "Your Trusted Industrial Partner",
      description: "From advanced control systems to essential safety equipment, we offer everything you need to maintain a competitive edge. Our expert team provides tailored solutions that meet your specific requirements, ensuring optimal performance and compliance with industry standards.",
      buttonText: "Contact Us"
    }
  ];

  return (
    <section className="relative min-h-[50vh] flex items-center" style={{ marginTop: "80px" }}>
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-[50vh] flex items-center">
                <div className="absolute inset-0">
                  <img src={slide.image} alt="Industrial facility" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 gradient-hero-overlay" />
                </div>
                <div className="relative section-container py-8">
                  <div className="max-w-2xl">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                      style={{ background: "hsl(var(--teal-glow) / 0.2)", color: "hsl(var(--teal-glow))", fontFamily: "var(--font-heading)" }}>
                      {slide.subtitle}
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                      style={{ fontFamily: "var(--font-heading)", color: "white" }}>
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button onClick={scrollToProducts} className="btn-industrial px-6 py-3 text-sm gap-2">
                        {slide.buttonText} <ArrowDown className="w-4 h-4" />
                      </button>
                      <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm border-2 transition-all duration-200"
                        style={{ borderColor: "rgba(255,255,255,0.4)", color: "white", fontFamily: "var(--font-heading)" }}>
                        Request a Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/30 border-white/30 text-white" />
        <CarouselNext className="right-4 bg-white/20 hover:bg-white/30 border-white/30 text-white" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
