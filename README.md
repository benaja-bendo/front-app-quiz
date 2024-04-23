# App Quiz

## **1. Description du Projet**

QuizAI est une application de quiz interactive qui offre aux utilisateurs deux fonctionnalités principales :

- **Jouer à des quiz générés par l'IA:** QuizAI s'appuie sur le modèle puissant `gpt3-turbo` d'OpenAI pour créer des quiz uniques et stimulants sur une variété de sujets. Les utilisateurs peuvent profiter d'une expérience de quiz personnalisée et engageante.
    
- **Créer et partager des quiz:** L'application permet aux utilisateurs de devenir des créateurs de quiz en leur fournissant des outils intuitifs pour concevoir leurs propres quiz. Ils peuvent partager leurs créations avec la communauté QuizAI, permettant à d'autres de découvrir et de jouer à leurs quiz.

## **2. Fonctionnalités**

### 2.1 Fonctionnalités Backend

- **Connexion à OpenAI:** L'application se connecte à l'API OpenAI pour exploiter la puissance du modèle `gpt3-turbo` afin de générer des questions et des réponses de quiz de manière automatique.
    
- **Système d'authentification:** Un système d'authentification sécurisé est implémenté pour permettre aux utilisateurs de se connecter et de créer des comptes, gérant ainsi l'accès aux fonctionnalités de l'application.
    

### 2.2 Fonctionnalités Frontend

- **Interface utilisateur intuitive:** L'application offre une interface utilisateur conviviale et moderne, facilitant la navigation et l'utilisation des différentes fonctionnalités.
    
- **Système de quiz interactif:** Les utilisateurs peuvent jouer à des quiz générés par l'IA ou créés par d'autres utilisateurs, en suivant une interface de quiz fluide et interactive.
    

## **3. Prérequis Techniques**

### 3.1 Développement Backend

- **PHP:** L'application backend est développée en langage PHP, nécessitant une installation préalable de PHP  `php --version` et de Composer  `composer --version`.
    
- **Serveur MySQL:** Un serveur MySQL est requis pour stocker et gérer les données de l'application.
    

### 3.2 Développement Frontend

- **Node.js:** Le développement du frontend repose sur Node.js, nécessitant son installation préalable.
    
- **NPM:** NPM est utilisé pour gérer les dépendances JavaScript du projet frontend.
    

## **4. Lancement des Applications**

### 4.1 Lancement du Frontend

1. Cloner le dépôt Git du frontend:

```sh
git clone https://github.com/benaja-bendo/front-app-quiz.git
```


2. Installer les dépendances:

```sh
npm install
```


3. Lancer le serveur de développement:

```sh
npm run dev
```


4. Accéder à l'application sur http://localhost:5173

### 4.2 Lancement du Backend

1. Cloner le dépôt Git du backend:

```
git clone https://github.com/benaja-bendo/back-app-quiz.git
```

2. Copier le fichier d'environnement d'exemple:

```sh
cp .env.example .env
```

3. Installer les dépendances PHP:

```sh
composer install
```

4. Générer une clé pour l'application Laravel:

```sh
php artisan key:generate
```

5. Lancer le serveur de développement PHP:

```sh
php artisan serve
```

6. Accéder à l'application sur http://localhost:8000
