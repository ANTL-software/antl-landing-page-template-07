import { forestImage, lakeImage, retreatImage } from "../assets";
import type { TourismSite } from "../types";

export const tourismSite = {
  brand: "Les Échappées",
  tagline: "La nature pour destination.",
  labels: {
    navigation: "Navigation principale",
    skip: "Aller au contenu",
    home: "Revenir à l’accueil",
  },
  navigation: [
    { label: "Nos escapades", href: "#escapades" },
    { label: "L’esprit", href: "#esprit" },
    { label: "Infos pratiques", href: "#questions" },
  ],
  action: { label: "Préparer mon échappée", href: "#reserver" },
  hero: {
    eyebrow: "Petites aventures · Grands souvenirs",
    title: "Moins de bruit.",
    emphasis: "Plus de nature.",
    text: "Un sentier, un lac, une journée ailleurs. Retrouvez le plaisir de prendre votre temps, tout simplement.",
    image: {
      src: lakeImage,
      alt: "Un lac paisible entouré de montagnes et de forêts à la lumière du soir",
    },
    caption: "Là où le temps ralentit.",
    imageLabel: "En pleine nature / à votre rythme",
    discover: { label: "Trouver mon escapade", href: "#escapades" },
  },
  introduction: {
    eyebrow: "L’invitation",
    title: "Pas besoin de partir loin pour se sentir ailleurs.",
    text: "Une parenthèse dehors, loin des journées qui défilent. Nos escapades invitent à explorer les paysages, à observer les petits détails et à revenir avec l’esprit un peu plus léger.",
    notes: [
      "En petit comité",
      "Des expériences à vivre",
      "Le plaisir de ralentir",
    ],
  },
  collection: {
    eyebrow: "Le carnet d’escapades",
    title: "À chacun son grand air.",
    text: "Plutôt un bord de lac, un chemin sous les arbres ou une pause au calme ?",
    action: "Choisir cette escapade",
  },
  experiences: [
    {
      id: "balade-lac",
      name: "Les rives tranquilles",
      category: "Contempler",
      description:
        "Une promenade douce au bord de l’eau pour regarder le paysage autrement.",
      duration: "1 heure",
      minutes: 60,
      price: "Dès 25 € / personne",
      image: { src: lakeImage, alt: "Reflets des montagnes sur un lac calme" },
    },
    {
      id: "sentier-foret",
      name: "Sous les feuillages",
      category: "Explorer",
      description:
        "Une immersion sur les sentiers, entre lumière, sous-bois et découvertes.",
      duration: "1 heure",
      minutes: 60,
      price: "Dès 30 € / personne",
      image: {
        src: forestImage,
        alt: "Un marcheur sur un sentier qui traverse une forêt",
      },
    },
    {
      id: "pause-nature",
      name: "La belle parenthèse",
      category: "Se retrouver",
      description:
        "Une heure pour découvrir un lieu et imaginer sa prochaine échappée.",
      duration: "1 heure",
      minutes: 60,
      price: "Dès 20 € / personne",
      image: {
        src: retreatImage,
        alt: "Une maison en bois ouverte sur un paysage naturel",
      },
    },
  ],
  philosophy: {
    eyebrow: "Notre façon de voyager",
    title: "Suivre les chemins. Pas la foule.",
    text: "On aime les sorties simples, les paysages qui restent en mémoire et les moments qu’on ne regarde pas à travers un écran.",
    image: {
      src: forestImage,
      alt: "La lumière naturelle traverse les arbres le long d’un chemin de randonnée",
    },
    steps: [
      {
        title: "Choisir son envie",
        text: "Une expérience qui correspond à votre rythme.",
      },
      {
        title: "Faire de la place",
        text: "Un créneau réservé pour profiter du dehors.",
      },
      {
        title: "Se laisser surprendre",
        text: "Le reste se découvre en chemin.",
      },
    ],
  },
  booking: {
    eyebrow: "Le début de l’aventure",
    title: "Votre prochaine bouffée d’air.",
    text: "Choisissez votre escapade, une date et un horaire. Il ne reste qu’à imaginer la suite.",
    selectLabel: "Votre escapade",
    widgetTitle: "Choisir mon créneau",
    note: "Vous explorez une démonstration : les prix et les activités sont illustratifs. Aucun paiement ni réservation réelle. Le créneau est mémorisé uniquement dans ce navigateur.",
    resourceId: "guide-demo",
    timeZone: "Europe/Paris",
    storageKey: "les-echappees-booking-demo",
  },
  faq: {
    title: "Avant de prendre le chemin.",
    items: [
      {
        question: "Faut-il prévoir un équipement particulier ?",
        answer:
          "Pour cette démo, imaginez une sortie à pied : chaussures confortables, eau et vêtements adaptés à la météo. Les informations propres à chaque activité seront précisées sur un site client.",
      },
      {
        question: "Peut-on venir en famille ?",
        answer:
          "Le niveau, l’âge conseillé et les conditions d’accueil sont à définir pour chaque expérience lors de la personnalisation du site.",
      },
      {
        question: "La réservation est-elle réelle ?",
        answer:
          "Non. Ce site est une démonstration fictive. Aucun guide n’est contacté et aucune somme n’est prélevée.",
      },
    ],
  },
  footer: {
    text: "Un peu moins de quotidien. Un peu plus d’horizon.",
    notice:
      "Une destination fictive, un aperçu des possibles. Démonstration de site par antl.",
    copyright: "© 2026 Les Échappées · Site de démonstration",
  },
} satisfies TourismSite;
