import Container from "../components/Common/Container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";
import { useEffect } from "react";
const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-[#010d24] min-h-screen text-white">
            {/* Existing Navbar */}
            <Navbar />

            {/* Privacy Content */}
            <section className="pt-32 pb-20">
                <Container>

                    <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">

                        <h1 className="text-5xl font-bold leading-normal mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>



                        <p className="text-gray-300 leading-8 mb-8">
                            Welcome to Codentrai. Your privacy is important to us, and we are committed
                            to protecting the personal information you share while using our website
                            and services. This Privacy Policy explains what information we collect,
                            why we collect it, how we use it, and the choices available to you.
                            Whether you are exploring our services, contacting our team, or working
                            with us as a client, we believe transparency should always come first.
                        </p>

                        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                            1. Information We Collect
                        </h2>

                        <p className="text-gray-300 leading-8 mb-6">
                            We collect information that helps us provide better services and improve
                            your experience on Codentrai. The information may include your name,
                            email address, phone number, company name, and any details you choose
                            to provide through contact forms. If you request our services, we may
                            also collect project-related information necessary for communication
                            and delivery.
                        </p>

                        <p className="text-gray-300 leading-8 mb-8">
                            In addition to information you voluntarily provide, we may automatically
                            collect technical data such as browser type, operating system, device
                            information, IP address, pages visited, and time spent on our website.
                            This information helps us understand how visitors interact with our
                            platform and allows us to improve performance.
                        </p>

                        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                            2. How We Use Your Information
                        </h2>

                        <p className="text-gray-300 leading-8 mb-6">
                            Codentrai  uses your information to respond to inquiries, provide software
                            development and cloud solutions, improve website functionality, personalize
                            user experience, and maintain the security of our services.
                        </p>

                        <p className="text-gray-300 leading-8 mb-8">
                            We may also use your information to communicate important updates,
                            respond to support requests, and notify you about changes to our services.
                            We never sell your personal information to third parties for marketing
                            purposes.
                        </p>





                        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                            3. Data Security
                        </h2>

                        <p className="text-gray-300 leading-8 mb-6">
                            Protecting your data is a priority for Codentrai. We implement reasonable
                            administrative, technical, and organizational security measures designed
                            to safeguard personal information from unauthorized access, misuse,
                            alteration, or disclosure.
                        </p>

                        <p className="text-gray-300 leading-8 mb-8">
                            While we continuously improve our security practices, no internet-based
                            system can guarantee absolute security. We encourage users to maintain
                            strong passwords and practice safe online behavior.
                        </p>

                        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                            4. Third-Party Services
                        </h2>

                        <p className="text-gray-300 leading-8 mb-6">
                            We may use trusted third-party services for analytics, hosting,
                            communication, and cloud infrastructure. These providers only receive
                            the information necessary to perform their services and are expected
                            to maintain appropriate security standards.
                        </p>

                        <p className="text-gray-300 leading-8 mb-8">
                            Codentrai is not responsible for the privacy practices of external
                            websites linked from our platform, and we encourage users to review
                            their respective privacy policies.
                        </p>

                        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                            5. Data Retention
                        </h2>

                        <p className="text-gray-300 leading-8 mb-8">
                            We retain personal information only for as long as necessary to provide
                            our services, comply with legal obligations, resolve disputes, and
                            enforce agreements. When information is no longer required, it is
                            securely deleted or anonymized whenever practical.
                        </p>

                        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                            6. Your Rights
                        </h2>

                        <p className="text-gray-300 leading-8 mb-6">
                            Depending on applicable laws, you may have the right to access,
                            update, correct, or delete your personal information. You may also
                            request restrictions on how your information is processed or withdraw
                            consent for certain communications.
                        </p>

                        <p className="text-gray-300 leading-8 mb-8">
                            We strive to respond to privacy-related requests within a reasonable
                            timeframe while complying with legal requirements.
                        </p>

                        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                            7. Children's Privacy
                        </h2>

                        <p className="text-gray-300 leading-8 mb-8">
                            Codentrai 's services are not intended for children under the age of 13.
                            We do not knowingly collect personal information from children. If we
                            become aware that such information has been provided, we will take
                            appropriate steps to remove it.
                        </p>

                        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                            8. Changes to This Privacy Policy
                        </h2>

                        <p className="text-gray-300 leading-8 mb-8">
                            We may update this Privacy Policy from time to time to reflect changes
                            in our services, technology, or legal obligations. Any updates will
                            be published on this page along with the revised effective date.
                        </p>

                        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                            9. Contact Us
                        </h2>

                        <p className="text-gray-300 leading-8">
                            If you have questions about this Privacy Policy or wish to exercise
                            your privacy rights, please contact us:
                        </p>

                        <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                            <p className="text-white font-medium mb-2">Codentrai</p>
                            <p className="text-gray-300 mb-2">Email: hello@company.com</p>
                            <p className="text-gray-300 mb-2">Phone: +91 98765 43210</p>
                            <p className="text-gray-300 mb-2">Sector 63A Noida, Uttar Pradesh, India</p>
                        </div>

                    </div>
                </Container>
            </section>

            {/* Existing Footer */}
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;