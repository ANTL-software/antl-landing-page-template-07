import { FiArrowDown, FiSun } from "react-icons/fi";
import type { TourismSite } from "../../../types";
import "./HeroSection.css";
export function HeroSection({
  content,
}: {
  readonly content: TourismSite["hero"];
}) {
  return (
    <section className="travel-hero" aria-labelledby="hero-title">
      <div className="travel-hero__intro">
        <p className="eyebrow">
          <FiSun aria-hidden="true" />
          {content.eyebrow}
        </p>
        <h1 id="hero-title">
          {content.title}
          <br />
          <em>{content.emphasis}</em>
        </h1>
        <p>{content.text}</p>
        <a className="text-action" href={content.discover.href}>
          {content.discover.label}
          <FiArrowDown aria-hidden="true" />
        </a>
      </div>
      <figure className="travel-hero__landscape">
        <img
          src={content.image.src}
          alt={content.image.alt}
          fetchPriority="high"
        />
        <figcaption>
          <span>{content.caption}</span>
          <small>{content.imageLabel}</small>
        </figcaption>
        <span className="travel-hero__seal" aria-hidden="true">
          <FiCompassMark />
        </span>
      </figure>
    </section>
  );
}
function FiCompassMark() {
  return <FiSun />;
}
