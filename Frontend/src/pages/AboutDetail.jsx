import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
const AboutDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    navigate("/", {
      state: { scrollTo: sectionId }
    });
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#071225] text-white">

        {/* Hero Section */}
        <section className="px-6 py-20 md:px-16 lg:px-24">
          <div className="mx-auto max-w-6xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              About Our Company
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Building Digital Solutions That Drive
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                {" "}Business Growth
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
              We create innovative and reliable digital solutions that help
              businesses simplify their processes, improve efficiency, and
              deliver better experiences to their customers.
            </p>

          </div>
        </section>


        {/* Who We Are */}
        <section className="border-t border-white/10 px-6 py-16 md:px-16 lg:px-24">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

            <div>
              <h2 className="mb-5 text-3xl text-cyan-300 font-bold">
                Who We Are
              </h2>

              <p className="leading-7 text-gray-400">
                We are a technology-focused team passionate about transforming
                ideas into meaningful digital experiences. Our approach combines
                modern technologies, thoughtful design, and scalable development
                practices.
              </p>

              <p className="mt-4 leading-7 text-gray-400">
                From web applications to cloud-based solutions, we focus on
                creating products that are secure, efficient, and built to
                support long-term business goals.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/[0.03] p-8">
              <h3 className="mb-6 text-2xl font-semibold">
                What We Focus On
              </h3>

              <div className="space-y-5">

                <div>
                  <h4 className="font-semibold text-cyan-300">
                    Innovation
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Using modern technologies to build smarter digital
                    experiences.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-cyan-300">
                    Quality
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Delivering reliable and scalable solutions with attention
                    to detail.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-cyan-300">
                    Collaboration
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Working closely with clients to turn their ideas into
                    practical solutions.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* Our Expertise */}
        <section className="px-6 py-16 md:px-16 lg:px-24">
          <div className="mx-auto max-w-6xl">

            <h2 className="mb-10 text-center text-3xl font-bold">
              Our Expertise
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  title: "Web Development",
                  description:
                    "Modern and scalable web applications designed for performance.",
                },
                {
                  title: "Cloud Solutions",
                  description:
                    "Secure and flexible cloud infrastructure for growing businesses.",
                },
                {
                  title: "UI/UX Design",
                  description:
                    "Simple and engaging interfaces focused on user experience.",
                },
                {
                  title: "AI Solutions",
                  description:
                    "Intelligent solutions that automate processes and support better decisions.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-white/[0.03] p-6 transition hover:border-green-400"
                >
                  <h3 className="mb-3  text-cyan-300 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>







        {/* Bottom CTA */}
        <section className="px-6 py-3 text-center">
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-white">
              Ready to Build Something Better?
            </h2>

            <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
              Let's turn your ideas into digital solutions that create real impact.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-7">

              <button
                onClick={() => handleSectionClick("services")}
                className="
      px-6 py-3
      rounded-lg
      bg-cyan-400
      text-slate-900
      font-semibold
      text-sm
      hover:bg-cyan-300
      transition
      cursor-pointer
    "
              >
                Explore Services
              </button>

              <button
                onClick={() => handleSectionClick("contact")}
                className="
      px-6 py-3
      rounded-lg
      border border-slate-500
      text-white
      font-semibold
      text-sm
      hover:border-cyan-400
      hover:text-cyan-400
      transition
      cursor-pointer
    "
              >
                Contact Us
              </button>

            </div>
          </div>

        </section>

        <Footer />

      </div>
    </>
  );
};

export default AboutDetail;