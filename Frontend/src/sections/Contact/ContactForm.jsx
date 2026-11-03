import { Send } from "lucide-react";


function ContactForm({formData,handleChange,handleSubmit,})  {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-slate-200
        bg-slate-700/50
        p-8
        lg:p-10
        shadow-xl
      "
    >
      {/*Heading*/}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white">
          Send us a Message
        </h3>

        <p className="mt-2 text-slate-400 leading-7">
          Fill out the form below and our team will get back to you as
          soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/*row 1*/}
        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium text-white">

              Full Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white/90
                px-5
                py-3.5
                outline-none
                transition-all
                duration-300
                focus:border-blue-600
                focus:ring-4
                focus:ring-blue-100
              "
            />
          </div>


          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Company
            </label>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white/90
                px-5
                py-3.5
                outline-none
                transition-all
                duration-300
                focus:border-blue-600
                focus:ring-4
                focus:ring-blue-100
              "
            />
          </div>

          

        </div>

        {/* Row 2*/}

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Email Address <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@123.com"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white/90
                px-5
                py-3.5
                outline-none
                transition-all
                duration-300
                focus:border-blue-600
                focus:ring-4
                focus:ring-blue-100
              "
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Contact No. <span className="text-red-500">*</span>
            </label>

            <input

              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              placeholder="Enter Your contact No."
              required


              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white/90
                px-5
                py-3.5
                outline-none
                transition-all
                duration-300
                focus:border-blue-600
                focus:ring-4
                focus:ring-blue-100
              "
            />
          </div>



        </div>

        {/*mssage */}

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Message <span className="text-red-500">*</span>
          </label>

          <textarea
            rows={6}
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-slate-300
              bg-white/90
              px-5
              py-4
              outline-none
              transition-all
              duration-300
              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
            "
          />
        </div>

        {/*button*/}

        <button
          type="submit"
          className="
            group
            inline-flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-blue-600
            px-6
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-blue-700
            hover:shadow-lg
          "
        >
          Send Message

          <Send
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>

      </form>
    </div>
  );
}

export default ContactForm;