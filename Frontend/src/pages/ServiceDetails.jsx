import { useParams} from "react-router-dom";
import {  CheckCircle2 } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";
import { serviceData } from "../sections/Services/servicesData";
import { useEffect } from "react";

function ServiceDetails() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const { serviceId } = useParams();

    const service = serviceData[serviceId];



    return (
        <div className="min-h-screen bg-[#050816] text-white">
            <Navbar />
            <main>

                {/* Hero */}
                <section className="relative overflow-hidden py-15 px-6">

                    {/* Background Glow */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2
            w-[500px] h-[300px]
            bg-white/5 blur-[120px] rounded-full">
                    </div>

                    <div className="relative max-w-5xl mx-auto text-center">

                        <p className="text-blue-400 text-sm font-medium inline-flex  px-4 py-2 item-center mb-4 rounded-full border border-green-400 bg-transparent">
                            OUR SERVICES
                        </p>

                        <h1 className="text-2xl md:text-6xl font-bold leading-normal mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                            {service.title}
                        </h1>

                        <p className="max-w-3xl mx-auto text-lg md:text-xl
              text-blue-200/80 leading-relaxed">
                            {service.subtitle}
                        </p>

                    </div>
                </section>


                {/* Overview */}
                <section className="px-6 pb-20">

                    <div className="max-w-5xl mx-auto">

                        <div className="bg-[#111a2e] border border-slate-700/70
              rounded-2xl p-8 md:p-12">

                            <p className="text-emerald-400 font-medium mb-3">
                                OVERVIEW
                            </p>

                            <h2 className="text-3xl font-bold mb-6">
                                Technology solutions built for your business
                            </h2>

                            <p className="text-gray-300 leading-8 text-lg">
                                {service.overview}
                            </p>

                        </div>

                    </div>

                </section>


                {/* Features */}
                <section className="px-6 pb-24">
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

                    <div className="max-w-6xl mx-auto">

                        <div className="text-center mb-12">

                            <p className="text-emerald-400 font-medium mb-3">
                                WHAT WE OFFER
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold">
                                Our {service.title} capabilities
                            </h2>

                        </div>


                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {service.features.map((feature, index) => (

                                <div
                                    key={index}
                                    className="group bg-[#10192d]
                  border border-slate-700/70
                  rounded-2xl p-7
                  hover:border-emerald-400/70
                  hover:-translate-y-1
                  transition-all duration-300"
                                >

                                    <div className="w-11 h-11 rounded-xl
                    bg-emerald-400/10
                    flex items-center justify-center
                    mb-5"
                                    >
                                        <CheckCircle2
                                            size={22}
                                            className="text-emerald-400"
                                        />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-400 leading-7">
                                        {feature.description}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>
                {/* Thank You Section */}
                <section className="mt-20 ">
                    
                    <div className="relative overflow-hidden rounded-1xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-[#071122] px-8 py-12 text-center">

                        {/* Glow */}
                        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-green-400/10 blur-3xl"></div>

                        <p className="text-green-400 text-sm font-semibold tracking-[0.2em] uppercase">
                            Thank You
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-white">
                            Thank You for Visiting
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-7">
                            We appreciate your time exploring our {service.title} solutions.
                            Whether you're planning your next digital transformation or looking
                            for expert guidance, we're ready to help turn your vision into reality.
                        </p>



                    </div>
                </section>

            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
}

export default ServiceDetails;