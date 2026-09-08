// Configuration de l'appli. Les scripts de déploiement et de migration lisent
// et réécrivent ce fichier (une valeur par ligne, ne pas reformater).
export const CONFIG = {
  // URL du script Apps Script (web app « exécuter en tant que moi, accès anonyme »).
  // Vide tant que bin/wizard-apps-script.sh n'a pas été joué : l'appli passe alors
  // directement au classeur Export public puis au snapshot.
  scriptUrl: 'https://script.google.com/macros/s/AKfycbwSZkZMUmp63P8wU40x8mJXXqYQHJeHEwV4vUT92_OcoosJ46F9PcFUZN-IWzQsVl_x/exec',
  // Classeur « Festival — Export public (lu par l'appli) », lu via gviz (ADR-0003).
  sheetId: '1-1TURF3X40DQ1NvMUavUbyc7ZNsOl4rGTLqMgRsQFqc',
  // Hébergement GitHub Pages : même owner que l'éditeur APEL, dépôt apel-festival.
  owner: 'kripskroll',
  repo: 'apel-festival',
  urlPublique: 'https://kripskroll.github.io/apel-festival/',
  // Version de l'appli : change à chaque déploiement (bin/deploy.sh), pilote le cache du service worker.
  version: '2026.09.08-18e4c53',
  // Rafraîchissement des données (ms) et envoi des mesures (ms).
  // intervalleStats est à 180 s, pas 30 : le test de charge du 2026-09-08 a mesuré
  // que l'écriture de l'onglet Stats plafonne vers 2,2 requêtes par seconde (le
  // verrou du script sérialise), et qu'au-delà elle se dégrade en entraînant les
  // lectures avec elle. À 300 téléphones, 30 s donne 10 req/s — 4,5 fois trop ;
  // 120 s donne encore 2,5 ; 180 s donne 1,67, soit 24 % de marge. Ne pas baisser
  // sans relire docs/test-de-charge.md : c'est le tiers le plus lourd de la charge,
  // et retarder des mesures ne coûte rien au Visiteur, qui ne les voit jamais.
  intervalleDonnees: 60000,
  intervalleStats: 180000,
};
