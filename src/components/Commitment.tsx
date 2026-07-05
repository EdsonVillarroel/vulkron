import { COMMITMENTS } from "../data/content";

export function Commitment() {
  return (
    <section className="section" id="compromiso">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Nuestro compromiso</span>
          <h2 className="section-title">
            Los pilares de <span className="accent">VULKRON</span>
          </h2>
        </div>

        <div className="commit-grid">
          {COMMITMENTS.map((item) => (
            <article className="commit-card reveal" key={item.num}>
              <span className="commit-num">{item.num}</span>
              <h3 className="commit-title">{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
