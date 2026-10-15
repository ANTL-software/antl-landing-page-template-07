import { FiCalendar, FiMapPin } from "react-icons/fi";
import { BookingDemo } from "../../../booking";
import type { Experience, TourismSite } from "../../../types";
import "./BookingSection.css";
export function BookingSection({
  content,
  experiences,
  selected,
  onSelect,
}: {
  readonly content: TourismSite["booking"];
  readonly experiences: readonly Experience[];
  readonly selected: Experience;
  readonly onSelect: (id: string) => void;
}) {
  return (
    <section
      className="travel-booking"
      id="reserver"
      aria-labelledby="booking-title"
    >
      <div className="container travel-booking__grid">
        <div className="travel-booking__copy">
          <p className="eyebrow">
            <FiCalendar aria-hidden="true" />
            {content.eyebrow}
          </p>
          <h2 id="booking-title">{content.title}</h2>
          <p>{content.text}</p>
          <div className="booking-summary">
            <FiMapPin aria-hidden="true" />
            <div>
              <strong>{selected.name}</strong>
              <span>
                {selected.duration} · {selected.price}
              </span>
            </div>
          </div>
          <p className="demo-note">{content.note}</p>
        </div>
        <div className="booking-card">
          <label className="experience-select">
            {content.selectLabel}
            <select
              value={selected.id}
              onChange={(event) => onSelect(event.target.value)}
            >
              {experiences.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <BookingDemo
            key={selected.id}
            className="travel-booking-widget"
            title={content.widgetTitle}
            serviceId={selected.id}
            resourceId={`${content.resourceId}-${selected.id}`}
            timeZone={content.timeZone}
            durationMinutes={selected.minutes}
            storageKey={content.storageKey}
          />
        </div>
      </div>
    </section>
  );
}
