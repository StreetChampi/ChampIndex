# Champi -- architecture éditable

- `index.html` -- application
- `app.js` -- moteur/interface
- `data.js` -- arbre, groupes et fiches
- `backoffice.html` -- construction visuelle de l'arbre

## Back-office v2

Une réponse peut maintenant :
- créer une nouvelle question directement à cet endroit ;
- créer un groupe intermédiaire ;
- créer une fiche espèce ;
- affiner un résultat existant ;
- transformer un résultat provisoire en groupe à affiner.

Le workflow est : Back-office → Publier → Télécharger `data.js` → remplacer `data.js` dans GitHub.
