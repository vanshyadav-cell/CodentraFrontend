import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto text-center">

      {/* Badge */}
      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-green-400
          bg-transparent
          text-blue-400
          px-4
          py-2
          text-sm
          font-medium
          
          mb-6
        "
      >
        About Our Company
      </div>

      {/* Heading */}
      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          leading-tight
          tracking-tight
          text-white
        "
      >
        Delivering Innovative
        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          {" "}IT Solutions
        </span>

        <br />

        That Drive Growth
      </h2>

      {/* Description */}

      <p
        className="
          mt-6
          text-xl
          leading-8
          text-slate-400
        "
      >
        We help startups, SMEs, and enterprises transform ideas into
        scalable digital products. From custom software development to
        cloud infrastructure and AI-driven solutions, we build secure,
        reliable, and future-ready technology for modern businesses.
      </p>

      {/* Features */}

      <div className="mt-8 grid gap-5">

        <div className="flex items-start gap-3">
          <CheckCircle2
            className="mt-1 text-green-400"
            size={22}
          />

          <div>
            <h4 className="font-semibold text-slate-200">
              Tailor-made web and enterprise applications built for your business.
            </h4>


          </div>
        </div>



        <div className="flex items-start gap-3">
          <CheckCircle2
            className="mt-1 text-green-400"
            size={22}
          />

          <div>
            <h4 className="font-semibold text-slate-200">
              Intelligent automation to improve productivity and streamline operations.
            </h4>


          </div>
        </div>



        <div className="flex items-start gap-3">
          <CheckCircle2
            className="mt-1 text-green-400"
            size={22}
          />

          <div>
            <h4 className="font-semibold text-slate-200">
              Secure, scalable cloud infrastructure and migration services for modern businesses.
            </h4>


          </div>
        </div>



        <div className="flex items-start gap-3">
          <CheckCircle2
            className="mt-1 text-green-400"
            size={22}
          />

          <div>
            <h4 className="font-semibold text-slate-200">
              Responsive websites and mobile apps designed for seamless user experiences.
            </h4>


          </div>
        </div>










        <div className="flex items-start gap-3">
          <CheckCircle2
            className="mt-1 text-green-400"
            size={22}
          />

          <div>
            <h4 className="font-semibold text-slate-200">
              Continuous monitoring, updates, and technical support to keep your business running.
            </h4>


          </div>
        </div>

      </div>

      {/* Button */}

      <div className="mt-10">


        <Link
          to="/about-details"
          className="inline-block rounded-2xl hover:-translate-y-1 hover:scale-105 bg-gradient-to-r from-blue-400 to-green-400 px-6 py-4 font-semibold text-white transition"
        >
          Learn More
        </Link>
      </div>

    </div>
  );
}

export default AboutContent;