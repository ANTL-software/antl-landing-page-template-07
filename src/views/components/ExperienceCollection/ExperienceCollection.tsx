import { FiArrowUpRight, FiClock } from "react-icons/fi";
import type { TourismSite } from "../../../types";
import "./ExperienceCollection.css";
export function ExperienceCollection({
  content,
  experiences,
  onSelect,
}: {
  readonly content: TourismSite["collection"];
  readonly experiences: TourismSite["experiences"];
  readonly onSelect: (id: string) => void;
}) {
  return (
    <section
      className="experiences container"
      id="escapades"
      aria-labelledby="escapades-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="escapades-title">{content.title}</h2>
        </div>
        <p>{content.text}</p>
      </div>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.id}>
            <a
              className="experience-card__image"
              href="#reserver"
              onClick={() => onSelect(experience.id)}
              aria-label={`${content.action} : ${experience.name}`}
            >
              <img
                src={experience.image.src}
                alt={experience.image.alt}
                loading="lazy"
              />
              <span>{experience.category}</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <p className="experience-card__duration">
              <FiClock aria-hidden="true" />
              {experience.duration}
            </p>
            <h3>{experience.name}</h3>
            <p>{experience.description}</p>
            <div className="experience-card__bottom">
              <span>{experience.price}</span>
              <a
                href="#reserver"
                onClick={() => onSelect(experience.id)}
                aria-label={`${content.action} : ${experience.name}`}
              >
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
