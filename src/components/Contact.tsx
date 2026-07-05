import { useState, type FormEvent } from "react";
import { CONTACT, SERVICE_OPTIONS } from "../data/content";
import {
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsApp,
  IconArrowRight,
  IconCheck,
} from "./Icons";

type Status = "idle" | "sending" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: SERVICE_OPTIONS[0],
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const whatsappHref = () => {
    const text = encodeURIComponent(
      `Hola VULKRON, soy ${form.name || "[nombre]"}${
        form.company ? ` de ${form.company}` : ""
      }. Estoy interesado en: ${form.service}.${
        form.message ? ` ${form.message}` : ""
      }`
    );
    return `https://wa.me/${CONTACT.whatsapp}?text=${text}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Nueva solicitud de servicio — ${form.service}`,
          Nombre: form.name,
          Correo: form.email,
          Telefono: form.phone,
          Empresa: form.company,
          Servicio: form.service,
          Mensaje: form.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section section--alt" id="contacto">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Contacto</span>
          <h2 className="section-title">
            ¿Listo para <span className="accent">contratar</span> un servicio?
          </h2>
          <p className="section-intro">
            Cuéntenos qué necesita y nuestro equipo le responderá con una
            propuesta. Respuesta rápida y asesoría técnica sin compromiso.
          </p>

          <ul className="contact-details">
            <li>
              <span className="contact-details-icon">
                <IconMail />
              </span>
              <div>
                <small>Correo</small>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </li>
            <li>
              <span className="contact-details-icon">
                <IconPhone />
              </span>
              <div>
                <small>Teléfono</small>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
                  {CONTACT.phone}
                </a>
              </div>
            </li>
            <li>
              <span className="contact-details-icon">
                <IconPin />
              </span>
              <div>
                <small>Ubicación</small>
                <span>{CONTACT.location}</span>
              </div>
            </li>
          </ul>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost contact-wa"
          >
            <IconWhatsApp width={20} height={20} /> Escríbenos por WhatsApp
          </a>
        </div>

        <div className="contact-form-wrap reveal">
          {status === "success" ? (
            <div className="contact-success">
              <span className="contact-success-icon">
                <IconCheck />
              </span>
              <h3>¡Mensaje enviado!</h3>
              <p>
                Gracias por contactarnos. Nuestro equipo se comunicará con usted
                a la brevedad.
              </p>
              <button
                className="btn btn--ghost"
                onClick={() => setStatus("idle")}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="field">
                  <span>Nombre *</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Su nombre"
                  />
                </label>
                <label className="field">
                  <span>Empresa</span>
                  <input
                    type="text"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Nombre de empresa"
                  />
                </label>
              </div>

              <div className="form-row">
                <label className="field">
                  <span>Correo *</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="correo@empresa.com"
                  />
                </label>
                <label className="field">
                  <span>Teléfono</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+591 ..."
                  />
                </label>
              </div>

              <label className="field">
                <span>Servicio de interés</span>
                <select value={form.service} onChange={update("service")}>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span>Mensaje *</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Describa el trabajo o equipo que necesita atender..."
                />
              </label>

              {status === "error" && (
                <p className="form-error">
                  No se pudo enviar el mensaje. Intente nuevamente o escríbanos
                  por WhatsApp.
                </p>
              )}

              <button
                type="submit"
                className="btn btn--primary btn--block"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar solicitud <IconArrowRight width={18} height={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
