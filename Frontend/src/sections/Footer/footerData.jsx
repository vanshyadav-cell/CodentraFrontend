import {
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      {
        name: "About",
        href: "#about",
      },
      {
        name: "Services",
        href: "#services",
      },
      
      {
        name: "Home",
        href: "#home",
      },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        name: "Blog",
        href: "#stories",
      },
      
      {
        name: "FAQs",
        href: "#home",
      },
      {
        name: "Careers",
        href: "/career",
      },
    ],
  },

  {
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        href:  "/privacy-policy",
      },
      {
        name: "Terms of Service",
        href: "/terms-of-services",
      },
      {
        name: "Cookie Policy",
        href: "/cookies-policy",
      },
     
    ],
  },
];

export const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/codentrai/" },
  { icon: FaTwitter, href: "https://x.com/codentrai" },
  { icon: FaWhatsapp, href: "https://wa.me/7905965334" },
  { icon: FaInstagram, href: "https://www.instagram.com/codentrai/" },
];