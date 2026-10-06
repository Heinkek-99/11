# Analyse de données et application Laravel

Ce dépôt rassemble deux travaux d'analyse de données et une application web Laravel.

## Travaux d'analyse

- `GEMA_DA_Maching_Learning_devoir.ipynb` : travail d'apprentissage automatique, de la préparation
  des données à l'évaluation d'un modèle
- `Projet_Analyse_des_données_avec_python.ipynb` : analyse exploratoire de données avec Python

Les deux notebooks se lisent directement sur GitHub.

## Application Laravel

Squelette Laravel complet : authentification (connexion, inscription, réinitialisation de mot de
passe, vérification d'email), contrôleurs, modèles et migrations.

## Lancer l'application

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

## Remarque

Le fichier README d'origine était celui de Laravel, il ne disait rien de ces travaux. Les deux
notebooks et l'application n'ont pas de lien entre eux : à séparer à terme.
