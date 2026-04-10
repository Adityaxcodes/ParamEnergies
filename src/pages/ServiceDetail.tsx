import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Droplet,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { services } from "@/data/services";
import CometCardDemo from "@/components/comet-card-demo";
import domesticImg1 from "@/assets/domestic RO/img1.jpeg";
import domesticImg2 from "@/assets/domestic RO/img2.jpeg";
import domesticImg3 from "@/assets/domestic RO/img3.jpeg";
import domesticImg4 from "@/assets/domestic RO/img4.jpeg";
import domesticImg5 from "@/assets/domestic RO/img5.jpeg";
import domesticImg6 from "@/assets/domestic RO/img6.jpeg";
import packagedImg1 from "@/assets/packaged water/pw1.jpeg";
import packagedImg2 from "@/assets/packaged water/pw2.jpeg";
import packagedImg3 from "@/assets/packaged water/pw3.jpeg";
import packagedImg4 from "@/assets/packaged water/pw4.jpeg";
import packagedImg5 from "@/assets/packaged water/pw5.jpeg";
import packagedImg6 from "@/assets/packaged water/pw6.jpeg";
import softnerImg1 from "@/assets/water softenning/ws1.jpeg";
import softnerImg2 from "@/assets/water softenning/ws2.jpeg";
import softnerImg3 from "@/assets/water softenning/ws3.jpeg";


const industrialRoSections = [
  {
    title: "Core System Components",
    content: [
      "Our systems are built for durability and precision, featuring a streamlined multi-stage approach:",
      "Pre-Treatment Suite: High-efficiency multi-media filters (sediment), activated carbon filters (dechlorination), and specialized water softeners or antiscalant dosing to prevent membrane scaling.",
      "High-Pressure Pump: Heavy-duty multi-stage pumps engineered to efficiently overcome osmotic pressure and ensure steady flow.",
      "Membrane Assembly: Industry-leading semi-permeable membranes housed in high-grade FRP or stainless steel pressure vessels.",
      "Smart Control Systems: PLC-based panels for real-time monitoring of TDS levels, flow rates, and automated safety shut-offs.",
    ],
  },
  {
    title: "The Process: From Raw to Refined",
    content: [
      "Pre-Filtration: Mechanical and chemical removal of sediment, turbidity, and chlorine to protect the system.",
      "Reverse Osmosis: High pressure forces water through membranes, separating pure permeate from the concentrate (waste).",
      "Post-Treatment: Final polishing via UV sterilization or pH balancing to ensure the water is ready for immediate use.",
    ],
  },
  {
    title: "Capacity & Industry Applications",
    content: [
      "We provide scalable solutions from 500 LPH to 10,000+ LPH, serving:",
      "Pharmaceuticals & Labs: Meeting strict USP purity standards for lab-grade water.",
      "Food & Beverage: Ensuring consistent ingredient water and consumer safety.",
      "Textiles: Providing mineral-free water for perfect dye consistency and boiler health.",
      "Power Plants: Protecting expensive turbine and boiler equipment from mineral buildup.",
      "Hospitals: Providing sterile, high-purity water for dialysis, sterilization, and diagnostics.",
      "Schools, Hostels & Hotels: Ensuring large-scale access to safe, high-quality drinking and utility water.",
    ],
  },
  {
    title: "Why Partner with Param Energy and Filtration?",
    content: [
      "Proven Track Record: Benefit from 25+ years of expertise and the reliability of 1,000+ successful installations.",
      "Operational Efficiency: Our designs focus on high recovery rates, reducing water waste and utility costs.",
      "Technical Longevity: Superior pre-treatment extends membrane life, reducing long-term maintenance spend.",
      "Environmental Impact: We help your firm meet environmental regulations through efficient water management.",
    ],
  },
  {
    title: "Maintenance & Support",
    content: [
      "To keep your plant running at peak performance, we provide expert guidance on:",
      "Regular CIP (Clean-In-Place): Periodic chemical cleaning to remove organic and mineral buildup.",
      "Log Monitoring: Professional tracking of silt density index (SDI) and pressure drops to eliminate downtime.",
      "Param Energy and Filtration: 25 years of excellence. 1,000+ solutions delivered.",
    ],
    span: "md:col-span-2",
  },
];

const industrialRoHighlightLines = new Set([
  "Pharmaceuticals & Labs: Meeting strict USP purity standards for lab-grade water.",
  "Food & Beverage: Ensuring consistent ingredient water and consumer safety.",
  "Textiles: Providing mineral-free water for perfect dye consistency and boiler health.",
  "Power Plants: Protecting expensive turbine and boiler equipment from mineral buildup.",
  "Hospitals: Providing sterile, high-purity water for dialysis, sterilization, and diagnostics.",
  "Schools, Hostels & Hotels: Ensuring large-scale access to safe, high-quality drinking and utility water.",
]);

const packagedWaterSections = [
  {
    title: "Core Components of a Packaged Plant",
    content: [
      "A packaged drinking water plant integrates the RO process with specific consumer-ready stages:",
      "The Purification Core: Our signature RO system with multi-stage pre-filtration (sand, carbon, and micron filters).",
      "Mineral Dosing System: Since RO removes almost all minerals, we add a controlled re-mineralization stage to restore essential minerals for taste and health.",
      "Disinfection Suite: Dual-stage protection using ozonation (to keep the water sterile inside the bottle) and UV sterilizers.",
      "Automated Bottling Line: A synchronized system that handles rinsing, filling, and capping without human contact.",
    ],
  },
  {
    title: "The Production Process",
    content: [
      "Source Water Treatment: Raw water is purified through the RO membrane to remove salts, heavy metals, and chemicals.",
      "Mineral Standardization: Precise injection of magnesium and calcium to meet taste profiles and health regulations.",
      "Sterilization: Water is treated with ozone gas to ensure it remains bacteria-free after sealing.",
      "Packaging: High-speed machines blow the PET bottles, rinse them, fill them with purified water, and seal them with tamper-proof caps.",
    ],
  },
  {
    title: "Key Advantages for Your Business",
    content: [
      "Turnkey Efficiency: We provide the entire setup, from the raw water pump to the final labeling machine.",
      "Regulatory Compliance: Designed to meet strict food safety and government health department standards.",
      "Market-Ready Quality: Balanced pH and mineral profile that consumers expect from premium brands.",
      "Scalability: Plants ranging from small-scale production to large industrial lines.",
    ],
  },
  {
    title: "Applications",
    content: [
      "Commercial bottled water brands for local or national distribution.",
      "Large organizations such as schools, universities, and corporate offices producing branded water.",
      "Hospitality: Hotels and resorts providing in-house bottled water to guests.",
      "Remote work sites supporting mining or construction camps.",
    ],
  },
  {
    title: "Why Param Energy and Filtration?",
    content: [
      "With 1,000+ systems installed, we provide a blueprint for a successful water business.",
      "25+ years of expertise ensure minimal downtime, maximum water recovery, and the highest hygiene standards.",
      "Param Energy and Filtration: From source to bottle. Precision in every drop.",
    ],
    span: "md:col-span-2",
  },
];

const waterSoftnerSections = [
  {
    title: "Core System Components",
    content: [
      "Our softeners are designed for continuous operation and maximum resin longevity:",
      "Softener Vessel: High-grade FRP or stainless steel tanks containing premium strong acid cation (SAC) resin.",
      "Ion-Exchange Resin: The active heart of the system that trades hardness ions (Ca2+, Mg2+) for sodium ions (Na+).",
      "Brine Tank: Salt-storage tank used to create concentrated brine for system regeneration.",
      "Multi-Port Valve (Manual or Automatic): Precision controllers for service flow and backwash cycles.",
    ],
  },
  {
    title: "The Process: Ion-Exchange Simplified",
    content: [
      "Softening (Service): Hard water passes through the resin bed, which captures calcium and magnesium and releases sodium into the water.",
      "Regeneration: Once the resin is saturated, concentrated salt water is flushed through to recharge it.",
      "Rinsing: Excess salt and hardness minerals are rinsed out to prepare for the next cycle.",
    ],
  },
  {
    title: "Capacity & Industry Applications",
    content: [
      "Boiler feed water: Prevents scale in high-pressure boilers and heat exchangers.",
      "Cooling towers: Reduces mineral buildup to maintain heat transfer efficiency.",
      "Hospitals & hotels: Protects laundry equipment, dishwashers, and plumbing from scale.",
      "Textiles: Ensures soft water for better fabric feel and consistent dye absorption.",
      "Schools & hostels: Improves water for bathing and cooking while extending heater lifespan.",
    ],
  },
  {
    title: "Why Choose Param Energy and Filtration?",
    content: [
      "25+ years of excellence: Right resin selection based on source water chemistry.",
      "High-grade resins: Premium ion-exchange resins for higher capacity and longer life.",
      "Operational savings: Prevents scale and can reduce energy consumption in heating equipment.",
      "Zero maintenance hassle: Automated regeneration schedules reduce manual intervention.",
    ],
  },
  {
    title: "Key Benefits",
    content: [
      "Equipment protection: Eliminates scaling that damages pipes and heaters.",
      "Chemical savings: Soft water needs less soap and detergent for cleaning and processing.",
      "Cost-effective: Reduces equipment repairs and energy bills.",
      "Param Energy and Filtration: 25 years of experience. 1,000+ systems installed.",
    ],
    span: "md:col-span-2",
  },
];

const sewageTreatmentSections = [
  {
    title: "Core System Technologies",
    content: [
      "We offer high-efficiency treatment technologies tailored to your space and discharge requirements:",
      "MBBR (Moving Bed Biofilm Reactor): High-capacity treatment using biofilm carriers with large surface area for bacteria.",
      "MBR (Membrane Bioreactor): Biological treatment combined with membrane filtration for high-purity output.",
      "SBR (Sequential Batch Reactor): Time-based treatment ideal for varying flow rates, performing aeration and settling in a single tank.",
    ],
  },
  {
    title: "The Treatment Process: Step-by-Step",
    content: [
      "Primary Treatment (Screening): Removes large floating objects and grit to protect downstream pumps.",
      "Secondary Treatment (Biological Oxidation): Microorganisms break down organic pollutants to reduce BOD.",
      "Tertiary Treatment (Filtration): Settling and multi-media/activated carbon filters remove remaining solids.",
      "Disinfection: Final treatment with chlorine or UV to eliminate pathogens before reuse or discharge.",
    ],
  },
  {
    title: "Industry Applications",
    content: [
      "Hospitals & schools: Safe, hygienic disposal of high-volume waste.",
      "Hostels & hotels: Treating greywater for reuse in flushing and laundry.",
      "Residential complexes: Supporting zero liquid discharge compliance.",
      "Industrial hubs: Managing colony waste and irrigation reuse.",
    ],
  },
  {
    title: "Why Partner with Param Energy and Filtration?",
    content: [
      "25+ years of experience: Designs optimized for low power and minimal chemical use.",
      "Odor-free operation: Advanced aeration designs allow installation near occupied buildings.",
      "Compact footprint: MBR/MBBR designs save space compared to traditional systems.",
      "Water recycling: Treated water suits gardening, toilet flushing, and cooling towers.",
    ],
  },
  {
    title: "Maintenance & Support",
    content: [
      "Automated sludge management for easy removal and drying.",
      "Expert technical guidance to maintain optimal bacterial health (MLSS levels).",
      "Param Energy and Filtration: Transforming waste into resource. 25 years of excellence.",
    ],
    span: "md:col-span-2",
  },
];

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [isCometOpen, setIsCometOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const allowedSlugs = new Set([
    "industrial-ro",
    "packaged-water",
    "sewage-treatment",
    "water-softner",
  ]);

  const service = useMemo(() => services.find((item) => item.slug === slug), [slug]);
  const isIndustrialRo = service?.slug === "industrial-ro";
  const isPackagedWater = service?.slug === "packaged-water";
  const isWaterSoftner = service?.slug === "water-softner";
  const detailSections = useMemo(() => {
    if (service?.slug === "packaged-water") {
      return packagedWaterSections;
    }

    if (service?.slug === "water-softner") {
      return waterSoftnerSections;
    }

    if (service?.slug === "sewage-treatment") {
      return sewageTreatmentSections;
    }

    return industrialRoSections;
  }, [service?.slug]);

  const imageGrid = useMemo(() => {
    if (isIndustrialRo) {
      return [
        domesticImg1,
        domesticImg2,
        domesticImg3,
        domesticImg4,
        domesticImg5,
        domesticImg6,
      ];
    }

    if (isPackagedWater) {
      return [
        packagedImg1,
        packagedImg2,
        packagedImg3,
        packagedImg4,
        packagedImg5,
        packagedImg6,
      ];
    }

    if (isWaterSoftner) {
      return [
        softnerImg1,
        softnerImg2,
        softnerImg3,
      ];
    }

    return [service?.image, service?.image, service?.image, service?.image].filter(Boolean);
  }, [isIndustrialRo, isPackagedWater, isWaterSoftner, service?.image]);

  if (!service || !allowedSlugs.has(service.slug)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold">Service not found</h1>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold"
          >
            <ArrowLeft size={16} />
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-10 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate("/#services")}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80"
          >
            <ArrowLeft size={14} />
            Back to services
          </button>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
            <Droplet size={12} />
            Detail view
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/20 bg-white/20 p-8 shadow-xl backdrop-blur-xl md:p-12">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
                {service.title}
              </p>
              <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                {service.title} Systems
              </h1>
              <p className="mt-4 text-base text-white/70 md:text-lg">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Process ready</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Scalable</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Industrial grade</span>
              </div>
            </div>

            <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-xl">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-black/20" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl md:p-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {detailSections.map((section) => (
              <div
                key={section.title}
                className={`rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/30 ${section.span ?? ""}`}
              >
                <h2 className="text-lg font-semibold uppercase tracking-[0.08em] text-white/80">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-2 text-sm text-white/70">
                  {section.content.map((line) => {
                    const shouldHighlight =
                      isIndustrialRo &&
                      section.title === "Capacity & Industry Applications" &&
                      industrialRoHighlightLines.has(line);

                    return (
                      <p
                        key={line}
                        className={
                          shouldHighlight
                            ? "text-base md:text-[1.05rem] text-emerald-100 drop-shadow-[0_0_28px_rgba(16,255,180,0.9)]"
                            : undefined
                        }
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {(isIndustrialRo || isPackagedWater || isWaterSoftner) && (
          <div className="mt-6 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl md:p-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-flow-dense auto-rows-[260px] lg:auto-rows-[320px]">
              {imageGrid.map((src, index) => (
                <div
                  key={`bento-image-${index}`}
                  onClick={() => {
                    setSelectedImage(src);
                    setSelectedIndex(index);
                    setIsCometOpen(true);
                  }}
                  className={`${
                    [
                      "md:col-span-2 md:row-span-2",
                      "md:col-span-2 md:row-span-2",
                      "md:col-span-1",
                      "md:col-span-1",
                      "md:col-span-1",
                      "md:col-span-1",
                    ][index % 6]
                  } group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/30 cursor-pointer`}
                >
                  <img
                    src={src}
                    alt={`${service.title} system ${index + 1}`}
                    className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-black/20" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/40 via-transparent to-cyan-500/20" />
                </div>
              ))}
            </div>
          </div>
        )}

        {(isIndustrialRo || isPackagedWater || isWaterSoftner) && isCometOpen && selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-6 backdrop-blur-sm"
            onClick={() => {
              setIsCometOpen(false);
              setSelectedImage(null);
              setSelectedIndex(null);
            }}
          >
            <div
              className="relative"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => {
                  setIsCometOpen(false);
                  setSelectedImage(null);
                  setSelectedIndex(null);
                }}
                className="absolute -top-10 right-0 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80"
              >
                Close
              </button>
              <CometCardDemo
                imageSrc={selectedImage}
                title={`${service.title} System`}
                code={
                  selectedIndex !== null ? `#${selectedIndex + 1}` : "#"
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
