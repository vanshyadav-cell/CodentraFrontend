import ServiceCard from "./ServiceCard";
import services from "./servicesData";

function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        scroll-mt-20
        bg-[#050816]
        py-15 md:py-15 px-6"
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
      
        <div className="mx-auto max-w-3xl text-center">
         
          <span
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-green-400
            bg-[#071225]
            px-5
            py-2
            text-sm
            font-medium
            text-blue-400
            
            "
          >
             Our Services
          </span>

        
          <h2
            className="
            mt-6
            text-4xl
            font-bold
            tracking-tight
            text-white
            md:text-5xl
            "
          >
            Innovative Digital Services
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          {" "}Build for modern businesses
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
            text-gray-400
            "
          >
            We help startups and business build secure, scalable, and
            future-ready digital solutions with cutting-edge technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              slug={service.slug}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className="
          mt-24
          overflow-hidden
          rounded-3xl
          bg-gradient-to-r
          from-blue-600 
          via-cyan-500 
          to-emerald-500
          
          px-8
          py-14
          text-center
          text-slate-100
          shadow-xl
          "
        >
          <h3 className="text-3xl font-bold">
            Ready to Transform Your Business?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Let's build innovative digital solutions that accelerate your
            growth and keep you ahead of the competition.
          </p>

          <button
            className="
            mt-8
            rounded-xl
            bg-white
            px-8
            py-4
            font-semibold
            text-blue-700
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            shadow-xl
            hover:scale-105

            "
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;