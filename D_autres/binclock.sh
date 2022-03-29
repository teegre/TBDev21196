#! /usr/bin/env bash

B=("0000" "0001" "0010" "0011" "0100" "0101" "0110" "0111" "1000" "1001")

savecursor()    { echo -ne "\e[s" ;}
restorecursor() { echo -ne "\e[u" ;}
hidecursor()    { echo -ne "\e[?25l" ;}
showcursor()    { echo -ne "\e[?25h" ;}

hidecursor; stty -echo; clear

trap 'showcursor; stty echo; exit' INT QUIT

savecursor


while :; do
  IFS= read -rsn 1 -t 0.25 key
  case $key in
    q | Q) clear; break ;;
    r | R) clear; savecursor ;;
  esac

  TIME="$(date '+%H %M %S')"

  # shellcheck disable=SC2162
  IFS=' ' read H M S <<< "$TIME"

  D=("${H:0:1}" "${H:1:1}" "${M:0:1}" "${M:1:1}" "${S:0:1}" "${S:1:1}")

  i=0
  for d in "${D[@]}"; do
    echo -ne "\e[38;5;1m\e[1m"
    echo -en "${B["$d"]}"
    ((i++))
    (( i % 2 == 0 )) && echo
    # (( i % 2 == 0 )) || echo -n "."
  done

  restorecursor

  sleep 0.25
done

stty echo; showcursor
