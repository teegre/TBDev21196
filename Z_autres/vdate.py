#! /usr/bin/env python

while True:
    try:
        jour = int(input('Jour  : '))
        break
    except ValueError:
        print('Un nombre est attendu...')
        continue

while True:
    try:
        mois = int(input('Mois  : '))
        break
    except ValueError:
        print('Un nombre est attendu...')

while True:
    try:
        annee = int(input('Année : '))
        break;
    except ValueError:
        print('Un nombre est attendu...')

if ( jour < 1 ):
    valide = False
elif ( mois < 1 ) or ( mois > 12 ):
    valide = False
elif ( mois == 2 ):
    bissextile = ( (annee % 4 == 0) and not (annee % 100 == 0) or (annee % 400 == 0) )
    if bissextile and ( jour > 29 ):
        valide = False
    elif not bissextile and ( jour > 28 ):
        valide = False
    else:
        valide = True
elif ( mois == 4 or mois == 6 or mois == 9 or mois == 11 ) and ( jour > 30 ):
    valide = False
elif ( jour > 31 ):
    valide = False
else:
    valide = True

if valide:
    print('Date valide.')
else:
    print('Date invalide.')
