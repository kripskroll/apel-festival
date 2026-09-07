// Configuration de l'appli. Les scripts de déploiement et de migration lisent
// et réécrivent ce fichier (une valeur par ligne, ne pas reformater).
export const CONFIG = {
  // URL du script Apps Script (web app « exécuter en tant que moi, accès anonyme »).
  // Vide tant que bin/wizard-apps-script.sh n'a pas été joué : l'appli passe alors
  // directement au classeur Export public puis au snapshot.
  scriptUrl: '',
  // Classeur « Festival — Export public (lu par l'appli) », lu via gviz (ADR-0003).
  sheetId: '',
  // Hébergement GitHub Pages : même owner que l'éditeur APEL, dépôt apel-festival.
  owner: 'kripskroll',
  repo: 'apel-festival',
  urlPublique: 'https://kripskroll.github.io/apel-festival/',
  // Version de l'appli : change à chaque déploiement (bin/deploy.sh), pilote le cache du service worker.
  version: '2026.09.07-f9e09ef',
  // Rafraîchissement des données (ms) et envoi des mesures (ms).
  intervalleDonnees: 60000,
  intervalleStats: 30000,
};
