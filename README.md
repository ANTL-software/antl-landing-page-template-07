# antl — template 07 / Les Échappées — tourisme & réservation

Démonstration fictive React, Vite et TypeScript strict. Aucune référence client réelle.

## Démarrer

```bash
npm ci
npm run dev
npm run verify
```

## Personnaliser pour un client

- `src/models/site.ts` : tous les contenus, liens, titres, légendes, labels accessibles et paramètres métier. Le contrat est dans `src/types/site.ts`.
- `src/styles/theme.css` : couleurs, typographies, largeur de contenu et rythme des sections. Les styles de composants utilisent ces variables.
- `src/assets/` et son `index.ts` : images locales remplaçables, référencées par le modèle avec leur texte alternatif.
- `src/views/components/NomSection/` : chaque section possède son composant et sa feuille CSS. Les vues restent passives.
- `src/views/layouts/HomePage/` : ordre et présence des sections. Supprimer ou déplacer un composant ici pour composer une autre page.
- `src/hooks/` : état et actions. `src/services/` : communication avec un service externe lorsque nécessaire.
- Chaque dossier métier expose son API par `index.ts`. Aucune utilisation de `any`.

## Publication

Le workflow `.github/workflows/pages.yml` publie `dist/` sur GitHub Pages à chaque push sur `main`. Le chemin public est configuré dans `vite.config.ts`. Pour une autre URL, modifier ce chemin, le titre/description de `index.html`, le favicon et `public/404.html`.

## Crédits et limites

Photographies d’illustration sous licence Unsplash : voir `ASSETS.md`. La marque, les prestations et les tarifs éventuels sont fictifs. Avant une livraison client, remplacer les contenus, vérifier les droits des nouveaux visuels et renseigner les informations légales correspondant au client.

## Réservation

Le dossier `src/booking/` est copié **sans modification** depuis le template 06 (commit `7a67909`). Seul un barrel `index.ts` est ajouté. Le hook `useExperience` pilote la sélection et la section `BookingSection` applique le thème touristique.

Les créneaux de démo sont à 10 h, 14 h et 18 h, le lendemain par défaut. Chaque activité possède sa ressource dédiée, son identifiant et sa durée dans le modèle. Seuls le créneau et la ressource sont conservés en local, pas les coordonnées saisies. Aucune confirmation email n’est envoyée.

Pour une réservation réelle, utiliser `BookingProviderEmbed` avec un prestataire ou `BookingWidget` avec un client API ; voir `BOOKING_SETUP.md`. Conserver un contrôle des disponibilités côté serveur. Les mentions et états internes du module partagé se personnalisent dans `src/booking/react.tsx` si nécessaire.
