function StoriesHeader() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      {/* Badge */}
      <div
        className="
          mb-6
          inline-flex
          items-center
          rounded-full
          border
          border-green-400
          bg-transparent
          px-4
          py-2
          text-sm
          font-medium
          text-blue-400
        "
      >
        Success Stories
      </div>

      {/* Heading */}
      <h2
        className="
          text-4xl
          font-bold
          leading-tight
          tracking-tight
          text-white
          md:text-5xl
        "
      >
        Turning Ideas Into
         <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          {" "}Measurable business results
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
        Every successful product starts with the right strategy,
        technology, and execution. Explore how we've helped
        organizations accelerate growth through scalable digital
        solutions.
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

export default StoriesHeader;