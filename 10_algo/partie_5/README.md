# PARTIE 5 - LES BOUCLES

## Exercice 5.1

*Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.*

Réponse :

```
Variable n en Numérique
Début
Ecrire "Entrer un nombre compris entre 1 et 3 :"
Lire n
TantQue n < 1 Ou n > 3
  Ecrire "Erreur! Entrer un nombre compris entre 1 et 3 :"
  Lire n
FinTantQue
Fin
```

Ou :

```
Variable n en Numérique
Début
n ←  0
TantQue n < 1 Ou n > 3
  Ecrire "Entrer un nombre compris entre 1 et 3 :"
  Lire n
FinTantQue
Fin
```

## Exercice 5.2

*Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10*

Réponse :

```
Variable n en Numérique
Début
Ecrire "Entrer un nombre compris entre 1 et 10 :"
Lire n
TantQue (n < 10) Ou (n > 20)
  Si n < 10 Alors
    Ecrire "Plus grand !"
  Finsi
  Si n > 20 Alors
    Ecrire "Plus petit !"
  Finsi
FinTantQue
Fin
```
