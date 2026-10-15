import { FiArrowUpRight, FiCompass } from "react-icons/fi";
import type { TourismSite } from "../../../types";
import "./SiteHeader.css";
export function SiteHeader({ site }: { readonly site: TourismSite }) {
  return (
    <>
      <a className="skip-link" href="#contenu">
        {site.labels.skip}
      </a>
      <header className="travel-header" id="top">
        <a
          className="travel-brand"
          href="#top"
          aria-label={`${site.brand}, ${site.labels.home}`}
        >
          <FiCompass aria-hidden="true" />
          <span>{site.brand}</span>
        </a>
        <nav aria-label={site.labels.navigation}>
          {site.navigation.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="button button--small" href={site.action.href}>
          {site.action.label}
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </header>
    </>
  );
}
