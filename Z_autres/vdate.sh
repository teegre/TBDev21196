#! /usr/bin/env bash

read -rp "Jour  : " jour
read -rp "Mois  : " mois
read -rp "Année : " annee

if (( jour < 1 )); then
  ((valide=0))
elif (( mois < 1 || mois > 12 )); then
  ((valide=0))
elif (( mois == 2 )); then
  ((bissextile=(annee % 4 == 0) && !(annee % 100 == 0) || (annee % 4 == 0)))
  if (( bissextile == 1 )) && ((jour > 29)); then
    ((valide=0))
  elif (( bissextile == 0 ))  && ((jour > 28)); then
    ((valide=0))
  else
    ((valide=1))
  fi
elif (( mois == 4 || mois == 6 || mois == 9 || mois == 11 )) && (( jour > 30 )); then
  ((valide=0))
elif (( jour > 31 )); then
  ((valide=0))
else
  ((valide=1))
fi

if (( valide == 1 )); then
  echo "Date valide."
else
  echo "Date invalide."
fi
