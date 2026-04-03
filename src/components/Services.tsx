import { useState } from "react";
import { Droplets, Factory, Home, Wrench, ShieldCheck, Sun } from "lucide-react";

import heroWater from "../assets/hero-water.jpg";
import servicesBg from "../assets/services bg.jpg";
import ServiceDetailCard from "./ServiceDetailCard";

const services = [
  {
    icon: Home,
    title: "Industrial & Domestical RO plants",
    description: "Turnkey RO plants tailored for industrial and household-scale applications.",
    detailImage: heroWater,
    detailDescription:
      "Reverse Osmosis (RO) plants purify water by removing dissolved salts and impurities using a semi-permeable membrane. Water is pushed under pressure, allowing only clean water to pass. Domestic RO systems are used in homes for safe drinking water. Industrial RO plants handle large volumes for factories and processes. They improve taste, reduce TDS, and remove harmful substances. Pre-treatment like filtration is often required. RO systems need regular maintenance and produce some reject water.",
  },
  {
    icon: Factory,
    title: "Packing water plants",
    description: "Purification and bottling-ready systems for packaged drinking water units.",
    detailImage: heroWater,
    detailDescription:
      "These plants purify and bottle water for commercial use. Water undergoes filtration, RO, UV, and ozonation for purification. Filtration removes particles, RO removes dissolved salts, and UV kills microbes. Ozonation ensures long-lasting disinfection. Water is then stored and filled into bottles hygienically. Plants produce various sizes like bottles and cans. They follow quality standards like BIS.",
  },
  {
    icon: Droplets,
    title: "Water Softner Plants",
    description: "Ion-exchange based softening solutions to remove hardness effectively.",
    detailImage: heroWater,
    detailDescription:
      "Water softeners remove hardness caused by calcium and magnesium. They use ion exchange to replace these ions with sodium. This improves soap efficiency and prevents scaling in pipes. Resin beds perform the exchange and require periodic regeneration. Regeneration is done using salt solution. Used in homes, hotels, and industries.",
  },
  {
    icon: Wrench,
    title: "DM plants(Demineralization Plants)",
    description: "High-purity demineralization systems for process and boiler feed water.",
    detailImage: heroWater,
    detailDescription:
      "DM plants remove almost all dissolved minerals from water. They use cation and anion exchange resins. Cation removes positive ions, anion removes negative ions. This produces highly pure water with low conductivity. Used in power plants, labs, and industries. Resins require regeneration using chemicals.",
  },
  {
    icon: ShieldCheck,
    title: "STP Plants(Sewage Treatment Plants)",
    description: "Effluent treatment and recycling systems for compliant sewage management.",
    detailImage: heroWater,
    detailDescription:
      "STPs treat wastewater to make it safe for reuse or discharge. Primary treatment removes solids. Biological treatment uses microbes to break down waste. Aeration helps microbial activity. Secondary treatment separates sludge from water. Treated water can be reused for gardening or flushing. STPs help reduce pollution and conserve water.",
  },
  {
    icon: Sun,
    title: "Solar Projects",
    description: "Rooftop and utility-scale solar systems for clean, reliable power.",
    detailImage: heroWater,
    detailDescription:
      "Solar projects generate electricity using photovoltaic (PV) panels that convert sunlight into energy. They include rooftop systems for buildings and large solar plants that supply power to the grid. A basic system has panels, inverters, and wiring. Panels produce DC power, which is converted to AC for use. Some setups include batteries for storage. Solar energy is clean, renewable, and reduces pollution. It requires low maintenance and provides long-term savings. These projects are widely used and support sustainable energy needs.",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<(typeof services)[number] | null>(null);

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From residential purifiers to industrial water treatment plants, we provide end-to-end water filtration solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-card rounded-xl p-7 shadow-card transition-shadow"
              role="button"
              tabIndex={0}
              onClick={() => setActiveService(service)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveService(service);
                }
              }}
            >
              <div className="w-12 h-12 rounded-lg gradient-fire flex items-center justify-center mb-5">
                <service.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {activeService && (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-xl p-6"
            role="dialog"
            aria-modal="true"
          >
            <ServiceDetailCard
              image={activeService.detailImage}
              title={activeService.title}
              description={activeService.detailDescription}
              onClose={() => setActiveService(null)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
