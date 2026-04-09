import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import servicesBg from "../assets/services bg.jpg";
import ServiceDetailCard from "./ServiceDetailCard";
import { services } from "@/data/services";
import { TextAnimate } from "@/registry/magicui/text-animate";

const Services = () => {
  const [activeService, setActiveService] = useState<(typeof services)[number] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeService) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeService]);

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--primary))]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[hsl(240,100%,59%)]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 mb-4 animate-fade-in-up-slow"
            style={{ animationDelay: "120ms" }}
          >
            What We Offer
          </span>
          <TextAnimate
            as="h2"
            by="word"
            className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mt-3"
            style={{ animationDelay: "260ms" }}
          >
            Our Services
          </TextAnimate>
          <TextAnimate
            as="p"
            by="word"
            className="text-white/70 mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ animationDelay: "420ms" }}
          >
            From residential purifiers to industrial water treatment plants, we provide end-to-end water filtration solutions.
          </TextAnimate>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative flex-shrink-0 w-[75vw] sm:w-[60vw] md:w-auto snap-center rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 ease-out active:scale-[0.97] hover:scale-[1.03] animate-fade-in-up ${
                service.slug === "industrial-ro" ? "order-first md:order-none" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setActiveService(service)}
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={640}
                  height={896}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl gradient-fire flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-6">
                  <service.icon className="text-primary-foreground" size={20} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading font-extrabold text-lg text-white tracking-tight mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-foreground transition-all duration-300 group-hover:gap-2.5">
                    Learn More
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-6"
            role="dialog"
            aria-modal="true"
            onClick={() => setActiveService(null)}
          >
            <ServiceDetailCard
              image={activeService.image}
              title={activeService.title}
              description={activeService.detailDescription}
              onClose={() => setActiveService(null)}
              onLearnMore={() => {
                setActiveService(null);
                navigate(`/services/${activeService.slug}`);
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
