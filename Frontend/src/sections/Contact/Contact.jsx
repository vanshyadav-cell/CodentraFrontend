import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { useState } from "react";
import axios from "axios";
const API_URL=import.meta.env.VITE_API_BASE_URL;
function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  });

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      `${API_URL}/api/contact/`,
      formData
    );

    

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};



  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        scroll-mt-20
        bg-[#050816]
        py-10
        
      "
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

      
      {/* Subtle Background Gradient */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.06),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.04),transparent_40%)]
        "
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <ContactHeader />

        {/* Content */}
        <div
          className="
            grid
            gap-16
            items-start
            lg:grid-cols-12
          "
        >
          {/* Left Side */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* Right Side */}
          <div className="lg:col-span-7">
            <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
          </div>
        </div>

      </div>
     
    </section>
  );
}

export default Contact;