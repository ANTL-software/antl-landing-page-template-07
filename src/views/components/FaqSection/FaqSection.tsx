import { FiPlus } from "react-icons/fi";
import type { TourismSite } from "../../../types";
import "./FaqSection.css";
export function FaqSection({
  content,
}: {
  readonly content: TourismSite["faq"];
}) {
  return (
    <section className="travel-faq container" id="questions">
      <h2>{content.title}</h2>
      <div>
        {content.items.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <FiPlus aria-hidden="true" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
