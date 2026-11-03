function FooterBottom() {
  return (
    <div
      className="
        mt-14
        border-t
        border-slate-800
        pt-6
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-4
          text-sm
          text-slate-500
          md:flex-row
        "
      >
        {/* Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Company. All rights reserved.
        </p>

        {/* Bottom Links */}
        <div
         
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-6
          "
        >
          <a
            href="/privacy-policy"
            className="
              transition-colors
              duration-300
              hover:text-cyan-400
            "
          >
            Privacy Policy
          </a>
          

          <a
            href="/terms-of-services"
            className="
              transition-colors
              duration-300
              hover:text-cyan-400
            "
          >
            Terms of Service
          </a>

          <a
            href="/cookies-policy"
            className="
              transition-colors
              duration-300
              hover:text-cyan-400
            "
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;