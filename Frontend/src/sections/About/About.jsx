import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        scroll-mt-20
        bg-[#050816]
        py-7
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-3xl
          pointer-events-none
        "
      />

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex justify-center">
          <AboutContent />
        </div>

        <div className="mt-24">
          <AboutStats />
        </div>

      </div>
    </section>
  );
}

export default About;