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
Si Tutu > Toto + 4
  Tutu ← Tutu + 1
Sinon
  Si Tata = "OK"
    Tutu ← Tutu + 1
  Sinon
    Tutu ← Tutu - 1
Finsi
```

## Exercice 4.2

*Cet algorithme est destiné à prédire l'avenir, et il doit être infaillible !  
Il lira au clavier l’heure et les minutes, et il affichera l’heure qu’il sera une minute plus tard. 
Par exemple, si l'utilisateur tape 21 puis 32, l'algorithme doit répondre :
"Dans une minute, il sera 21 heure(s) 33".

NB : on suppose que l'utilisateur entre une heure valide. Pas besoin donc de la vérifier.*

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
Ecrire "Dans une minute, il sera " & h & " heure(s) et " & m
Fin
```

## Exercice 4.3

*De même que le précédent, cet algorithme doit demander une heure et en afficher une autre. Mais cette fois, il doit gérer également les secondes, et afficher l'heure qu'il sera une seconde plus tard.  
Par exemple, si l'utilisateur tape 21, puis 32, puis 8, l'algorithme doit répondre : 
"Dans une seconde, il sera 21 heure(s), 32 minute(s) et 9 seconde(s)".

NB : là encore, on suppose que l'utilisateur entre une date valide.*

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
