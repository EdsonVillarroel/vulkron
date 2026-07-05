import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { IconMenu, IconClose } from "./Icons";
import { NAV_LINKS } from "../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#inicio" className="nav-brand" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className={`nav-links ${open ? "nav-links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn btn--primary nav-cta"
            onClick={() => setOpen(false)}
          >
            Cotizar
          </a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </header>
  );
}
