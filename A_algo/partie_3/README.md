# PARTIE 3 - LES TESTS

## Exercice 3.1

*Ecrire un algorithme qui demande un nombre à l’utilisateur, et l’informe ensuite si ce nombre est positif ou négatif (on laisse de côté le cas où le nombre vaut zéro)*

Réponse :

```
Variable nombre en Numérique
Début
Ecrire "Entrer un nombre :"
Lire nombre
Si nombre < 0 Alors
  Ecrire "Le nombre est négatif."
Sinon
  Ecrire "Le nombre est positif."
Finsi
```

## Exercice 3.2

*Ecrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si leur produit est négatif ou positif (on laisse de côté le cas où le produit est nul). Attention toutefois : on ne doit pas calculer le produit des deux nombres*

Réponse :

```
Variables n1 et n2 en Numérique
Début
Ecrire "Entrer un nombre :"
Lire n1
Ecrire "Entrer un autre nombre :"
Lire n2
Si (n1 < 0 Et n2 < 0) Ou (n1 > 0 Et n2 > 0) Alors
  Ecrire "Le produit de ces deux nombres est positif."
SinonSi (n1 > 0 Et n2 < 0) Ou (n1 < 0 Et n2 > 0) Alors
  Ecrire "Le produit de ces deux nombres est négatif."
Finsi
Fin
```

## Exercice 3.3

*Ecrire un algorithme qui demande trois noms à l’utilisateur et l’informe ensuite s’ils sont rangés ou non dans l’ordre alphabétique.*

Réponse :

```
Variable nom1, nom2 et nom3 en Caractères
Début
Ecrire "Entrer nom 1 : "
Lire nom1
Ecrire "Entrer nom 2 : "
Lire nom2
Ecrire "Entrer nom 3 : "
Lire nom3
Si (nom1 < nom2) Et (nom2 < nom3) Alors
  Ecrire "Les noms sont rangés dans l'ordre alphabétique."
Sinon
  Ecrire "Les noms ne sont pas rangés dans l'ordre alphabétique."
Finsi
Fin
```

## Exercice 3.4

*Ecrire un algorithme qui demande un nombre à l’utilisateur, et l’informe ensuite si ce nombre est positif ou négatif (on inclut cette fois le traitement du cas où le nombre vaut zéro).*

Réponse :

```
Variable n en Numérique
Début
Ecrire "Entrer un nombre :"
Lire n
Si n = 0 Alors
  Ecrire "Le nombre est nul"
SinonSi n < 0 Alors
  Ecrire "Le nombre est négatif."
Sinon
  Ecrire "Le nombre est positif."
Finsi
Fin
```

## Exercice 3.5

*Ecrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si le produit est négatif ou positif (on inclut cette fois le traitement du cas où le produit peut être nul).*  
*Attention toutefois, on ne doit pas calculer le produit !*

Réponse :

```
Variables n1 et n2 en Numérique
Début
Ecrire "Entrer un nombre :"
Lire n1
Ecrire "Entrer un autre nombre :"
Lire n2
Si n 1 = 0 Ou n2 = 0 Alors
  Ecrire "Le produit de ces deux nombres est nul."
SinonSi (n1 < 0 Et n2 < 0) Ou (n1 > 0 Et n2 > 0) Alors
  Ecrire "Le produit de ces deux nombres est positif."
Sinon
  Si (n1 > 0 Et n2 < 0) Ou (n1 < 0 Et n2 > 0) Alors
  Ecrire "Le produit de ces deux nombres est négatif."
Finsi
Fin
```

# Exercice 3.6

*Ecrire un algorithme qui demande l’âge d’un enfant à l’utilisateur. Ensuite, il l’informe de sa catégorie :*

*  "Poussin" de 6 à 7 ans
*  "Pupille" de 8 à 9 ans
*  "Minime" de 10 à 11 ans
*  "Cadet" après 12 ans

*Peut-on concevoir plusieurs algorithmes équivalents menant à ce résultat ?*

Réponse 1 :

```
Variable age en Numérique
Début
Ecrire "Entrer âge :"
Lire age
Si age = 6 Ou age = 7 Alors
  Ecrire "Poussin"
SinonSi age = 8 Ou age = 9 Alors
  Ecrire "Pupille"
SinonSi age = 10 Ou age = 11 Alors
  Ecrire "Minime"
SinonSi age >= 12 Alors
  Ecrire "Cadet"
Finsi
Fin
```

Il est effectivement possible de concevoir plusieurs algorithmes qui mènent au même résultat.

Réponse 2 :

```
Variable age en Numérique
Début
Ecrire "Entrer âge :"
Lire age
Si age >= 6 Et age < 8 Alors
  Ecrire "Poussin"
SinonSi age < 10 Alors
  Ecrire "Pupille"
SinonSi age < 12 Alors
  Ecrire "Minime"
SinonSi age > 11 Alors
  Ecrire "Cadet"
Finsi
Fin
```
