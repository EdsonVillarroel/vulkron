import { REPAIR_ITEMS } from "../data/content";
import { IconArrowRight } from "./Icons";

export function EquipmentRepair() {
  return (
    <section className="section section--alt" id="reparacion">
      <div className="container repair-grid">
        <div className="reveal">
          <span className="eyebrow">Reparación de equipos</span>
          <h2 className="section-title">
            Reconstrucción estructural de{" "}
            <span className="accent">maquinaria pesada</span>
          </h2>
          <p className="section-intro">
            Somos especialistas en devolver la vida útil a sus equipos críticos
            con reconstrucción estructural de precisión.
          </p>
          <a href="#contacto" className="btn btn--primary repair-cta">
            Solicitar diagnóstico <IconArrowRight width={18} height={18} />
          </a>
        </div>

        <ul className="repair-list reveal">
          {REPAIR_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <span className="repair-icon">
                  <Icon />
                </span>
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
