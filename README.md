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

### V5 — refonte de l’interface et simplification de la clé
- Nouvelle direction graphique mobile : en-tête vert olive, barre de progression plus visible, cartouche de question terracotta et réponses en cartes à deux colonnes.
- Harmonisation des boutons de navigation, de l’accueil et des fiches de résultats.
- Ajout du petit champignon illustré `champs-illus1.png` sur l’écran des questions.
- Libellés clarifiés : « Je n’arrive pas à dire » et « Voir toutes les espèces restantes ».
- Division des embranchements trop longs, notamment pour les russules, lactaires et plutées, afin de limiter chaque question à cinq réponses maximum.
- La clé des russules privilégie les critères observables et évite de proposer la dégustation comme étape de détermination.

### V5.1 — ajustements typographiques et navigation
- Agrandissement du nom Champi dans l’en-tête et renforcement de la visibilité de la progression.
- Polices de substitution déclarées pour approcher Barbra, Zing Rust Base et Special Elite. Les fichiers de ces polices ne sont pas embarqués dans le dépôt : le navigateur utilise donc les polices disponibles localement.
- Champignon positionné au niveau des boutons de navigation pour créer un effet d’ancrage visuel.
- Mise à jour des libellés et de l’action « Voir toutes les espèces restantes ».

## Fichiers

- `index.html` — application utilisateur
- `app.js` — moteur de la clé
- `data.js` — données éditoriales
- `backoffice.html` — outil d'édition
- `champi-cover.jpeg` — image de secours de la page de garde
- `champi-cover.mp4` — animation vidéo locale de la page de garde

Tout fonctionne sans connexion réseau une fois les fichiers téléchargés ensemble.


### V5.2 — corrections après retour sur iPhone
- Le titre de l’en-tête reste « Champi » sur l’accueil, pendant les questions et sur les résultats.
- Ajustement des marges, de la taille du bouton d’accueil et de la ligne de marque pour éviter le débordement sur iPhone 13.
- Barre de progression maintenue visible et adaptée à la largeur disponible.
- Repositionnement du champignon au niveau du bas des boutons de navigation pour rapprocher visuellement son pied de la zone des boutons.
- Préparation de l’intégration des polices personnalisées : déposer les fichiers dans `fonts/` pour pouvoir les déclarer avec `@font-face`.
