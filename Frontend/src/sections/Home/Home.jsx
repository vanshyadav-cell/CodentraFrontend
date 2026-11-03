import HeroBackground from "./HomeBackground";
import HeroContent from "./HomeContent";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Hero() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document
          .getElementById(location.state.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <section
      id="home"
      className="
        relative
        w-full
        overflow-hidden
        scroll-mt-20
        bg-[#050816]
        py-4
        
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <HeroBackground />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[70vh] lg:min-h-[75vh]">
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;