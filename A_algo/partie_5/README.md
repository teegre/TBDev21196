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
  Ecrire "Erreur ! Entrer un nombre compris entre 1 et 3 :"
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

*Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne.*
*En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! »*  
*si le nombre est inférieur à 10*

Réponse :

```
Variable n en Numérique
Début
Ecrire "Entrer un nombre compris entre 1 et 10 :"
Lire n
TantQue (n < 10) Ou (n > 20)
  Si n < 10 Alors
    Ecrire "Plus grand !"
  SinonSi n > 20 Alors
    Ecrire "Plus petit !"
  Finsi
FinTantQue
Fin
```

## Exercice 5.3

*Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres*  
*suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18*  
*à 27*

Réponse :

```
Variables n et i en Numérique
Début
Ecrire "Entrer un nombre : "
Lire n
Pour i ← n à n + 10
  Ecrire i
i Suivant
Fin
```

## Exercice 5.4

*Ecrire un algorithme qui demande un nombre de départ, et qui ensuite écrit la table de*  
*multiplication de ce nombre, présentée comme suit (cas où l'utilisateur entre le nombre 7) :*

>  Table de 7 :

>  7 x 1 = 7

>  7 x 2 = 14

>  7 x 3 = 21

>  ...

>  7 x 10 = 70

Réponse :

```
Variables n et i en Numérique
Début
Ecrire "Entrer un nombre :"
Lire n
Ecrire "Table de " & n & " :"
Pour i ← 1 à 10
  Ecrire n & " x " & i & " = " & n * i
i Suivant
Fin
```

## Exercice 5.5

*Ecrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à*  
*ce nombre. Par exemple, si l’on entre 5, le programme doit calculer :*

>  1 + 2 + 3 + 4 + 5 = 15

*NB : on souhaite afficher uniquement le résultat, pas la décomposition du calcul.*

Réponse :

```
Variable n, i et resultat en Numérique
Début
Ecrire "Entrer un nombre : "
Lire n
resultat ← 0
Pour i ← 1 à n
  resultat ← resultat + i
i Suivant
Fin
```

## Exercice 5.6

*Ecrire un algorithme qui demande un nombre de départ, et qui calcule sa factorielle.*  
*NB : la factorielle de 8, notée 8 !, vaut :

>  1 x 2 x 3 x 4 x 5 x 6 x 7 x 8

Résultat :

```
Variable n, i et resultat en Numérique
Début
Ecrire "Entrer un nombre : "
Lire n
resultat ← 1
Pour i ← 2 à n
  resultat ← resultat * i
i Suivant
Fin
```

## Exercice 5.7

*Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise ensuite*  
*quel était le plus grand parmi ces 20 nombres :*

>  Entrez le nombre numéro 1 : 12

>  Entrez le nombre numéro 2 : 14

etc.

>  Entrez le nombre numéro 20 : 6

>  Le plus grand de ces nombres est : 14

*Modifiez ensuite l’algorithme pour que le programme affiche de surcroît en quelle position avait été*  
*saisie ce nombre :*

>  C’était le nombre numéro 2

Résultat 1 :

```
Variables n, i et r en Numérique
Début
r ← 0
Pour i ← 1 à 20
  Ecrire "Entrer le nombre " & i & " : "
  Lire n
  Si n > r Alors
    r = n
  Finsi
i Suivant
Ecrire "Le plus grand des nombres est : " & r
Fin
```

Résultat 2 :

```
Variables n, i, r, c en Numérique
Début
r ← 0
Pour i ← 1 à 20
  Ecrire "Entrer le nombre " & i & " : "
  Lire n
  Si n > r Alors
    r = n
    c = i
  Finsi
i Suivant
Ecrire "Le plus grand des nombres est : " & r
Ecrire "C'était le nombre numéro " & c
Fin
```

## Exercice 5.8

*Réécrire l’algorithme précédent, mais cette fois-ci on ne connaît pas d’avance combien l’utilisateur*  
*souhaite saisir de nombres. La saisie des nombres s’arrête lorsque l’utilisateur entre un zéro.*

Résultat :

```
Variables n, i, r, c en Numérique
Début
n ← 1
i ← 1
r ← 0
c ← 1
TantQue n <> 0
  Ecrire "Entrer le nombre " & i & " : "
  Lire n
  Si n > r Et n <> 0 Alors
    r = n
    c = i
  Finsi
  i ← i + 1
FinTantQue
Ecrire "Le plus grand des nombres est : " & r
Ecrire "C'était le nombre numéro " & c
Fin
```

## Exercice 5.9

*Lire la suite des prix (en euros entiers et terminée par zéro) des achats d’un client. Calculer la*  
*somme qu’il doit, lire la somme qu’il paye, et simuler la remise de la monnaie en affichant les*  
*textes "10 Euros", "5 Euros" et "1 Euro" autant de fois qu’il y a de coupures de chaque sorte à rendre.*

Réponse :

```
Variable prix, total, paiement, reste en Numérique
Début
prix ← 1
total ← 0
paiement ← 0
TantQue prix <> 0
  Ecrire "Prix (0 pour quitter): "
  Lire prix
  total = total + prix
FinTantQue
Ecrire "Total : " & total & "€"
TantQue paiement < total
  Ecrire "Paiement : "
  Lire paiement
FinTantQue
Si paiement > total
  reste ← paiement - total
  TantQue reste dp 10 Et reste > 0
    Ecrire "→ 10€"
    reste ← reste - 10
  FinTantQue
  TantQue reste dp 5 Et reste > 0
    Ecrire "→ 5€"
    reste ← reste - 5
  FinTantQue
  TantQue reste > 0
    Ecrire "→ 1€"
    reste ← reste - 1
  FinTantQue
Finsi
Ecrire "Merci de votre visite et à bientôt !"
Fin
```

## Exercice 5.10

*Écrire un algorithme qui permette de connaître ses chances de gagner au tiercé, quarté, quinté et
autres impôts volontaires.*  
*On demande à l’utilisateur le nombre de chevaux partants, et le nombre de chevaux joués. Les
deux messages affichés devront être :*

* Dans l’ordre : une chance sur X de gagner
* Dans le désordre : une chance sur Y de gagner

*X et Y nous sont donnés par la formule suivante, si n est le nombre de chevaux partants et p le*  
*nombre de chevaux joués (on rappelle que le signe ! signifie "factorielle", comme dans l'exercice 5.6*
*ci-dessus) :*

>  X = n ! / (n - p) !

>  Y = n ! / (p ! * (n – p) !)

*NB : cet algorithme peut être écrit d’une manière simple, mais relativement peu performante. Ses*  
*performances peuvent être singulièrement augmentées par une petite astuce. Vous commencerez*  
*par écrire la manière la plus simple, puis vous identifierez le problème, et écrirez une deuxième*  
*version permettant de le résoudre.*

Réponse 1 :

```
Variables n, p, x, y, fn, fp, fnp et i en Numérique
Début

fn  ← 1
fp  ← 1
fnp ← 1

Entrer "Nombre de chevaux partants : "
Lire n
Entrer "Nombre de chevaux joués : "
Lire p

Pour i ← 2 à n
  fn ← fn * i
i Suivant

Pour i ← 2 à p
  fp ← fp * i
i Suivant

Pour i ← 2 à (n - p)
  fnp ← fnp * i
i Suivant

x ← fn / fnp
y ← fn / (fp * fnp)

Ecrire "Vous avez 1 chance sur " & x & " de gagner le tiercé dans l'ordre."
Ecrire "Vous avez 1 chance sur " & y & " de gagner le tiercé dans le désordre."
Fin
```

Réponse 2 :

```
Variables n, p, x, y, fn, fp, fnp et i en Numérique
Début

fn  ← 1
fp  ← 1
fnp ← 1

Entrer "Nombre de chevaux partants : "
Lire n
Entrer "Nombre de chevaux joués : "
Lire p

Pour i ← 2 à n
  fn ← fn * i
  Finsi
  Si i <= p Alors
    fp ← fp * i
  Finsi
  Si i <= (n - p) Alors
  fnp ← fnp * i
  Finsi
i Suivant

x ← fn / fnp
y ← fn / (fp * fnp)

Ecrire "Vous avez 1 chance sur " & x & " de gagner le tiercé dans l'ordre."
Ecrire "Vous avez 1 chance sur " & y & " de gagner le tiercé dans le désordre."
Fin
```
