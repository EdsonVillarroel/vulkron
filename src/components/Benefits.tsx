import { BENEFITS } from "../data/content";

export function Benefits() {
  return (
    <section className="section section--alt" id="beneficios">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Beneficios para clientes</span>
          <h2 className="section-title">
            Con nuestros servicios <span className="accent">logramos</span>
          </h2>
          <p className="section-intro">
            Resultados medibles en mantenimiento y metalmecánica que impactan
            directamente en su productividad.
          </p>
        </div>

        <div className="benefits-grid">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div className="benefit-item reveal" key={benefit.text}>
                <span className="benefit-icon">
                  <Icon />
                </span>
                <p>{benefit.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
