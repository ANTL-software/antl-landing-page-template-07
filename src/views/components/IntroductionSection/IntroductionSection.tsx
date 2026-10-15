import { FiFeather } from "react-icons/fi";
import type { TourismSite } from "../../../types";
import "./IntroductionSection.css";
export function IntroductionSection({
  content,
}: {
  readonly content: TourismSite["introduction"];
}) {
  return (
    <section className="travel-intro container">
      <p className="eyebrow">{content.eyebrow}</p>
      <div>
        <h2>{content.title}</h2>
        <p>{content.text}</p>
        <ul>
          {content.notes.map((note) => (
            <li key={note}>
              <FiFeather aria-hidden="true" />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
