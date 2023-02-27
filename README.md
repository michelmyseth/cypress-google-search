# cypress-google-search

## Prerequisite

-   [Node.js](https://nodejs.org/)

## Install

Clone repository:

```sh
git clone https://github.com/michelmyseth/cypress-google-search.git
cd cypress-google-search
```

Install dependencies:

```sh
npm install
```

## Run

Open Cypress:

```sh
npm run test
```

## Subject and How i make it

# Énoncé du test

Aller chercher le titre des trois premiers résultats qui sortent dans la recherche google et les afficher dans le test

Bonus: comparer le titre du premier résultat et la chaine de caractères "les plus beaux", si le résultat est différent (Il devrait, ou ton google est truqué) alors le test est au vert, sinon il est au rouge.

# Démarche

Rédaction scénario gherkin par rapport à l'énoncé du test :

voir fichier googleSearch.feature qui se situe dans : cypress/google_search/cypress/e2e


-   visiter la page google.com
-   entrer le texte "vadesecure" dans la barre de recherche
-   valider
-   affichage résultat de recherche mentionne avec vadesecure

Par la suite j'ai effectué le test manuellement pour pouvoir contextualiser les contraintes que je pourrais rencontrer lors de la réalisation du test automatique et également confirmer que tout fonctionne correctement.

# Création test automatique

Création d'une variable d'env pour mon URL qui permet de rendre dynamique le code.

1. ## Visiter site

Visite du site google.com et utilisation de variable de env

2. ## Modale

Une modale s'ouvre _Condition d'utilisation_. J'ai tout d'abord observé les différents sélecteurs à ma disposition pour sélectionner le boutton Tout accepter.

J'ai décidé d'utiliser le sélecteur id, c'est le plus adéquat car il a le moins de risque de changer, comparé aux classes CSS.

J'effectue un clic pour passer la modale.

3. ## Barre de recherche

Pour effectuer une recherche, j'ai utilisé le sélecteur input avec le paramètre [name="q"] à la place d'une classe pour éviter les possibles changements de classe qui pourraient nuire au fonctionnement du test si changement réalisé dans le code.

Par la suite j'ai utilisé input[value="Recherche Google"]' pour soumettre la recherche.

4. ## Résultat de recherche et affichage

Pour récupérer les titres j'ai tout dabord inspecté les différents sélecteurs.

J'ai pu constater que le sélecteur id search contient la globalité des résultats de recherche.

Je me suis aperçu d'une simulitude de structure qui relie tous les titres id search a h3 qui me permettait de récuperer les titres sans passer par une classe.
Cependant, cela récuperait également les titres cachés dans la rubrique "autres questions posées", ce qui constitue un problème.

Pour y pallier, j'ai utilisé une classe qui regroupe tous les titres qui ne sont pas dans la rubrique "autres questions posées" et premier titre.
