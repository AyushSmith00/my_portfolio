
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark">A.</span>
        <span>AYUSH<span className="brand-muted">/DEV</span></span>
      </a>

      <nav className={`nav-links ${open ? "nav-open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let's talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </motion.header>
  );
}
