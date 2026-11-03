function TechHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      {/* Badge */}
      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-green-400
          bg-emerald-500/10
          px-5
          py-2
          text-sm
          font-medium
          text-blue-400
        "
      >
        Technologies We Use
      </div>

      {/* Heading */}
      <h2
        className="
          mt-6
          text-4xl
          font-bold
          leading-tight
          text-white
          md:text-5xl
        "
      >
        Modern Technologies for
        <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Scalable Digital Solutions
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-slate-400
        "
      >
        We leverage modern frameworks, cloud platforms, databases, and
        development tools to build secure, scalable, and high-performance
        software solutions tailored to your business needs.
      </p>
      {/* Decorative Line */}
      <div
        className="
          mx-auto
          mt-10
          h-1
          w-24
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-green-400
        "
      />
    </div>
  );
}

export default TechHeader;