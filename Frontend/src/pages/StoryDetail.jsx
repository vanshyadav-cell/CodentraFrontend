import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";


const stories = [
    {
        id: 1,
        company: "HealthSync",
        industry: "Healthcare",
        title: "Smart Patient Management System",

        description:
            "Developed an integrated healthcare solution that streamlined patient records, appointments, and hospital operations.",

        technologies: ["React", "Django", "PostgreSQL"],

        stats: {
            value: "65%",
            label: "Reduced Response Time",
        },

        result:
            "Improved operational efficiency while enhancing patient satisfaction.",

        fullStory: {
            challenge:
                "HealthSync needed a better way to manage patient records, appointments, and internal hospital workflows across different departments.",

            solution:
                "We developed a centralized healthcare platform that brought patient information, appointment scheduling, and operational processes into one easy-to-use system.",

            implementation:
                "The solution was built using React, Django, and PostgreSQL with a focus on secure data management, efficient workflows, and a smooth user experience.",

            outcome:
                "The new platform reduced response time and helped healthcare teams manage their daily operations more efficiently while improving the overall patient experience.",
        },
    },

    {
        id: 2,
        company: "RetailSphere",
        industry: "Retail",
        title: "Smart Retail Management Platform",

        description:
            "Built a scalable e-commerce ecosystem with personalized shopping experiences and real-time inventory tracking.",

        technologies: ["React", "Express", "MongoDB"],

        stats: {
            value: "52%",
            label: "Improved Process Efficiency",
        },

        result:
            "Enabled seamless shopping experiences across web and mobile platforms.",

        fullStory: {
            challenge:
                "RetailSphere wanted to improve its online shopping experience while keeping inventory and order management efficient.",

            solution:
                "We created a modern retail platform that connected product management, inventory tracking, customer interactions, and order workflows.",

            implementation:
                "React was used to build the interactive frontend, while Express and MongoDB handled the backend services and product data management.",

            outcome:
                "The platform improved internal processes and provided customers with a smoother and more reliable shopping experience.",
        },
    },

    {
        id: 3,
        company: "EduNova",
        industry: "Education Technology",
        title: "Digital Learning Management Platform",

        description:
            "A centralized platform simplifying learning, student engagement, and academic management.",
        technologies: ["React", "Django", "MySQL"],

        stats: {
            value: "48%",
            label: "Faster Task Completion",
        },

        result:
            " Empowering educators with smoother, smarter academic workflows.",

        fullStory: {
            challenge:
                "EduNova needed a centralized platform to simplify course management and improve communication between students and educators.",

            solution:
                "We developed a digital learning platform that brought courses, student activities, academic resources, and management workflows together.",

            implementation:
                "The platform was built using React and Django with MySQL for structured data management and reliable application performance.",

            outcome:
                "The solution reduced manual tasks, improved workflow efficiency, and created a more organized learning experience.",
        },
    },
];

const StoryDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();

    const story = stories.find((item) => item.id === Number(id));


    if (!story) {
        return (
            <>

                <div className="min-h-screen bg-[#050914] px-6 py-20 text-center text-white">
                    <h1 className="text-3xl font-bold">Story Not Found</h1>

                    <Link
                        to="/"
                        className="mt-6 inline-block text-cyan-400 hover:text-cyan-300"
                    >
                        ← Back to Home
                    </Link>
                </div>

            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#050914] text-cyan-300">

                {/* Hero */}
                <section className="px-6 py-20 md:px-16 lg:px-24">
                    <div className="mx-auto max-w-6xl">



                        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-cyan-400">
                            {story.industry}
                        </p>

                        <h1 className="max-w-4xl  text-white text-4xl font-bold leading-tight md:text-5xl">
                            {story.title}
                        </h1>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                            {story.description}
                        </p>

                        {/* Company */}
                        <div className="mt-8 flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl font-bold text-blue-600">
                                {story.company.charAt(0)}
                            </div>

                            <div>
                                <p className="font-semibold">
                                    {story.company}
                                </p>

                                <p className="text-sm text-slate-400">
                                    {story.industry}
                                </p>
                            </div>

                        </div>

                    </div>
                </section>


                {/* Main Story */}
                <section className="border-t border-white/10 px-6 py-16 md:px-16 lg:px-24">

                    <div className="mx-auto max-w-6xl">

                        {/* Challenge */}
                        <div className="mb-14 max-w-4xl">
                            <h2 className="mb-4 text-2xl font-bold">
                                The Challenge
                            </h2>

                            <p className="text-lg leading-8 text-slate-400">
                                {story.fullStory.challenge}
                            </p>
                        </div>


                        {/* Solution */}
                        <div className="mb-14 max-w-4xl">
                            <h2 className="mb-4 text-2xl font-bold">
                                Our Solution
                            </h2>

                            <p className="text-lg leading-8 text-slate-400">
                                {story.fullStory.solution}
                            </p>
                        </div>


                        {/* Implementation */}
                        <div className="mb-14 max-w-4xl">
                            <h2 className="mb-4 text-2xl font-bold">
                                Implementation
                            </h2>

                            <p className="text-lg leading-8 text-slate-400">
                                {story.fullStory.implementation}
                            </p>
                        </div>


                        {/* Technologies */}
                        <div className="mb-14">

                            <h2 className="mb-5 text-2xl font-bold">
                                Technologies Used
                            </h2>

                            <div className="flex flex-wrap gap-3">

                                {story.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-blue-600"
                                    >
                                        {technology}
                                    </span>
                                ))}

                            </div>

                        </div>




                    </div>

                </section>

            </div>
            <Footer />
        </>
    );
};

export default StoryDetail;