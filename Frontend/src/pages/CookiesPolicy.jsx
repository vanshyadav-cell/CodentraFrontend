import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";
import Container from "../components/Common/Container";

const CookiesPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <main className=" bg-[#050816] min-h-screen pt-20 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto bg-slate-900 border border-gray-700 rounded-2xl px-8 md:px-12 py-10 md:py-14">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Cookie Policy
            </h1>

            <p className="text-gray-300 leading-9 mb-10">
              Codentrai uses cookies and similar technologies to improve your
              browsing experience, enhance website performance, and understand
              how visitors interact with our platform. This Cookies Policy
              explains what cookies are, how we use them, and the choices
              available to you.
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  1. What Are Cookies?
                </h2>

                <p className="text-gray-300 leading-9">
                  Cookies are small text files stored on your device when you
                  visit a website. They help websites remember your preferences,
                  improve functionality, and provide a smoother browsing
                  experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  2. How We Use Cookies
                </h2>

                <p className="text-gray-300 leading-9">
                  Codentrai uses cookies to remember user preferences, improve
                  website performance, analyze visitor interactions, and ensure
                  that our services function correctly across different devices
                  and browsers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  3. Types of Cookies We Use
                </h2>

                <p className="text-gray-300 leading-9">
                  We may use essential cookies that keep the website working,
                  performance cookies that help us understand traffic patterns,
                  functional cookies that remember your preferences, and
                  analytics cookies that provide insights into website usage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  4. Third-Party Cookies
                </h2>

                <p className="text-gray-300 leading-9">
                  Some third-party services integrated with Codentrai may place
                  their own cookies. These services have their own privacy and
                  cookies policies, and we encourage users to review them when
                  using external features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  5. Managing Your Cookie Preferences
                </h2>

                <p className="text-gray-300 leading-9">
                  Most web browsers allow you to manage, block, or delete
                  cookies through their settings. Disabling certain cookies may
                  affect the functionality and performance of some parts of the
                  Codentrai website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  6. Updates to This Policy
                </h2>

                <p className="text-gray-300 leading-9">
                  We may update this Cookies Policy from time to time to reflect
                  changes in our practices or legal requirements. Any updates
                  will be published on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  7. Contact Us
                </h2>

                <p className="text-gray-300 leading-9">
                  If you have any questions about how Codentrai uses cookies,
                  please contact us through the Contact Us section available on
                  our website.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default CookiesPolicy;