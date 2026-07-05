import { ABOUT_POINTS } from "../data/content";

export function About() {
  return (
    <section className="section" id="nosotros">
      <div className="container about-grid">
        <div className="reveal">
          <span className="eyebrow">¿Quiénes somos?</span>
          <h2 className="section-title">
            Especialistas en <span className="accent">soluciones</span> para la
            industria
          </h2>
          <p className="section-intro">
            Somos una empresa especializada en brindar soluciones integrales para
            la industria, con personal altamente capacitado y trabajos de alta
            calidad.
          </p>

          <ul className="about-list">
            {ABOUT_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <li key={point.text}>
                  <span className="about-list-icon">
                    <Icon />
                  </span>
                  <span>{point.text}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="about-objective reveal">
          <div className="about-objective-inner">
            <h3 className="about-objective-title">Nuestro objetivo</h3>
            <p>
              Incrementar la confiabilidad y disponibilidad de los activos de
              nuestros clientes mediante trabajos de alta calidad y personal
              altamente capacitado.
            </p>
            <div className="about-stats">
              <div>
                <strong>100%</strong>
                <span>Compromiso técnico</span>
              </div>
              <div>
                <strong>0</strong>
                <span>Incidentes como meta</span>
              </div>
              <div>
                <strong>+24h</strong>
                <span>Respuesta operativa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
