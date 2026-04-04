import { useEffect, useState } from "react";
import { Droplets, Factory, Home, Wrench, ShieldCheck, Sun, ArrowRight } from "lucide-react";

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
    description:
      "High-purity demineralization systems designed to remove dissolved salts and minerals from water for critical industrial applications. Ideal for boiler feed, pharmaceuticals, and manufacturing processes, these plants ensure consistent water quality, improved efficiency, and long-term equipment protection with reliable performance and low operational maintenance requirements.",
    image: dmPlant,
    detailDescription:
      "High-purity demineralization systems designed to remove dissolved salts and minerals from water for critical industrial applications. Ideal for boiler feed, pharmaceuticals, and manufacturing processes, these plants ensure consistent water quality, improved efficiency, and long-term equipment protection with reliable performance and low operational maintenance requirements.",
  },
  {
    icon: Home,
    title: "Domestic RO",
    description:
      "Compact and efficient reverse osmosis systems built for homes, apartments, and small offices. These units remove impurities, contaminants, and harmful substances to deliver safe and clean drinking water. Designed for convenience, they offer easy installation, low maintenance, and reliable performance for everyday household water purification needs.",
    image: domesticRo,
    detailDescription:
      "Compact and efficient reverse osmosis systems built for homes, apartments, and small offices. These units remove impurities, contaminants, and harmful substances to deliver safe and clean drinking water. Designed for convenience, they offer easy installation, low maintenance, and reliable performance for everyday household water purification needs.",
  },
  {
    icon: Factory,
    title: "Industrial RO",
    description:
      "High-capacity reverse osmosis plants engineered for factories, commercial facilities, and large-scale operations. These systems effectively remove dissolved solids and contaminants, ensuring consistent water quality for industrial processes. Built for durability and efficiency, they support continuous operation while reducing operational costs and improving overall productivity.",
    image: industrialRo,
    detailDescription:
      "High-capacity reverse osmosis plants engineered for factories, commercial facilities, and large-scale operations. These systems effectively remove dissolved solids and contaminants, ensuring consistent water quality for industrial processes. Built for durability and efficiency, they support continuous operation while reducing operational costs and improving overall productivity.",
  },
  {
    icon: Droplets,
    title: "Packaged water",
    description:
      "Complete purification and bottling solutions designed for packaged drinking water businesses. These systems integrate advanced filtration, disinfection, and filling processes to ensure safe, hygienic, and high-quality output. Ideal for commercial production, they support scalable operations while maintaining compliance with industry standards and quality requirements.",
    image: packagedWater,
    detailDescription:
      "Complete purification and bottling solutions designed for packaged drinking water businesses. These systems integrate advanced filtration, disinfection, and filling processes to ensure safe, hygienic, and high-quality output. Ideal for commercial production, they support scalable operations while maintaining compliance with industry standards and quality requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Sewage Treatment Plant",
    description:
      "Advanced wastewater treatment systems designed to treat and recycle sewage efficiently. These plants help reduce environmental impact by converting waste into reusable water suitable for landscaping, flushing, or industrial use. Built with modern technology, they ensure compliance with regulations while promoting sustainable water management practices.",
    image: sewagePlant,
    detailDescription:
      "Advanced wastewater treatment systems designed to treat and recycle sewage efficiently. These plants help reduce environmental impact by converting waste into reusable water suitable for landscaping, flushing, or industrial use. Built with modern technology, they ensure compliance with regulations while promoting sustainable water management practices.",
  },
  {
    icon: Sun,
    title: "Solar Projects",
    description:
      "End-to-end solar energy solutions for residential, commercial, and industrial applications. From design and installation to maintenance, these systems harness renewable energy to reduce electricity costs and carbon footprint. Built for efficiency and durability, they provide reliable power generation with long-term sustainability and environmental benefits.",
    image: solarProject,
    detailDescription:
      "End-to-end solar energy solutions for residential, commercial, and industrial applications. From design and installation to maintenance, these systems harness renewable energy to reduce electricity costs and carbon footprint. Built for efficiency and durability, they provide reliable power generation with long-term sustainability and environmental benefits.",
  },
  {
    icon: Droplets,
    title: "Water Softner plants",
    description:
      "Efficient water softening systems designed to remove hardness-causing minerals like calcium and magnesium. These plants improve water quality, prevent scaling in pipelines and equipment, and enhance overall system performance. Suitable for both residential and industrial use, they ensure smoother operations and longer lifespan of appliances.",
    image: waterSoftner,
    detailDescription:
      "Efficient water softening systems designed to remove hardness-causing minerals like calcium and magnesium. These plants improve water quality, prevent scaling in pipelines and equipment, and enhance overall system performance. Suitable for both residential and industrial use, they ensure smoother operations and longer lifespan of appliances.",
  },
  {
    icon: Wrench,
    title: "Maintainance & AMC",
    description:
      "Comprehensive maintenance and annual service contracts designed to ensure optimal performance of water treatment systems. Regular inspections, timely servicing, and expert support help prevent breakdowns and extend equipment lifespan. Our AMC services provide peace of mind with reliable operation, reduced downtime, and consistent system efficiency.",
    image: heroWater,
    detailDescription:
      "Comprehensive maintenance and annual service contracts designed to ensure optimal performance of water treatment systems. Regular inspections, timely servicing, and expert support help prevent breakdowns and extend equipment lifespan. Our AMC services provide peace of mind with reliable operation, reduced downtime, and consistent system efficiency.",
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--primary))]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[hsl(240,100%,59%)]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
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

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative flex-shrink-0 w-[75vw] sm:w-[60vw] md:w-auto snap-center rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 ease-out active:scale-[0.97] hover:scale-[1.03] animate-fade-in-up"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl p-6"
            role="dialog"
            aria-modal="true"
            onClick={() => setActiveService(null)}
          >
            <ServiceDetailCard
              image={activeService.image}
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
