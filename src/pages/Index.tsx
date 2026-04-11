import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const [isHeroReady, setIsHeroReady] = useState(false);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.replace("#", "");
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      {isHeroReady && <Navbar />}
      <Hero onVideoReady={() => setIsHeroReady(true)} />
      {isHeroReady && <Services />}
      {isHeroReady && <About />}
      {isHeroReady && <Contact />}
      {isHeroReady && <Footer />}
    </div>
  );
};

export default Index;
