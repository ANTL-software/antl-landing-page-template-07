import { FiCompass, FiArrowUp } from "react-icons/fi";
import type { TourismSite } from "../../../types";
import "./SiteFooter.css";
export function SiteFooter({ site }: { readonly site: TourismSite }) {
  return (
    <footer className="travel-footer">
      <div className="container">
        <div className="travel-footer__top">
          <a className="travel-brand" href="#top">
            <FiCompass aria-hidden="true" />
            {site.brand}
          </a>
          <p>{site.footer.text}</p>
          <a className="back-top" href="#top" aria-label={site.labels.home}>
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
        <div className="travel-footer__bottom">
          <p>{site.footer.notice}</p>
          <p>{site.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
