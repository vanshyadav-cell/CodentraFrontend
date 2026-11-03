import TechHeader from "./TechHeader";
import TechGrid from "./TechGrid";

function Technologies() {
  return (
    <section
      id="technologies"
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

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:48px_48px]
          pointer-events-none
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        <TechHeader />

        <TechGrid />
      </div>
    </section>
  );
}

export default Technologies;