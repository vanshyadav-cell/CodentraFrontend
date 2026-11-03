import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
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
  { icon: FaLinkedin, href: "#" },
  { icon: FaGithub, href: "#" },
  { icon: FaFacebook, href: "#" },
  { icon: FaInstagram, href: "#" },
];