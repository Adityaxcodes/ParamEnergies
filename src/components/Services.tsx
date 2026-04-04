import { useEffect, useState } from "react";
import { Droplets, Factory, Home, Wrench, ShieldCheck, Sun } from "lucide-react";

import heroWater from "../assets/hero-water.jpg";
import dmPlant from "../assets/services/DM plant.png";
import domesticRo from "../assets/services/Domestic RO.png";
import industrialRo from "../assets/services/Industrial RO.png";
import packagedWater from "../assets/services/PackageWater.png";
import sewagePlant from "../assets/services/Sewage.png";
import solarProject from "../assets/services/solar.jpeg";
import waterSoftner from "../assets/services/waterSoftner.png";
import ServiceDetailCard from "./ServiceDetailCard";

const services = [
  {
    icon: Droplets,
    title: "DM plants",
    description: "High-purity demineralization systems for process and boiler feed water.",
    detailImage: dmPlant,
    detailDescription:
      "Demineralization plants remove dissolved minerals to deliver very low conductivity water for sensitive processes.",
  },
  {
    icon: Home,
    title: "Domestic RO",
    description: "Compact, multi-stage RO units for homes and small offices.",
    detailImage: domesticRo,
    detailDescription:
      "Domestic RO systems provide safe drinking water through multi-stage filtration and membrane purification.",
  },
  {
    icon: Factory,
    title: "Industrial RO",
    description: "High-capacity RO plants for factories and commercial operations.",
    detailImage: industrialRo,
    detailDescription:
      "Industrial RO plants deliver large-volume purified water with robust pre-treatment and monitoring.",
  },
  {
    icon: Droplets,
    title: "Packaged water",
    description: "Purification and bottling-ready systems for packaged drinking water units.",
    detailImage: packagedWater,
    detailDescription:
      "Packaged water plants integrate filtration, RO, and disinfection for bottling-grade output.",
  },
  {
    icon: ShieldCheck,
    title: "Sewage Treatment Plant",
    description: "Effluent treatment and recycling systems for compliant sewage management.",
    detailImage: sewagePlant,
    detailDescription:
      "STP systems treat wastewater to safe discharge or reuse with biological and filtration stages.",
  },
  {
    icon: Sun,
    title: "Solar Projects",
    description: "Rooftop and utility-scale solar systems for clean, reliable power.",
    detailImage: solarProject,
    detailDescription:
      "Solar projects deliver clean, renewable energy with high-efficiency panels and reliable inverters.",
  },
  {
    icon: Droplets,
    title: "Water Softner plants",
    description: "Ion-exchange based softening solutions to remove hardness effectively.",
    detailImage: waterSoftner,
    detailDescription:
      "Water softeners remove hardness-causing minerals to reduce scaling and improve efficiency.",
  },
  {
    icon: Wrench,
    title: "Maintainance & AMC",
    description: "Annual maintenance contracts to keep systems running at peak performance.",
    detailImage: heroWater,
    detailDescription:
      "AMC coverage includes routine inspections, replacements, and quick-response service visits.",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<(typeof services)[number] | null>(null);

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
    <section id="services" className="relative py-20 md:py-28 gradient-blue overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#3EC6FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#4B2EFF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF7A18]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 mb-4">
            What We Offer
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mt-3">
            Our Services
          </h2>
          <p className="text-white/70 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            From residential purifiers to industrial water treatment plants, we provide end-to-end water filtration solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white/[0.07] backdrop-blur-md rounded-2xl p-8 border border-white/[0.15] transition-all duration-300 ease-out hover:scale-[1.04] hover:bg-white/[0.12] hover:border-white/30 hover:shadow-[0_8px_40px_-8px_rgba(62,198,255,0.3)] animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                boxShadow: "inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 4px 24px -4px rgba(0,0,0,0.15)",
              }}
            >
              <div className="w-13 h-13 rounded-xl gradient-fire flex items-center justify-center mb-6 transition-all duration-300 group-hover:rotate-6 group-hover:shadow-[0_0_20px_rgba(255,122,24,0.4)]">
                <service.icon className="text-primary-foreground" size={24} />
              </div>

              <h3 className="font-heading font-extrabold text-lg text-white mb-2 tracking-tight">
                {service.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-all duration-300 group-hover:text-[#FFA726] group-hover:gap-2.5"
                onClick={() => setActiveService(service)}
              >
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>

        {activeService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl p-6"
            role="dialog"
            aria-modal="true"
            onClick={() => setActiveService(null)}
          >
            <ServiceDetailCard
              image={activeService.detailImage}
              title={activeService.title}
              description={activeService.detailDescription}
              onClose={() => setActiveService(null)}
              onLearnMore={() => setActiveService(null)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
