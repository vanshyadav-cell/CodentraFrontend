import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";
import Container from "../components/Common/Container";

const TermsOfServices = () => {
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
              Terms of Services
            </h1>

            <p className="text-gray-300 leading-9 mb-10">
              Welcome to Codentrai. By accessing or using our website and
              services, you agree to comply with these Terms of Services. These
              terms explain your rights and responsibilities while using our
              platform. Whether you are exploring our IT solutions, contacting
              our team, or working with us as a client, these terms help ensure
              a transparent and professional experience for everyone.
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  1. Acceptance of Terms
                </h2>

                <p className="text-gray-300 leading-9">
                  By accessing Codentrai, you confirm that you have read,
                  understood, and agreed to these Terms of Services. If you do
                  not agree with any part of these terms, you should discontinue
                  using our website and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  2. Use of Our Services
                </h2>

                <p className="text-gray-300 leading-9">
                  Codentrai provides technology solutions, software development,
                  cloud services, and digital consulting. You agree to use our
                  platform only for lawful purposes and not engage in activities
                  that could harm our services, interfere with other users, or
                  violate applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  3. Intellectual Property
                </h2>

                <p className="text-gray-300 leading-9">
                  All website content, including logos, text, graphics, designs,
                  and other materials, belongs to Codentrai unless otherwise
                  stated. You may not copy, reproduce, distribute, or modify
                  our content without prior written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  4. User Responsibilities
                </h2>

                <p className="text-gray-300 leading-9">
                  When interacting with Codentrai, you are responsible for
                  providing accurate information and maintaining respectful
                  communication. You must not attempt unauthorized access to our
                  systems or misuse any feature available on the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  5. Limitation of Liability
                </h2>

                <p className="text-gray-300 leading-9">
                  While we strive to provide reliable services, Codentrai is not
                  liable for direct, indirect, incidental, or consequential
                  damages arising from the use or inability to use our website
                  or services. All services are provided on an “as available”
                  basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  6. Third-Party Services
                </h2>

                <p className="text-gray-300 leading-9">
                  Our website may include links or integrations with third-party
                  services. Codentrai is not responsible for the content,
                  availability, or policies of those external platforms, and
                  users should review their respective terms before using them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  7. Changes to These Terms
                </h2>

                <p className="text-gray-300 leading-9">
                  We reserve the right to update these Terms of Services at any
                  time. Any revisions will become effective immediately after
                  they are published on this page, and continued use of Codentrai
                  indicates your acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                  8. Contact Us
                </h2>

                <p className="text-gray-300 leading-9">
                  If you have questions regarding these Terms of Services,
                  please contact Codentrai through the Contact Us section on our
                  website. We are happy to assist with any concerns or
                  clarifications.
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

export default TermsOfServices;