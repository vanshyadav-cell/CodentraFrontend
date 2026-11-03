function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left Blue Glow */}
      <div
        className="
          absolute
          -top-20
          -left-20
          sm:-top-32
          sm:-left-32
          h-[260px]
          w-[260px]
          sm:h-[420px]
          sm:w-[420px]
          rounded-full
          bg-blue-500/20
          blur-[100px]
          sm:blur-[140px]
        "
      />

      {/* Right Cyan Glow */}
      <div
        className="
          absolute
          top-16
          -right-20
          sm:top-20
          sm:-right-32
          h-[240px]
          w-[240px]
          sm:h-[380px]
          sm:w-[380px]
          rounded-full
          bg-cyan-500/20
          blur-[100px]
          sm:blur-[130px]
        "
      />

      {/* Bottom Center Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          h-[200px]
          w-[90%]
          sm:w-[600px]
          rounded-full
          bg-blue-600/15
          blur-[120px]
        "
      />

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, #64748b 1px, transparent 1px),
            linear-gradient(to bottom, #64748b 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

export default HeroBackground;