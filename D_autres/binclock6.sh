#! /usr/bin/env bash

bold="\e[1m"
dim="\e[2m"
color="\e[38;5;1m"
rst="\e[m"

hidecursor()    { echo -ne "\e[?25l"; }
showcursor()    { echo -ne "\e[?25h"; }
locate()        { local y x; y=$1; x=$2; printf '\e[%d;%dH' $((y)) $((x)); }
get_scr_size()  { shopt -s checkwinsize; (:;:); }

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

hidecursor; stty -echo -icanon time 0 min 0

trap 'echo -en "\e[m"; showcursor; stty sane; echo; exit' INT QUIT
trap 'init_screen; reset_var' WINCH

init_screen() {
  clear;
  get_scr_size
  ((OY=(LINES/2)-2))
  ((OX=(COLUMNS/2)-8))
}


reset_var() { unset hy mm sd; }

tobin() {
  # convert an integer from decimal to binary.
  # usage: tobin <number> [bits]
  
  local n b d
  n=$1
  b=$2

  while ((n > 0)); do
    d="$((n%2))$d"
    ((n/=2))
    ((b--))
  done
  
  while ((b > 0)); do
    d="0${d}"
    ((b--))
  done
  
  echo "$d"
}

digit() {
  # print a 6 bits binary number and display
  # a guide that helps to read its value.

  # i.e.: 59
  # 32 16  8  .  2  1
  #  1  1  1  0  1  1


  local y x n i g
  y=$1
  x=$2
  n=$3
  ((g=32))

  for ((i=0;i<${#n};i++)); do
    locate $((y)) $((x))
    (( ${n:i:1} == 1 )) && {
      printf "%b%3s%b" "${color}${bold}" "$g" "${rst}"
      locate $((y+1)) $((x))
      printf "%b%3s%b" "${color}${bold}" "1" "${rst}"
    }
    (( ${n:i:1} == 0 )) && {
      printf "%b%3s%b" "${color}${dim}"  "." "${rst}"
      locate $((y+1)) $((x))
      printf "%b%3s%b" "${color}${dim}"  "0" "${rst}"
    }
    ((x+=3))
    ((g=g == 1 ? 32 : g/2))
  done
}


clock() {
  local TD HY MM SD
  [[ $SHOWDATE ]] || TD="$(date "+%_H %_M %_S")"
  [[ $SHOWDATE ]] && TD="$(date "+%_y %_m %_d")"
  # shellcheck disable=SC2162
  IFS=' ' read HY MM SD <<< "$TD"
  ((y=OY))
  ((x=OX))
  [[ $hy != "$HY" ]] && { hy=$HY; digit $((y)) $((x)) "$(tobin "$HY" 6)"; }
  ((y+=2))
  [[ $mm != "$MM" ]] && { mm=$MM; digit $((y)) $((x)) "$(tobin "$MM" 6)"; }
  ((y+=2))
  [[ $sd != "$SD" ]] && { sd=$SD; digit $((y)) $((x)) "$(tobin "$SD" 6)"; }
}

declare hy mm sd
init_screen
while :; do
  _sync
  clock
  pause 0.5
done

echo
stty sane; showcursor
