#! /usr/bin/env bash

M=( "Jan" "Fév" "Mar" "Avr" "Mai" "Jun" "Jul" "Aoû" "Sep" "Oct" "Nov" "Déc" )

# Si le mois a été saisi en argument de la commande...
m=$1

# Sinon on demande la saisie.
[[ $m ]] || read -rp "Mois  : " m

# On vérifie si un nombre a bien été saisi...
[[ $m =~ [0-9]+ ]] || { echo "Erreur !"; exit 1; }

# ... et si le mois entré est bien compris entre 1 et 12.
(( m >= 1 && m <= 12 )) || { echo "Erreur !"; exit 1; }

# On demande l'année si le mois saisi est égal à 2.
(( m == 2 )) && {
  read -rp "Année : " a

  # On vérifie la validité de la saisie.
  [[ $a =~ [0-9]+ ]] || { echo "Erreur !"; exit 1; }

  # Si l'année est bissextile, on assigne 29 à la variable j, sinon 28.
  ((j=( (a % 4 == 0) && !(a % 100== 0) || (a % 400 == 0) ) == 1 ? 29 : 28))

  # On affiche le résultat.
  echo "${M[$((m-1))]}   → $j jours."
  exit 0
}

# Soit 1 les mois de 31 jours 
# et   0 les mois de 30 jours
# on obtient :
#
# Jan Fév Mar Avr Mai Jun Jul Aoû Sep Oct Nov Déc
# 11  10  09  08  07  06  05  04  03  02  01  00
# 1   0   1   0   1   0   1   1   0   1   0   1
#
# 101010110101, ce qui en décimal donne le nombre 2741 et en hexadécimal, 0xAB5.
#
# En procédant à un déplacement du nombre vers la droite (right shift) de 11, 10,
# 9 rangs... jusqu'à 0, on obtient :
#
# (OxAB5 >> 11) : 1-----------
# (OxAB5 >> 10) : 10----------
# (OxAB5 >> 09) : 101---------
# (OxAB5 >> 08) : 1010--------
# (OxAB5 >> 07) : 10101-------
# (OxAB5 >> 06) : 101010------
# (OxAB5 >> 05) : 1010101-----
# (OxAB5 >> 04) : 10101011----
# (OxAB5 >> 03) : 101010110---
# (OxAB5 >> 02) : 1010101101--
# (OxAB5 >> 01) : 10101011010-
# (OxAB5 >> 00) : 101010110101
#
# Et on isole le bit le plus à droite.

((j=((0xAB5 >> 12 - m) & 1) == 1 ? 31 : 30))

# On affiche le résultat.
echo "${M[$((m-1))]}   → $j jours."
