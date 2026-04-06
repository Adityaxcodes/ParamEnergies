import { CheckCircle2 } from "lucide-react";
import aboutPoster from "@/assets/hero-water.jpg";
import aboutVideo from "@/assets/About us bg.mp4";
import { TextAnimate } from "@/registry/magicui/text-animate";

const highlights = [
  "Over 25+ years of industry experience",
  "Certified water treatment professionals",
  "Serving residential & industrial clients",
  "End-to-end installation & maintenance",
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "25+", label: "Years Experience" },
  { value: "1000+", label: "Systems Installed" },
  { value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden text-primary-foreground">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={aboutPoster}
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span
            className="text-white/70 font-semibold text-sm uppercase tracking-widest animate-fade-in-up-slow"
            style={{ animationDelay: "120ms" }}
          >
            About Us
          </span>
          <TextAnimate
            as="h2"
            animation="slideUp"
            by="word"
            className="font-heading font-bold text-3xl md:text-4xl mt-3 text-white"
            style={{ animationDelay: "260ms" }}
          >
            Delivering Clean Water Since Day One
          </TextAnimate>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 gradient-fire rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="text-4xl font-heading font-extrabold text-white relative">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm mt-2 text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
            <TextAnimate
              as="p"
              animation="slideUp"
              by="word"
              className="text-white/85 leading-relaxed"
              style={{ animationDelay: "420ms" }}
            >
              Param Energy & Filtrations is a trusted name in water purification and energy solutions. We specialize in designing, installing, and maintaining water filtration systems that meet the highest quality standards.
            </TextAnimate>
            <TextAnimate
              as="p"
              animation="slideUp"
              by="word"
              className="text-white/85 mt-4 leading-relaxed"
              style={{ animationDelay: "560ms" }}
            >
              Our mission is simple — to ensure every home, business, and industry has access to clean, safe, and affordable water. We combine cutting-edge technology with reliable service to deliver results you can count on.
            </TextAnimate>

            <div className="mt-8 space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full gradient-fire flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-white" size={14} />
                  </div>
                  <span className="text-white/90 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
