import heroImage from "@/assets/hero-water.jpg";
import heroVideo from "@/assets/hero section vid.mp4";
import { TextAnimate } from "@/registry/magicui/text-animate";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[rgba(10,37,64,0.35)]" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl leading-tight mb-6 text-[#F5F7FA]">
            <TextAnimate as="span" animation="slideUp" by="word" className="font-heading">
              Pure
            </TextAnimate>{" "}
            <TextAnimate
              as="span"
              animation="slideUp"
              by="word"
              className="font-heading text-[#7CC9FF]"
            >
              Water,
            </TextAnimate>{" "}
            <TextAnimate
              as="span"
              animation="slideUp"
              by="word"
              className="font-heading"
              segmentClassName="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400"
            >
              Healthy Life
            </TextAnimate>
          </h1>
          <TextAnimate
            as="p"
            animation="slideUp"
            by="word"
            className="font-heading text-[0.7rem] md:text-[0.7rem] mb-8 text-[#D1D9E6] leading-relaxed max-w-xl"
          >
            Param Energy & Filtrations delivers advanced water purification solutions for homes, businesses, and industries. Clean water you can trust.
          </TextAnimate>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="hero-btn">
              Contact Us
            </a>
            <a href="#services" className="hero-btn">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
