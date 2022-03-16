# PARTIE 2 - LECTURE ET ECRITURE

## Exercice 2.1

*Quel résultat produit le programme suivant ?*

```
Variables val, double en Numérique
Début
Val ← 231
Double ← Val * 2
Ecrire Val
Ecrire Double
Fin
```

Réponse : Le programme affiche la valeur de `Val`, soit 231, puis la valeur de `Double`, soit 462.

## Exercice 2.2

*Ecrire un programme qui demande un nombre à l’utilisateur, puis qui calcule et affiche le carré de ce nombre.*

Réponse :

```
Variable nombre en Numérique
Début
Ecrire "Entrez un nombre: "
Lire nombre
Ecrire nombre ^ 2
Fin
```

## Exercice 2.3

*Ecrire un programme qui lit le prix HT d’un article, le nombre d’articles et le taux de TVA, et qui fournit le prix total TTC correspondant. Faire en sorte que des libellés apparaissent clairement.*

Réponse :

```
Variables PrixHT, Quantité, TauxTVA en Numérique
Début
Ecrire "Entrer le prix HT : "
Lire PrixHT
Ecrire "Entrer la quantité : "
Lire Quantité
Ecrire "Entrer le taux de TVA : "
Lire TauxTVA
Ecrire "Le prix TTC est :"
Ecrire (PrixHT + (PrixHT * (TauxTVA / 100))) * Quantité
```

## Exercice 2.4

*Ecrire un algorithme utilisant des variables de type chaîne de caractères, et affichant quatre variantes possibles de la célèbre « belle marquise, vos beaux yeux me font mourir d’amour ». On ne se soucie pas de la ponctuation, ni des majuscules.*

```
Variables A, B, C et D en Caractères
Début
A ← " belle marquise "
B ← " vos beaux yeux "
C ← " me font mourir "
D ← " d'amour "
Ecrire A & B & D & C
Ecrire B & C & D & A
Ecrire B & A & C & D
Ecrire B & A & D & C
Fin
```
