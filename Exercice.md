## Création des entités :
* création du dossier "classes" permettant de créer chacune des 4 classes et une instance de chaque classe.
* ajout d'un fichier sql pour modeliser la base de données

## DAO
* Ayant d'avantage stravaillé en developpement front, faire un back sans framework était une première.
* Difficulté : je n'ai pas réussi à faire fonctionner la connection à la base de données mais je me suis inspirée de différents tutoriels et documentation pour tenter de faire mes premiers composants d'accès aux données (dossier "db")
> Ressources utilisées :
  * https://www.w3schools.com/sql/default.asp
  * https://dev.mysql.com/doc/
  * https://github.com/mysqljs/mysql
  * https://www.youtube.com/watch?v=EN6Dx22cPRI
  * https://gist.github.com/keyurgolani/6f5f78f8e2ad3a63c1321baa938a615c
  * https://foam-framework.github.io/foam/foam/demos/dao.html


## Création de l'API
* API sur le model MVC (sans view) : Les modèles gèrent les données (ici en json), les controllers gèrent les requêtes et interagissent avec les modèles pour renvoyer les bonnes données.
* API créée avec node.js (nodemon pour ne pas relancer le server à chaque fois)
* Les appels à l'API ont été testé sur Insomnia
* Tutoriel suivi pour la base de la construction :  https://youtu.be/_1xa8Bsho6A
>  Pour lancer l'api :
  * `npm install`
  * `npm start`


Le projet m'a demandé environ 5 jours de travail, une grande partie passée à lire de la documentation avant de me lancer.

