# Champi — version back-office améliorée

Fichiers à mettre à la racine de ChampIndex :
- index.html
- app.js
- data.js
- backoffice.html
- champi-cover.jpeg

Le back-office conserve automatiquement les modifications dans le navigateur.
Il permet notamment :
- arbre décisionnel repliable ;
- suppression d'une question sans supprimer les branches voisines ;
- retrait d'un groupe en conservant toutes ses questions ;
- plusieurs espèces comme issues d'une même réponse ;
- choix entre espèce existante ou création d'une nouvelle ;
- édition depuis la vue taxonomique ;
- familles/genres via menus et création immédiate d'une nouvelle valeur ;
- indices « si confondu avec… » ;
- annuler/rétablir ;
- sauvegarde locale anti-F5.

La page de garde utilise `champi-cover.jpeg` avec une animation CSS légère afin de rester hors ligne et légère.
