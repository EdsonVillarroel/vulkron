import { IconArrowRight, IconFlame } from "./Icons";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="container hero-inner">
        <span className="hero-badge">
          <IconFlame /> Soldando fuerza y confianza
        </span>

        <h1 className="hero-title">
          Ingeniería metálica,
          <br />
          <span className="accent">soldadura</span> y estructuras
        </h1>

        <p className="hero-sub">
          Soluciones integrales para la industria: metalmecánica de precisión,
          soldadura industrial de alta resistencia y reparación de maquinaria
          pesada. Incrementamos la confiabilidad y disponibilidad de sus activos.
        </p>

        <div className="hero-actions">
          <a href="#contacto" className="btn btn--primary">
            Contratar un servicio <IconArrowRight width={18} height={18} />
          </a>
          <a href="#servicios" className="btn btn--ghost">
            Ver servicios
          </a>
        </div>

        <div className="hero-tags">
          <span>Mixers</span>
          <span>Plantas</span>
          <span>Soldadura</span>
          <span>Estructuras</span>
        </div>
      </div>
    </section>
  );
}
