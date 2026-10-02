# Champi — clé des champignons à lames

Webapp légère et utilisable hors ligne. Le fichier `data.js` contient les données éditoriales de l'arbre ; `backoffice.html` permet de les faire évoluer sans modifier le moteur.

## Historique des versions

### V1 — première clé
- Première version de la clé d'identification des champignons à lames.
- Arbre de questions et résultats intégrés directement dans l'application.

### V2 — fiches et expérience d'identification
- Ajout des fiches espèces et des informations de comestibilité.
- Amélioration du parcours d'identification et des résultats multiples.

### V3 — back-office
- Création d'un back-office avec vue de l'arbre et vue taxonomique.
- Création de questions, ramifications, groupes et espèces.
- Export du `data.js` depuis le back-office.

### V4 — arbre éditable
- Questions repliables et suppression sans supprimer les branches voisines.
- Sauvegarde locale pour éviter de perdre le travail avec un F5.
- Annuler / Rétablir.
- Fiches espèces complètes avec famille, genre et comestibilité.
- Indices « si confondu avec… ».
- Une réponse peut mener à plusieurs espèces.

### V4.3 — consolidation
- Conservation des branches lorsqu'un groupe intermédiaire est retiré.
- Édition depuis la taxonomie.
- Création immédiate de familles et de genres.
- Page de garde animée.

### V4.4 — édition plus fluide et nouvelle direction graphique
- Conservation du `data.js` de travail comme source de données.
- Une réponse peut désormais rester reliée à une question existante, à une nouvelle question, à une ou plusieurs espèces, ou à un groupe.
- Recherche d'espèces existantes via une saisie avec autocomplétion plutôt qu'une longue liste.
- Sélection multiple d'espèces depuis une même réponse.
- Interface back-office revue avec la palette Champi et une approche plus tactile / organique.
- Front-office revu dans la même direction graphique.
- Page de garde avec la vidéo locale `champi-cover.mp4`, avec image de secours `champi-cover.jpeg`.

## Fichiers

- `index.html` — application utilisateur
- `app.js` — moteur de la clé
- `data.js` — données éditoriales
- `backoffice.html` — outil d'édition
- `champi-cover.jpeg` — image de secours de la page de garde
- `champi-cover.mp4` — animation vidéo locale de la page de garde

Tout fonctionne sans connexion réseau une fois les fichiers téléchargés ensemble.
