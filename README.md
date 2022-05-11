# Trombin-o-clock

## Gestion de projet

### Le mail du client

```
Bonjour, nous sommes une école qu'elle est bien, et nous voulons un outil pour faciliter les contacts entre étudiants.
Nous aimerions donc pouvoir lister les promotions ainsi que les étudiants qui les composent,
mais aussi accéder aux détails d'un étudiant, photo de profil comprise.
L'accès aux profils serait libre et gratuit.
Dans un second temps l'outil pourrait servir à éditer les profils et promotions.

En espérant que vous pourrez répondre favorablement à notre demande,
Cordialement

Nicole.
```

### De l'expression du besoin au cahier des charges

En partant de l'expression de besoin du client, nous allons traduire la demande de 2 manières :

- ça fait quoi ? (spécifications fonctionnelles, user stories)
- à quoi ça ressemble (wireframes)

#### Users Stories

Les users stories sont une description détaillée des différents scénarii d'utilisation de l'application/site

| #   | En tant que... | je veux...                                              | dans le but de (si besoin)                            |
| --- | -------------- | ------------------------------------------------------- | ----------------------------------------------------- |
| 1   | Visiteur       | une page d'accueil                                      | accéder aux fonctionnalités du site                   |
| 2   | Visiteur       | accéder à une liste des promos                          | de les consulter, ou d'accéder au détails d'une promo |
| 3   | Visiteur       | accéderau détail d'une promo                            | ...                                                   |
| 4   | Visiteur       | accéder à la liste des étudiants d'une promotion donnée | ...                                                   |
| 5   | Visiteur       | accéder à une liste exhaustive des étudiants            | ...                                                   |
| 6   | Visiteur       | accéder au profil d'un étudiant                         | ...                                                   |
| 7   | Administrateur | modifier les infos d'une promo                          | ...                                                   |
| 8   | Administrateur | modifier les infos d'un étudiant                        | ...                                                   |
|     | Visiteur       | Créer un compte                                         | d'accéder aux fonctionnalités des membres             |
|     | Membre         | pouvoir envoyer des messages aux autres memebres        | communiquer avec mes amis                             |
|     | Visiteur       | pouvoir rechercher un ou des étudiants et/ou promos     | trouver mes amis                                      |
|     | Visiteur       | pouvoir trouver les étudiants proche de moi             | ...                                                   |

#### Wireframes

Les wireframes sont un ensemble de schémas représentant de façon sommaire l'interface des différents écrans de notre application

Ce ne sont pas des maquettes, ici on cherche juste a savoir quelle fonctionnalité est disponible, à quel endroit, mais on se fiche de savoir si le logo sera rouge et bleu ou si les boutons auront des coins arrondis

Il existe de nombreux outils online ou offline pour créer des wireframes :

- wireframe.cc
- figma.com
- whimsical.com
- Balsamiq
- Adobe XD (attention l'outil est complexe et plus accès sur l'experience utilisateur que rééllement focus sur du wireframe)
- ...

### Méthodes agiles

Il existe de nombreuses méthodes de gestion de projet (waterfall, cycle en V, etc...).

Pour Trombin-o-clock on va utiliser une version simplifiée de la méthode SCRUM (mélée (de rugby)).

Nous créons un kanban avec 5 colonnes :

- Backlog : l'ensemble des tâches à accomplir pour finaliser le projet
- To do : la liste des tâches du sprint courant
- In progress : la liste des tâches en cours de développement
- To test : la liste des tâches terminées qu'il faut encore tester
- Done : la liste de tâches accomplies (développées et testées)

On rempli la colonne backlog avec les users stories et il va ensuite falloir les répartir en un certain nombre de sprints (itérations)

Pour trombin-o-clock, on va partir sur 3 sprints :

- sprint 0 : la mise en place de l'archi
- sprint 1 : visualisation des données
- sprint 2 : modification des données

## Challenge Épisode 1

### Lister les étudiants d'une promo

Énoncé du débrouillard: Dans la page détails d'une promo, ajouter un lien "voir les étudiants de la promo" et implémenter la fonctionnalité.

### Bonus

L'intégration faite par le stagiaire est ... sommaire. N'hésitez pas à la retravailler !

<details>
<summary>Énoncé détaillé</summary>

- La fonctionnalité concerne une seule promo, donc là encore on a besoin d'une route paramétrée pour cibler un ID. par exemple `/promo/:id/students`
- La méthode associée doit être dans un controller. Soit `promoController`, soit `studentController`, à vous de voir ce qui vous semble le plus logique, du moment que la méthode porte un nom explicite !
- Dans cette méthode il faut :
  - récupérer l'id de la promo ciblée
  - trouver la liste des étudiants de la promo. Importer la liste des étudiants depuis le json, et utiliser une boucle ou un [`.filter`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#syntaxe).
  - "render" la view, sans oublier de lui transmettre les données !
- Contruire la view en listant les étudiants
- Ne pas oublier d'ajouter le lien vers la fonctionnalité dans la page "détails d'une promo".
</details>
