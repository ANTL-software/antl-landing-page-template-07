import type { TourismSite } from "../../../types";
import "./PhilosophySection.css";
export function PhilosophySection({
  content,
}: {
  readonly content: TourismSite["philosophy"];
}) {
  return (
    <section className="travel-philosophy" id="esprit">
      <div className="travel-philosophy__image">
        <img src={content.image.src} alt={content.image.alt} loading="lazy" />
      </div>
      <div className="travel-philosophy__copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p>{content.text}</p>
        <ol>
          {content.steps.map((step, index) => (
            <li key={step.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
