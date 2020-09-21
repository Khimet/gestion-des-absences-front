# Gestion des Absences - GDA

*Gestion des Absences* est une application web développée avec Spring et Angular par [Robin-lad](https://github.com/Robin-lad), [sanaeltahhan](https://github.com/sanaeltahhan), [Vokan](https://github.com/Vokan) et moi-même (Khimet). Ce projet a été développé en mode scrum sur un sprint de 12 jours.

## Présentation

Il s'agit d'une application qui a pour but de gérer les absences des employés d'une entreprise. Son utilisation met en jeu plusieurs rôles utilisateurs:

- Rôle employé: Crée une demande d'absences et la soumet à validation.
- Rôle manager: S'occupe de la validation des demandes.
- Rôle administrateur: Crée et gère les jours fériés et les RTT employeur de l'entreprise.

L'utilisation de cette application suit le processus suivant:

Tous utilisateurs est en mesure via cette application de faire une demande d'absence et de pouvoir gérer ces demandes via le processus suivant:

1. Ajout/Création

Les employés peuvent donc ajouter/créer une demande d'absence. L'administrateur peut ajouter/créer un jour férié ou un RTT employeur durant lesquels les employés ne travailleront pas et/ou l'entreprise sera fermée.

2. Visualisation

Chaque utilisateur dispose d'éléments de visualisations sous la forme de tableaux ou de graphiques de type histogramme.
L'employé visualise ses demandes d'absences sur un tableau et un calendrier sur lesquels sont representés ses absences. Il a accès également à la liste des jours fériés et des RTT employeurs définis par l'administrateur.
Le Manager possède plusieurs vues synthétiques lui permettant de visualiser les demandes d'absences des employés et va pouvoir décider de valider ou refuser les demandes.
L'administrateur quant à lui peut visualiser les jours fériés et RTT employeurs qu'il a crée.

3. Modification

Si la demande d'absence a été rejetée par le manager chaque employé va pouvoir revenir sur sa demande d'absence et la modifier. 
L'administrateur peut également modifier les jours fériés et RTT employeur qu'il a crée.

4. Suppression

Chaque employé a la possibilité de supprimer les absences qu'il a demandé. L'administrateur a également la possibilité de supprimer les jours fériés et RTT employeur qu'il a préalablement crée.

Au travers de cette application toute demande d'absence possède un cycle de vie où chaque demande va passer par des status différents: STATUS_INITIAL, STATUS_EN_ATTENTE_DE_VALIDATION, STATUS_VALIDE, STATUS_REJETE.

 

Lorsque une demande d'absence vient d'être faite par un employé celle-ci a un status INITIAL.

Un traitement automatique de nuit a été implémenté dans le processus, il a pour but de mettre à jour le status des demandes d'absences et de mettre à jour le compteur du nombre de congés payés et de RTT attribué à l'employé par année. En loccurence dans cette application chaque employé a droit à 25 jours de congés payés et 11 jours de RTT par an. 

Ce traitement de nuit change le status des demandes d'absences qui ont le status INITIAL pour le status EN_ATTENTE_DE_VALIDATION et décrémente d'un jour le compteur. 

Le manager pourra par la suite décider de passer la demande au status VALIDE ou au status REJETE. Si la demande est rejetée par le compteur des absences est réincrémenté d'un jour.

## Capture d'écrans - Démo

Page de connexion

![page_connexion](demo/firefox_p8VHQYJK4q.png)






# Front

Pour tester le code initial :

* Récupérer les dépendances :

```
npm install
```

* Démarrer le projet :

```
npm start
```

* Démarrer le projet `backend`.

* Ouvrer un navigateur à l'adresse : http://localhost:4200


