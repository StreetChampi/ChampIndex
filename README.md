# Champi — version GitHub éditable

## Fichiers

- `index.html` — interface de l'application.
- `app.js` — moteur et interface de détermination.
- `data.js` — arbre de décision + résultats. **C'est le fichier que le back-office exporte.**
- `backoffice.html` — outil d'édition de l'arbre et de la taxonomie.

## Principe

Le back-office ne peut pas écrire directement dans GitHub depuis le navigateur.

Le cycle est donc :

1. ouvrir `backoffice.html` sur GitHub Pages ;
2. modifier l'arbre ou une fiche ;
3. télécharger `data.js` ;
4. remplacer `data.js` dans le dépôt GitHub ;
5. GitHub Pages republie l'application ;
6. ouvrir `index.html` pour voir les modifications.

Les illustrations ne font pas partie de cette architecture pour le moment.

## Important

`data.js` est volontairement séparé de `app.js`. Cela signifie qu'à l'avenir, l'ajout d'une ramification ou d'une fiche n'obligera pas à modifier le moteur de l'application.
