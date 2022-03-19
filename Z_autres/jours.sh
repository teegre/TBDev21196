#! /usr/bin/env bash

MOIS=( "Janvier" "Février" "Mars" "Avril" "Mai" "Juin" "Juillet" "Août" "Septembre" "Octobre" "Novembre" "Décembre" )

read -rp "Mois  : " mois

# On vérifie si un nombre a bien été saisi...
[[ $mois =~ [0-9]+ ]] || { echo "Erreur !"; exit 1; }
# ... et si le mois entré est bien compris entre 1 et 12.
(( mois >= 1 && mois <= 12 )) || { echo "Erreur !"; exit 1; }

# On demande l'année si le mois saisi est égal à 2.
(( mois == 2 )) && {
  read -rp "Année : " annee
  # On vérifie la validité de la saisie.
  [[ $annee =~ [0-9]+ ]] || { echo "Erreur !"; exit 1; }
  # Si l'année est bissextile, on assigne 29 à la variable jours, sinon 28.
  ((jours=( (annee % 4 == 0) && !(annee % 100== 0) || (annee % 400 == 0) ) == 1 ? 29 : 28))
  # On affiche le résultat.
  echo "${MOIS[$((mois-1))]} : $((jours)) jours."
  exit 0
}

# Soit 1 les mois de 31 jours 
# et   0 les mois de 30 jours
# on obtient :
# 101010110101 (Ce qui en décimal donne le nombre 2741 et en hexadécimal, AB5.)
# On déplaçe le nombre vers la droite de 11, 10, 9 rangs... jusqu'à 0, on obtient :
# (1)----------- 11 Janvier
# 1(0)---------- 10 Février
# 10(1)--------- 09 Mars
# 101(0)-------- 08 Avril
# 1010(1)------- 07 Mai
# 10101(0)------ 06 Juin
# 101010(1)----- 05 Juillet
# 1010101(1)---- 04 Août
# 10101011(0)--- 03 Septembre
# 101010110(1)-- 02 Octobre
# 1010101101(0)- 01 Novembre
# 10101011010(1) 00 Décembre
# Et on extrait le bit le plus à droite.
((jours=((0xAB5 >> 12 - mois) & 1) == 1 ? 31 : 30))
# On affiche le résultat.
echo "${MOIS[$((mois-1))]} : $((jours)) jours."
