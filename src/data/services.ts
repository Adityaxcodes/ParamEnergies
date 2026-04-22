import { Droplets, Factory, Home, ShieldCheck, Sun, Wrench } from "lucide-react";

import mobileHeroSection from "../assets/mobileHerosection.png";
import dmPlantWebp from "../assets/services/DM plant.webp";
import dmPlantPng from "../assets/services/DM plant.png";
import domesticRoWebp from "../assets/services/Domestic RO.webp";
import domesticRoPng from "../assets/services/Domestic RO.png";
import industrialRoWebp from "../assets/services/Industrial RO.webp";
import industrialRoPng from "../assets/services/Industrial RO.png";
import packagedWaterWebp from "../assets/services/PackageWater.webp";
import packagedWaterPng from "../assets/services/PackageWater.png";
import sewagePlantWebp from "../assets/services/Sewage.webp";
import sewagePlantPng from "../assets/services/Sewage.png";
import solarProjectWebp from "../assets/services/solar.webp";
import solarProjectJpeg from "../assets/services/solar.jpeg";
import waterSoftnerWebp from "../assets/services/waterSoftner.webp";
import waterSoftnerPng from "../assets/services/waterSoftner.png";

export type ServiceItem = {
  slug: string;
  icon: typeof Droplets;
  title: string;
  description: string;
  image: string;
  detailDescription: string;
};

export const services: ServiceItem[] = [
  {
    slug: "industrial-ro",
    icon: Factory,
    title: "Industrial RO",
    description:
      "Industrial Reverse Osmosis (RO) Systems by Param Energy and Filtration. With 25+ years of experience and over 1,000 systems installed globally, Param Energy and Filtration specializes in engineering high-performance RO plants. Our systems are the gold standard for industrial water purification, designed to transition raw, contaminated water into high-purity process water through molecular-level separation.",
    image: industrialRoWebp,
    detailDescription:
      "Industrial Reverse Osmosis (RO) Systems by Param Energy and Filtration. With 25+ years of experience and over 1,000 systems installed globally, Param Energy and Filtration specializes in engineering high-performance RO plants. Our systems are the gold standard for industrial water purification, designed to transition raw, contaminated water into high-purity process water through molecular-level separation.",
  },
  {
    slug: "domestic-ro",
    icon: Home,
    title: "Domestic RO",
    description:
      "Safe drinking water is vital for every home, especially with rising contaminants in municipal supply. With 25+ years of expertise, Param Energy and Filtration engineers advanced Domestic RO Purifiers that deliver pure, mineral-balanced water right from your tap for daily use.",
    image: domesticRoWebp,
    detailDescription:
      "Safe drinking water is vital for every home, especially with rising contaminants in municipal supply. With 25+ years of expertise, Param Energy and Filtration engineers advanced Domestic RO Purifiers that deliver pure, mineral-balanced water right from your tap for daily use.",
  },
  {
    slug: "dm-plants",
    icon: Droplets,
    title: "DM plants",
    description:
      "Demineralization Plants (DM Plants) by Param Energy and Filtration. Producing ultra-pure water is essential for industries where even trace minerals can compromise operations. With 25+ years of expertise, Param Energy and Filtration engineers advanced Demineralization Plants (DM Plants) that convert raw water into high-purity deionized water for critical applications.",
    image: dmPlantWebp,
    detailDescription:
      "Demineralization Plants (DM Plants) by Param Energy and Filtration. Producing ultra-pure water is essential for industries where even trace minerals can compromise operations. With 25+ years of expertise, Param Energy and Filtration engineers advanced Demineralization Plants (DM Plants) that convert raw water into high-purity deionized water for critical applications.",
  },
  {
    slug: "packaged-water",
    icon: Droplets,
    title: "Packaged water",
    description:
      "Building on the expertise of Param Energy and Filtration, a packaged drinking water plant is a specialized, all-in-one solution designed to produce high-quality bottled water. While a standard RO plant provides purified water for industrial use, a packaged water plant is an end-to-end production line that includes purification, mineral enrichment, and automated bottling. With 25+ years of experience and 1,000+ installations, we provide turnkey solutions that comply with international safety standards (such as IBWA or BIS) to ensure every drop is safe for human consumption.",
    image: packagedWaterWebp,
    detailDescription:
      "Complete purification and bottling solutions designed for packaged drinking water businesses. These systems integrate advanced filtration, disinfection, and filling processes to ensure safe, hygienic, and high-quality output. Ideal for commercial production, they support scalable operations while maintaining compliance with industry standards and quality requirements.",
  },
  {
    slug: "sewage-treatment",
    icon: ShieldCheck,
    title: "Sewage Treatment Plant",
    description:
      "Managing wastewater is no longer just a regulatory requirement; it is a critical step toward water sustainability. With 25+ years of expertise, Param Energy and Filtration engineers advanced sewage treatment plants that transform domestic and industrial sewage into clean, reusable water for non-potable applications.",
    image: sewagePlantWebp,
    detailDescription:
      "Advanced wastewater treatment systems designed to treat and recycle sewage efficiently. These plants help reduce environmental impact by converting waste into reusable water suitable for landscaping, flushing, or industrial use. Built with modern technology, they ensure compliance with regulations while promoting sustainable water management practices.",
  },
  {
    slug: "solar-projects",
    icon: Sun,
    title: "Solar Projects",
    description:
      "End-to-end solar energy solutions for residential, commercial, and industrial applications. From design and installation to maintenance, these systems harness renewable energy to reduce electricity costs and carbon footprint. Built for efficiency and durability, they provide reliable power generation with long-term sustainability and environmental benefits.",
    image: solarProjectWebp,
    detailDescription:
      "End-to-end solar energy solutions for residential, commercial, and industrial applications. From design and installation to maintenance, these systems harness renewable energy to reduce electricity costs and carbon footprint. Built for efficiency and durability, they provide reliable power generation with long-term sustainability and environmental benefits.",
  },
  {
    slug: "water-softner",
    icon: Droplets,
    title: "Water Softner plants",
    description:
      "Hard water contains high levels of dissolved calcium and magnesium, which cause scaling, a rock-hard mineral buildup that destroys industrial equipment. At Param Energy and Filtration, with 25+ years of expertise and 1,000+ installations, we engineer high-capacity water softener plants to eliminate hardness and protect your infrastructure.",
    image: waterSoftnerWebp,
    detailDescription:
      "Efficient water softening systems designed to remove hardness-causing minerals like calcium and magnesium. These plants improve water quality, prevent scaling in pipelines and equipment, and enhance overall system performance. Suitable for both residential and industrial use, they ensure smoother operations and longer lifespan of appliances.",
  },
  {
    slug: "maintenance-amc",
    icon: Wrench,
    title: "Maintainance & AMC",
    description:
      "Comprehensive maintenance and annual service contracts designed to ensure optimal performance of water treatment systems. Regular inspections, timely servicing, and expert support help prevent breakdowns and extend equipment lifespan. Our AMC services provide peace of mind with reliable operation, reduced downtime, and consistent system efficiency.",
    image: mobileHeroSection,
    detailDescription:
      "Comprehensive maintenance and annual service contracts designed to ensure optimal performance of water treatment systems. Regular inspections, timely servicing, and expert support help prevent breakdowns and extend equipment lifespan. Our AMC services provide peace of mind with reliable operation, reduced downtime, and consistent system efficiency.",
  },
];
