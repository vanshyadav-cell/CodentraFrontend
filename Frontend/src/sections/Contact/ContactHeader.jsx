function ContactHeader() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      {/* Badge */}

      <div
        className="
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
        Contact Us
      </div>

      {/* Heading */}

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          leading-tight
          tracking-tight
          text-white
          lg:text-5xl
        "
      >
        Let's Build Something
        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          {" "} Great Together
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
        Have a project in mind or looking for a trusted technology
        partner? We'd love to understand your goals and help you turn
        your ideas into scalable digital solutions.
      </p>

      {/* Small Trust Badge */}

      <div
        className="
          mt-8
          inline-flex
          items-center
          rounded-full
          border
          border-emerald-200
          bg-emerald-50
          px-4
          py-2
          text-sm
          font-medium
          text-emerald-700
        "
      >
        ✓ Usually responds within 1 business day
      </div>

    </div>
  );
}

export default ContactHeader;