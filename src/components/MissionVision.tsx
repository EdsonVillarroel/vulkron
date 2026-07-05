import { IconTarget, IconEye } from "./Icons";

export function MissionVision() {
  return (
    <section className="section section--alt" id="mision">
      <div className="container mv-grid">
        <article className="mv-card reveal">
          <div className="mv-icon">
            <IconTarget />
          </div>
          <h3 className="mv-title">Nuestra Misión</h3>
          <p>
            "Brindar soluciones industriales confiables mediante servicios
            especializados de metalmecánica, soldadura y mantenimiento,
            contribuyendo a la continuidad operacional de nuestros clientes."
          </p>
        </article>

        <article className="mv-card reveal">
          <div className="mv-icon">
            <IconEye />
          </div>
          <h3 className="mv-title">Nuestra Visión</h3>
          <p>
            "Ser una empresa referente en Bolivia en servicios industriales y
            metalmecánicos, reconocida por la calidad de nuestros trabajos,
            innovación y compromiso con nuestros clientes."
          </p>
        </article>
      </div>
    </section>
  );
}
