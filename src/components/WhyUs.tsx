import { Award, Clock, ThumbsUp, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Certified Quality",
    description: "All our filtration systems meet national and international water quality standards.",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "We respect your time with prompt installations, repairs, and maintenance schedules.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted by Hundreds",
    description: "Our reputation is built on trust, transparency, and consistently delivering results.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Round-the-clock customer support for all your water filtration needs.",
  },
];

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-24 md:py-36 gradient-surface"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(255, 122, 24, 0.24), transparent 30%), radial-gradient(circle at bottom right, rgba(42, 91, 255, 0.22), transparent 28%), linear-gradient(135deg, hsl(220 100% 99%), hsl(210 100% 97%))",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-75">
        <div className="absolute -left-20 top-6 h-72 w-72 rounded-full bg-[rgba(255,122,24,0.22)] blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[rgba(42,91,255,0.18)] blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-[rgba(255,255,255,0.5)] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 md:mb-24 max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 text-foreground">
            The Param Advantage
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            We combine dependable products, responsive service, and proven expertise to deliver water solutions you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-stretch">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center p-8 rounded-2xl bg-white/85 backdrop-blur-sm shadow-card border border-white/70 hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full gradient-fire flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200/60">
                <reason.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-3 text-lg">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
