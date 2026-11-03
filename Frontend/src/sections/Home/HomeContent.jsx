import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

function HeroContent() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
      
      {/* ================= WELCOME BADGE ================= */}
      <div className="relative inline-flex items-center justify-center py-2 px-2 max-w-full">
        <div
          className="
            relative
            flex items-center justify-center
            px-4 sm:px-6
            py-2 sm:py-2.5
            rounded-full
            border border-cyan-400/50
            bg-[#050914]/90
            shadow-[0_0_15px_rgba(0,200,255,0.12)]
          "
        >
          {/* Subtle Outer Glow */}
          <div
            className="
              absolute -inset-[1px]
              rounded-full
              bg-gradient-to-r
              from-blue-500
              via-cyan-400
              to-emerald-400
              opacity-40
              blur-[4px]
              -z-10
            "
          />

          {/* Sparkle */}
          <span className="mr-2 text-sm sm:text-base text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
            ✦
          </span>

          {/* Text */}
          <span className="text-xs sm:text-sm md:text-base text-slate-300 whitespace-nowrap">
            Welcome to{" "}
            <span className="font-semibold text-cyan-300">our Solutions</span>
          </span>
        </div>
      </div>

      {/* ================= MAIN HEADING ================= */}
      <h1
        className="
          mt-6
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          tracking-tight
          text-white
          leading-[1.15]
          sm:leading-[1.12]
          max-w-3xl
        "
      >
        BUILDING{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">
          DIGITAL SOLUTIONS
        </span>{" "}
        FOR INNOVATIVE IDEAS
      </h1>

      {/* ================= DESCRIPTION ================= */}
      <p
        className="
          mt-5 sm:mt-6
          max-w-2xl
          text-sm
          sm:text-base
          md:text-lg
          leading-relaxed
          text-slate-400
          px-2
        "
      >
        We help startups and businesses transform innovative ideas into scalable
        digital solutions with software, cloud technologies, AI-powered
        applications, and digital innovation.
      </p>

      {/* ================= ACTION BUTTON ================= */}
      <div className="mt-8 flex items-center justify-center">
        <Link
          to="contact"
          smooth={true}
          duration={300}
          offset={-80}
          className="cursor-pointer"
        >
          <button
            className="
              group
              inline-flex
              items-center
              gap-2.5
              rounded-xl
              bg-gradient-to-r from-blue-500 to-green-400
              hover:from-blue-600 hover:to-green-500
              px-6 sm:px-8
              py-3 sm:py-3.5
              text-sm sm:text-base
              font-semibold
              text-white
              shadow-lg
              shadow-blue-500/25
              transition-all
              duration-200
              hover:shadow-blue-500/40
              active:scale-95
            "
          >
            <span>Get Started</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroContent;