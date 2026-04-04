import heroImage from "@/assets/hero-water.jpg";
import heroVideo from "@/assets/wateFlow herosection.mp4";

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
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
            Trusted Water Filtration Experts
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl leading-tight mb-6 text-white">
            Pure Water,{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #FF3B3B, #FF7A18, #FFA726)' }}>
              Healthy Life
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/75 leading-relaxed max-w-xl">
            Param Energy & Filtrations delivers advanced water purification solutions for homes, businesses, and industries. Clean water you can trust.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="gradient-fire text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:brightness-110 transition-all shadow-elevated"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-sm border border-white/25 text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
