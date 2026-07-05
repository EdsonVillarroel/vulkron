import { SERVICES } from "../data/content";

export function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Nuestros servicios</span>
          <h2 className="section-title">
            Lo que <span className="accent">hacemos</span>
          </h2>
          <p className="section-intro">
            Servicios especializados para mantener su operación funcionando con
            máxima disponibilidad y seguridad.
          </p>
        </div>

        <div className="cards-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article className="card reveal" key={service.title}>
                <div className="card-icon">
                  <Icon />
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
