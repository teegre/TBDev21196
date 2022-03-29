#! /usr/bin/env bash

B=("0000" "0001" "0010" "0011" "0100" "0101" "0110" "0111" "1000" "1001")
# G="84218421"

b="\e[1m"      # bold
d="\e[2m"      # dim
c="\e[38;5;4m" # color
r="\e[m"       # reset

savecursor()    { echo -ne "\e[s" ;}
restorecursor() { echo -ne "\e[u" ;}
hidecursor()    { echo -ne "\e[?25l" ;}
showcursor()    { echo -ne "\e[?25h" ;}

exec {pause_fd}<> <(:)
pause() ( read -rt "$1" -u $pause_fd )

_sync() {
  local n=1
  local N
  while (( n !=0 )); do
    N="${EPOCHREALTIME#*,}"
    n=${N:0:1}
    pause 0.0625
  done
}

hidecursor; stty -echo -icanon time 0 min 0; clear

trap 'echo -en "\e[m"; showcursor; stty echo; exit' INT QUIT

savecursor

while :; do
  # shellcheck disable=SC2162
  IFS= read key
  case $key in
    q | Q) clear; break ;;
    r | R) clear; savecursor ;;
  esac

  _sync

  TIME="$(date '+%H %M %S')"

  # shellcheck disable=SC2162
  IFS=' ' read H M S <<< "$TIME"


  # echo -en "\e[38;5;1m"
  # echo "$G"

  h="${B[${H:0:1}]}${B[${H:1:1}]}"
  m="${B[${M:0:1}]}${B[${M:1:1}]}"
  s="${B[${S:0:1}]}${B[${S:1:1}]}"

  for ((i=0;i<${#h};i++)); do
    (( ${h:i:1} == 1 )) && echo -en "${c}${b}1${r}"
    (( ${h:i:1} == 0 )) && echo -en "${c}${d}0${r}"
  done
  echo

  for ((i=0;i<${#m};i++)); do
    (( ${m:i:1} == 1 )) && echo -en "${c}${b}1${r}"
    (( ${m:i:1} == 0 )) && echo -en "${c}${d}0${r}"
  done
  echo

  for ((i=0;i<${#s};i++)); do
    (( ${s:i:1} == 1 )) && echo -en "${c}${b}1${r}"
    (( ${s:i:1} == 0 )) && echo -en "${c}${d}0${r}"
  done
  echo

  restorecursor

  pause 0.5
done

echo -en "\e[m"
stty echo; showcursor
