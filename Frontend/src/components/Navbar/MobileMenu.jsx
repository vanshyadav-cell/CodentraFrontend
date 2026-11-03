import { useLocation } from "react-router-dom";
const MobileMenu = ({ isOpen, handleNavClick }) => {
  const location = useLocation();

  if (!isOpen) return null;

  const navLinks = [
    { title: "Home", id: "home" },
    { title: "Services", id: "services" },
    { title: "Technologies", id: "technologies" },
    { title: "Stories", id: "stories" },
    { title: "About", id: "about" },
    { title: "Contact", id: "contact" },
  ];
  const isActive = (title) => {
    const path = location.pathname;

    if (title === "Home") {
      return path === "/";
    }

    if (title === "Services") {
      return path.startsWith("/services");
    }

    if (title === "Stories") {
      return path.startsWith("/stories");
    }

    if (title === "About") {
      return path === "/about-details";
    }

    return false;
  };
  const handleClick = (title) => {
    handleNavClick(title);



  };

  return (
    <div className="absolute left-4 right-4 top-20 rounded-2xl border border-white/10 bg-black p-6 shadow-xl md:hidden">
      <ul className="space-y-5">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.title);
              }}
              className={`block transition ${isActive(link.title)
                  ? "text-white font-semibold"
                  : "text-slate-400 hover:text-white"
                }`}
            >{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default MobileMenu;