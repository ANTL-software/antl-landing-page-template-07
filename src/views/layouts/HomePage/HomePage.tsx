import { tourismSite } from "../../../models";
import { useExperience } from "../../../hooks";
import {
  SiteHeader,
  HeroSection,
  IntroductionSection,
  ExperienceCollection,
  PhilosophySection,
  BookingSection,
  FaqSection,
  SiteFooter,
} from "../../components";
export function HomePage() {
  const experience = useExperience(tourismSite.experiences);
  return (
    <>
      <SiteHeader site={tourismSite} />
      <main id="contenu">
        <HeroSection content={tourismSite.hero} />
        <IntroductionSection content={tourismSite.introduction} />
        <ExperienceCollection
          content={tourismSite.collection}
          experiences={tourismSite.experiences}
          onSelect={experience.select}
        />
        <PhilosophySection content={tourismSite.philosophy} />
        {experience.selected && (
          <BookingSection
            content={tourismSite.booking}
            experiences={tourismSite.experiences}
            selected={experience.selected}
            onSelect={experience.select}
          />
        )}
        <FaqSection content={tourismSite.faq} />
      </main>
      <SiteFooter site={tourismSite} />
    </>
  );
}
