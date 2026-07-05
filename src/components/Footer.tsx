import { Logo } from "./Logo";
import { NAV_LINKS, CONTACT } from "../data/content";
import { IconMail, IconPhone, IconWhatsApp } from "./Icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>Soldando fuerza y confianza.</p>
          <p className="footer-tagline">
            Ingeniería Metálica · Soldadura Industrial · Estructuras
          </p>
        </div>

        <nav className="footer-nav">
          <h4>Navegación</h4>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <a href={`mailto:${CONTACT.email}`}>
            <IconMail width={16} height={16} /> {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
            <IconPhone width={16} height={16} /> {CONTACT.phone}
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp width={16} height={16} /> WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>
            © {new Date().getFullYear()} VULKRON SRL. Todos los derechos
            reservados.
          </span>
          <span>{CONTACT.location}</span>
        </div>
      </div>
    </footer>
  );
}
