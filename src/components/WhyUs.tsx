import { TextAnimate } from "@/registry/magicui/text-animate";
import { CheckCircle2, Factory, Wrench, IndianRupee } from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "25+ Years of Industrial RO Experience",
    description:
      "We have designed and installed 1,000+ RO, DM, and softener plants for schools, hospitals, hotels, and industries across Rajasthan.",
  },
  {
    icon: CheckCircle2,
    title: "In-House Design & Manufacturing",
    description:
      "All major systems are engineered and built in-house, allowing better quality control, custom sizing, and reliable performance in high-salt water conditions.",
  },
  {
    icon: Wrench,
    title: "Reliable Service & AMC Support",
    description:
      "Our on-time maintenance and AMC services help reduce breakdowns, protect equipment, and keep your plants running with minimal downtime.",
  },
  {
    icon: IndianRupee,
    title: "Better Project Value & Pricing",
    description:
      "Compared to typical local vendors, we offer competitive pricing without compromising on components, workmanship, or long-term reliability.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="relative py-20 md:py-28 bg-slate-950 text-slate-50">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-semibold uppercase tracking-widest text-slate-200">
            Why Choose Param Energy & Filters
          </span>
          <TextAnimate
            as="h2"
            animation="slideUp"
            by="word"
            className="font-heading font-extrabold text-3xl md:text-4xl mt-4 text-slate-50"
          >
            Your Industrial RO Partner in Rajasthan
          </TextAnimate>
          <TextAnimate
            as="p"
            animation="slideUp"
            by="word"
            className="text-slate-300 mt-4 text-sm md:text-base leading-relaxed"
          >
            Based in Sikar and serving Jhunjhunu, Churu, Nagaur, Bikaner, Ajmer, Jaipur and projects
            across Rajasthan, we combine deep technical expertise with in-house manufacturing and
            dependable service support.
          </TextAnimate>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group h-full rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md shadow-[0_12px_35px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/8 hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-fire shadow-lg shadow-sky-500/30">
                <reason.icon className="text-slate-950" size={20} />
              </div>
              <h3 className="font-heading font-semibold text-base md:text-lg text-slate-50 mb-2">
                {reason.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
