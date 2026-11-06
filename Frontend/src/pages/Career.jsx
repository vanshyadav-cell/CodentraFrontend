import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";
import Container from "../components/Common/Container";
const API_URL= import.meta.env.VITE_API_BASE_URL;
const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("resume", formData.resume);

    try {
      const response = await fetch(`${API_URL}/api/career/`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Resume submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: null,
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#050816] min-h-screen pt-20 pb-16">
        <Container>
          <div className="max-w-5xl mx-auto bg-slate-900 border border-gray-700 rounded-2xl p-8 md:p-12">

            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-5">
              Careers at <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          {" "}Codentrai
        </span>
            </h1>

            <p className="text-gray-300 leading-8 mb-10">
              Join our growing team and help build innovative digital solutions.
              We believe in learning, collaboration, and creating technology
              that makes a real impact.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">

              <div className="bg-slate-900 rounded-xl p-5 border border-gray-700">
                <h3 className="text-cyan-300 text-xl font-semibold mb-2">
                  Growth
                </h3>

                <p className="text-gray-300 text-sm">
                  Continuous learning with real-world projects.
                </p>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-gray-700">
                <h3 className="text-cyan-300 text-xl font-semibold mb-2">
                  Flexible Work
                </h3>

                <p className="text-gray-300 text-sm">
                  Collaborative environment with modern tools.
                </p>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-gray-700">
                <h3 className="text-cyan-300 text-xl font-semibold mb-2">
                  Innovation
                </h3>

                <p className="text-gray-300 text-sm">
                  Work on exciting software and cloud-based solutions.
                </p>
              </div>

            </div>

            <h2 className="text-3xl text-cyan-300 font-semibold mb-6">
              Submit Your Resume
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-gray-300 mb-2">Full Name <span className="text-red-500">*</span></label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl
                border
                border-slate-300
                bg-white/90  rounded-lg px-4 py-3 text-black focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email <span className="text-red-500">*</span></label>

                <input
                  type="email"
                  name="email"

                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl
                border
                border-slate-300
                bg-white/90  rounded-lg px-4 py-3 text-black focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Contact Number <span className="text-red-500">*</span></label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl
                border
                border-slate-300
                bg-white/90   rounded-lg px-4 py-3 text-black focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className=" text-white text-lg">Upload Resume</label>

                <input
  type="file"
  name="resume"
  accept=".pdf,.doc,.docx"
  onChange={handleChange}
  required
  className="w-72 text-gray-300
    file:mr-4
    file:px-5
    file:py-3
    file:rounded-lg
    file:border-0
    file:bg-gray-600
    file:text-white
    file:font-medium
    file:cursor-pointer
    hover:file:bg-gray-500
    border border-gray-600
    rounded-lg
    p-2
    bg-[#111827]"
/>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit Resume
              </button>

            </form>

          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default Career;