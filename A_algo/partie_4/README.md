# PARTIE 4 - ENCORE DE LA LOGIQUE

## Exercice 4.1

*Formulez un algorithme équivalent à l’algorithme suivant :*

```
Si Tutu > Toto + 4 OU Tata = "OK" Alors
Tutu ← Tutu + 1
Sinon
Tutu ← Tutu – 1
Finsi
```

Réponse :

```
Debut
Si Tutu < Toto + 4 OU Tata <> "OK" Alors
  Tutu ← Tutu - 1
Sinon
  Tutu ← Tutu + 1
Finsi
Fin
```

## Exercice 4.2

*Cet algorithme est destiné à prédire l'avenir, et il doit être infaillible !  
Il lira au clavier l’heure et les minutes, et il affichera l’heure qu’il sera une minute plus tard.*  
*Par exemple, si l'utilisateur tape 21 puis 32, l'algorithme doit répondre :*

*"Dans une minute, il sera 21 heure(s) 33".*

*NB : on suppose que l'utilisateur entre une heure valide. Pas besoin donc de la vérifier.*

Réponse :

```
Variables h et m en Numérique
Début
Ecrire "Entrer les heures :"
Lire h
Ecrire "Entrer les minutes :"
Lire m
Si m + 1 = 60 Alors
  h ← h + 1
  Si h = 24 Alors
    h ← 0
  Finsi
  m ← 0
Sinon
  m ← m + 1
Finsi
Ecrire "Dans une minute, il sera " & h & " heure(s) " & m
Fin
```

## Exercice 4.3

*De même que le précédent, cet algorithme doit demander une heure et en afficher une autre.*  
*Mais cette fois, il doit gérer également les secondes, et afficher l'heure qu'il sera une seconde plus tard.*  
*Par exemple, si l'utilisateur tape 21, puis 32, puis 8, l'algorithme doit répondre :*

*"Dans une seconde, il sera 21 heure(s), 32 minute(s) et 9 seconde(s)".*

*NB : là encore, on suppose que l'utilisateur entre une date valide.*

Réponse

```
Variables h, m et s en Numérique
Début
Ecrire "Entrer les heures :"
Lire h
Ecrire "Entrer les minutes :"
Lire m
Ecrire "Entrer les secondes :"
Si s + 1 = 60 Alors
  m ← m + 1
  s ← 0
Finsi
Si m = 60 Alors
  h ← h + 1
  Si h = 24 Alors
    h = 0
  Finsi
  m ← 0
Finsi
Ecrire "Dans une seconde, il sera " & h & " heure(s), " & m & " minutes et " & s & " seconde(s)"
Fin
```

## Exercice 4.4

*Un magasin de reprographie facture 0,10 E les dix premières photocopies, 0,09 E les vingt suivantes*  
*et 0,08 E au-delà. Ecrivez un algorithme qui demande à l’utilisateur le nombre de photocopies*  
*effectuées et qui affiche la facture correspondante.*

Réponse :

```
Variable n et p en Numérique
Début
Ecrire "Entrer le nombre de photocopies :"
Lire n
Si n > 30 Alors
  p ← 2.8 + ((n - 30) * 0.08)
SinonSi n > 10 Alors
  p ← 1 + ((n - 10) * 0.09)
Sinon
  p ←  n * 0.1
Finsi
Ecrire "Total : " & p & "€"
Fin
```

## Exercice 4.5

*Les habitants de Zorglub paient l’impôt selon les règles suivantes :*

* les hommes de plus de 20 ans paient l’impôt
* les femmes paient l’impôt si elles ont entre 18 et 35 ans
* les autres ne paient pas d’impôt

*Le programme demandera donc l’âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le*  
*fait que l’habitant est imposable.*

Réponse :

```
Variables sexe en Caractère et age en Numérique
Début
Ecrire "Sexe (F ou M) ? : "
Lire sexe
Ecrire "Age ? : "
Si sexe = "M" Et age > 20 Alors
  Ecrire "Vous êtes imposable."
SinonSi sexe = "F" Et (age >= 18 Ou age <= 35) Alors
    Ecrire "Vous êtes imposable"
Sinon
  Ecrire "Vous n'êtes pas imposable."
Finsi
Fin
```

## Exercice 4.6

*Les élections législatives, en Guignolerie Septentrionale, obéissent à la règle suivante :*

* lorsque l'un des candidats obtient plus de 50% des suffrages, il est élu dès le premier tour.
* en cas de deuxième tour, peuvent participer uniquement les candidats ayant obtenu au moins 12,5% des voix au premier tour.

*Vous devez écrire un algorithme qui permette la saisie des scores de quatre candidats au premier tour.*  
*Cet algorithme traitera ensuite le candidat numéro 1 (et uniquement lui) : il dira s'il est élu,*  
*battu, s'il se trouve en ballottage favorable (il participe au second tour en étant arrivé en tête à*  
*l'issue du premier tour) ou défavorable (il participe au second tour sans avoir été en tête au premier tour).*

Réponse :

```
Variables r1, r2, r3, r4 et total en Numérique
Début
Ecrire "Résultat candidat 1 : "
Lire r1
Ecrire "Résultat candidat 2 : "
Lire r2
Ecrire "Résultat candidat 3 : "
Lire r3
Ecrire "Résultat candidat 4 : "
Lire r4
total ← r1 + r2 + r3 + r4
Si (r1 / total) >= 0.5 Alors
  Ecrire "Le candidat 1 est élu au premier tour."
SinonSi (r1 / total) >= 0.125 Alors
  Ecrire "Le candidat 1 peut participer au second tour."
  Si (r1 > r2) Et (r1 > r3) Et (r1 > r4) Alors
    Ecrire "Ballotage favorable."
  Sinon
    Ecrire "Ballotage défavorable."
  Finsi
Sinon
  Ecrire "Le candidat 1 est battu."
Finsi
Fin
```

## Exercice 4.7

*Une compagnie d'assurance automobile propose à ses clients quatre familles de tarifs identifiables
par une couleur, du moins au plus onéreux : tarifs bleu, vert, orange et rouge. Le tarif dépend de la
situation du conducteur :*

*  un conducteur de moins de 25 ans et titulaire du permis depuis moins de deux ans, se voit attribuer le tarif rouge, si toutefois il n'a jamais été responsable d'accident. Sinon, la compagnie refuse de l'assurer.
*  un conducteur de moins de 25 ans et titulaire du permis depuis plus de deux ans, ou de plus de 25 ans mais titulaire du permis depuis moins de deux ans a le droit au tarif orange s'il n'a jamais provoqué d'accident, au tarif rouge pour un accident, sinon il est refusé.
*  un conducteur de plus de 25 ans titulaire du permis depuis plus de deux ans bénéficie du tarif vert s'il n'est à l'origine d'aucun accident et du tarif orange pour un accident, du tarif rouge pour deux accidents, et refusé au-delà
*  De plus, pour encourager la fidélité des clients acceptés, la compagnie propose un contrat de la couleur immédiatement la plus avantageuse s'il est entré dans la maison depuis plus d'un an.

*Ecrire l'algorithme permettant de saisir les données nécessaires (sans contrôle de saisie) et de traiter ce problème. Avant de se lancer à corps perdu dans cet exercice, on pourra réfléchir un peu et s'apercevoir qu'il est plus simple qu'il n'en a l'air (cela s'appelle faire une analyse !)*

Réponse :

```
Variable age, permis, accident en Numérique et client en Booléen
Début
Ecrire "Age : "
Lire age
Ecrire "Nombre d'années de permis : "
Lire permis
Ecrire "Nombre d'accidents provoqués : "
Lire accident
Ecrire "Client depuis plus d'un an ? (O=1/N=0) : "
Lire client
Si (age < 25) Et (permis < 2)
  Si (accident = 0) Alors
    Si (client = VRAI) Alors
      Ecrire "Tarif bleu"
    Sinon
      Ecrire "Tarif rouge"
    Finsi
  Sinon
    Ecrire "Refusé"
  Finsi
SinonSi ( (age < 25) Et (permis > 2) ) Ou ( (age > 25) Et (permis < 2) ) Alors
  Si (accident = 0) Alors
    Si (client = VRAI) Alors
      Ecrire "Tarif bleu"
    Sinon
      Ecrire "Tarif orange"
    Finsi
  SinonSi (accident = 1) Alors
    Ecrire "Tarif rouge"
  Sinon
    Ecrire "Refusé"
  Finsi
SinonSi (age > 25) Et (permis > 2) Alors
  Si (accident = 0) Alors
    Si (client = VRAI) Alors
      Ecrire "Tarif bleu"
    Sinon
      Ecrire "Tarif vert"
    Finsi
  SinonSi (accident = 1) Alors
    Ecrire "Tarif orange"
  SinonSi (accident = 2) Alors
    Ecrire "Tarif rouge"
  Sinon
    Ecrire "Refusé"
  Finsi
Finsi
Fin  
```

# Exercice 4.8

*Ecrivez un algorithme qui, après avoir demandé un numéro de jour, de mois et d'année à l'utilisateur, renvoie s'il s'agit ou non d'une date valide.*  
*Cet exercice est certes d’un manque d’originalité affligeant, mais après tout, en algorithmique comme ailleurs, il faut connaître ses classiques ! Et quand on a fait cela une fois dans sa vie, on apprécie pleinement l’existence d’un type numérique « date » dans certains langages...).*  
*Il n'est sans doute pas inutile de rappeler rapidement que le mois de février compte 28 jours, sauf si l’année est bissextile, auquel cas il en compte 29. L’année est bissextile si elle est divisible par quatre. Toutefois, les années divisibles par 100 ne sont pas bissextiles, mais les années divisibles par 400 le sont. Ouf !*  
*Un dernier petit détail : vous ne savez pas, pour l’instant, exprimer correctement en pseudo-code l’idée qu’un nombre A est divisible par un nombre B. Aussi, vous vous contenterez d’écrire en bons télégraphistes que A divisible par B se dit « A dp B ».*

Résultat :

```
Variables jour, mois et annee en Numérique, bissextile et valide en Booléen
Début
Ecrire "Entrer le jour : "
Lire jour
Ecrire "Entrer le mois : "
Lire mois
Ecrire "Entrer l'année : "
Lire annee
bissextile ← (annee dp 4) Et ( (NON (annee dp 100)) Ou (annee dp 400) )
Si mois < 1 Ou mois > 12 Alors
  valide ← FAUX
SinonSi mois = 2 Alors
  Si bissextile Et jour > 29 Alors
    valide ← FAUX
  SinonSi NON bissextile Et jour > 28 Alors
    valide ← FAUX
  Finsi
SinonSi (jour < 1) Alors
  valide ← FAUX
SinonSi (mois = 1 Ou mois = 3 Ou mois = 5 Ou mois = 7 Ou mois = 8 Ou mois = 10 Ou mois = 12) Et (jour > 31) Alors
  valide ← FAUX
SinonSi (mois = 4 Ou mois = 6 Ou mois = 9 Ou mois = 11) Et (jour > 30) Alors
  valide ← FAUX
Sinon
  valide ← VRAI
FinSi
Si valide Alors
  Ecrire "La date est valide."
Sinon
  Ecrire "La date est invalide."
Finsi
Fin
```
