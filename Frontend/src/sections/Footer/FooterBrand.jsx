import { Mail, Phone, MapPin } from "lucide-react";
import { socialLinks } from "./footerData";

function FooterBrand() {
  return (
    <div className="max-w-sm">

      {/* Logo */}
      <a
        href="/"
        className="inline-block text-3xl font-bold tracking-tight text-white"
      >
        Codentrai
      </a>

      {/* Description */}
      <p
        className="
          mt-5
          text-slate-400
          leading-7
        "
      >
        We help startups and enterprises build scalable software,
        cloud infrastructure and AI-powered digital solutions that
        accelerate business growth.
      </p>

      {/* Contact Info */}

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3 text-slate-400">
          <Mail
            size={18}
            className="text-cyan-400"
          />
          <span>hello@company.com</span>
        </div>

        <div className="flex items-center gap-3 text-slate-400">
          <Phone
            size={18}
            className="text-cyan-400"
          />
          <span>+91 98765 43210</span>
        </div>

        <div className="flex items-center gap-3 text-slate-400">
          <MapPin
            size={18}
            className="text-cyan-400"
          />
          <span>Sector 63A Noida, Uttar Pradesh</span>
        </div>

      </div>

      {/* Social Icons */}

      <div className="mt-8 flex gap-3">

        {socialLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.href}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-slate-700
                bg-[#0b1730]
                text-slate-300
                transition-all
                duration-300
                hover:border-cyan-400
                hover:text-cyan-400
                hover:-translate-y-1
              "
            >
              <Icon size={18} />
            </a>
          );
        })}

      </div>

    </div>
  );
}

export default FooterBrand;