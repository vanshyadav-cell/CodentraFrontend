import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Container from "../Common/Container";
import PrimaryButton from "../Buttons/PrimaryButton";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  "Home",
  "Services",
  "Technologies",
  "Stories",
  "About",
  "Contact",
];

const sectionIds = {
  Home: "home",
  Services: "services",
  Technologies: "technologies",
  Stories: "stories",
  About: "about",
  Contact: "contact",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();
  const isScrollingToSection = useRef(false);

  // Detect active section while scrolling
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      if (isScrollingToSection.current) return;

      const sections = [
        "home",
        "services",
        "technologies",
        "stories",
        "about",
        "contact",
      ];

      const scrollPosition = window.scrollY + 120;
      let currentSection = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle navbar navigation
  const handleNavClick = (item) => {
    const sectionId = sectionIds[item];
    setIsOpen(false);

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        setActiveSection(sectionId);
        isScrollingToSection.current = true;

        const y = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });

        setTimeout(() => {
          isScrollingToSection.current = false;
          setActiveSection(sectionId);
        }, 700);
      }
      return;
    }

    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        setActiveSection(sectionId);
        const y = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 shadow-sm transition-all">
      <Container className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* ================= LOGO ================= */}
        <div
          onClick={() => handleNavClick("Home")}
          className="flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 select-none"
        >
          <img
            src={logo}
            alt="Codentrai"
            className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
          />
          <h1 className="text-xl sm:text-2xl lg:text-3xl italic font-['Dancing_Script'] font-extrabold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Codentrai
          </h1>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-10 px-2 xl:px-6">
          {navLinks.map((item) => {
            const sectionId = sectionIds[item];

            const isActive =
              location.pathname === "/"
                ? activeSection === sectionId
                : item === "Services"
                ? location.pathname.startsWith("/services")
                : item === "Technologies"
                ? location.pathname.startsWith("/technologies")
                : item === "Stories"
                ? location.pathname.startsWith("/stories")
                : item === "About"
                ? location.pathname === "/about-details"
                : false;

            return location.pathname === "/" ? (
              <ScrollLink
                key={item}
                to={sectionId}
                smooth={true}
                duration={100}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className={`relative cursor-pointer py-1 text-sm xl:text-base font-medium transition-colors duration-200
                  ${isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"}
                  after:absolute after:left-0 after:-bottom-1.5 after:h-[2px]
                  after:bg-white  after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {item}
              </ScrollLink>
            ) : (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative cursor-pointer py-1 text-sm xl:text-base font-medium transition-colors duration-200
                  ${isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"}
                  after:absolute after:left-0 after:-bottom-1.5 after:h-[2px]
                  after:bg-gradient-to-r after:from-blue-500 after:to-green-400 after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* ================= RIGHT CONTROLS ================= */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Strictly Desktop Only Button: lg screen se pehle render hi nahi hoga */}
          <div className="hidden lg:inline-flex items-center">
            <PrimaryButton onClick={() => handleNavClick("Contact")}>
              Get Started
            </PrimaryButton>
          </div>

          {/* Mobile / Tablet Hamburger Toggle (sirf lg screen se chote par dikhega) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleNavClick={handleNavClick}
      />
    </header>
  );
};

export default Navbar;