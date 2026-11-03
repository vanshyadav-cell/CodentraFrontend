import { footerLinks } from "./footerData";
import { Link, useNavigate, useLocation } from "react-router-dom";

function FooterLinks() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterClick = (section) => {
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
  };
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-10
        md:grid-cols-3
        lg:gap-14
      "
    >
      {footerLinks.map((section) => (
        <div key={section.title}>
          {/* Heading */}
          <h3
            className="
              mb-5
              text-lg
              font-semibold
              text-white
            "
          >
            {section.title}
          </h3>

          {/* Links */}
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.name}>
                {link.href.startsWith("/") ? (
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleFooterClick(link.href.replace("#", ""))}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;