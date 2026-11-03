{/*import FooterCTA from "./FooterCTA";*/}
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#071120]
        pt-0
        text-white
      "
    >
      {/* Top Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* CTA 
        <FooterCTA />*/}

        {/* Main Footer */}
        <div
          className="
            mt-20
            grid
            gap-16
            lg:grid-cols-[1.2fr_1fr]
          "
        >
          <FooterBrand />

          <div className="lg:justify-self-end">
            <FooterLinks />
          </div>
        </div>

        {/* Bottom */}
        <FooterBottom />

      </div>
    </footer>
  );
}

export default Footer;