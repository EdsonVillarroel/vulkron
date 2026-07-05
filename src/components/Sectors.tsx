import { SECTORS } from "../data/content";

export function Sectors() {
  return (
    <section className="section" id="sectores">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Sectores que atendemos</span>
          <h2 className="section-title">
            Industrias que <span className="accent">confían</span> en nosotros
          </h2>
        </div>

        <div className="sectors-grid">
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <div className="sector-card reveal" key={sector.label}>
                <span className="sector-icon">
                  <Icon />
                </span>
                <span className="sector-label">{sector.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
