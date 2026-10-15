export interface SiteImage {
  readonly src: string;
  readonly alt: string;
}
export interface SiteLink {
  readonly label: string;
  readonly href: string;
}
export interface Experience {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly description: string;
  readonly duration: string;
  readonly minutes: number;
  readonly price: string;
  readonly image: SiteImage;
}
export interface TourismSite {
  readonly brand: string;
  readonly tagline: string;
  readonly navigation: readonly SiteLink[];
  readonly action: SiteLink;
  readonly hero: {
    readonly eyebrow: string;
    readonly title: string;
    readonly emphasis: string;
    readonly text: string;
    readonly image: SiteImage;
    readonly caption: string;
    readonly imageLabel: string;
    readonly discover: SiteLink;
  };
  readonly introduction: {
    readonly eyebrow: string;
    readonly title: string;
    readonly text: string;
    readonly notes: readonly string[];
  };
  readonly collection: {
    readonly eyebrow: string;
    readonly title: string;
    readonly text: string;
    readonly action: string;
  };
  readonly experiences: readonly Experience[];
  readonly philosophy: {
    readonly eyebrow: string;
    readonly title: string;
    readonly text: string;
    readonly image: SiteImage;
    readonly steps: readonly {
      readonly title: string;
      readonly text: string;
    }[];
  };
  readonly booking: {
    readonly eyebrow: string;
    readonly title: string;
    readonly text: string;
    readonly selectLabel: string;
    readonly widgetTitle: string;
    readonly note: string;
    readonly resourceId: string;
    readonly timeZone: string;
    readonly storageKey: string;
  };
  readonly faq: {
    readonly title: string;
    readonly items: readonly {
      readonly question: string;
      readonly answer: string;
    }[];
  };
  readonly footer: {
    readonly text: string;
    readonly notice: string;
    readonly copyright: string;
  };
  readonly labels: {
    readonly navigation: string;
    readonly skip: string;
    readonly home: string;
  };
}
