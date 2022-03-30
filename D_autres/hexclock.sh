#! /usr/bin/env bash

tohex() { printf "%#04x" "$1"; }

hidecursor()    { echo -ne "\e[?25l"; }
showcursor()    { echo -ne "\e[?25h"; }
locate()        { local y x; y=$1; x=$2; printf '\e[%d;%dH' $((y)) $((x)); }
get_scr_size()  { shopt -s checkwinsize; (:;:); }
random_color()  { local C; ((C=(RANDOM%254)+1)); c="\e[38;5;${C}m"; }

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

r="\e[m"

hidecursor; stty -echo -icanon time 0 min 0; clear

trap 'echo -en "\e[m"; showcursor; stty echo; exit' INT QUIT

get_scr_size
((oy=(LINES/2)))
((x=(COLUMNS/2)-1))

random_color

declare h m s

while :; do
  # shellcheck disable=SC2162
  IFS= read key
  case $key in
    q | Q) clear; break ;;
    r | R) clear; h=""; m=""; s="" ;;
    c | C) random_color; h=""; m=""; s="" ;;
  esac

  _sync

  TIME="$(date '+%_H %_M %_S')"

  # shellcheck disable=SC2162
  IFS=' ' read H M S <<< "$TIME"

  oh=$(tohex "$H")
  om=$(tohex "$M")
  os=$(tohex "$S")

  ((y=oy))

  [[ $oh != "$h" ]] && { h=$oh; locate $((y)) $((x)); echo -en "${c}${h}${r}"; }
  ((y++))
  [[ $om != "$m" ]] && { m=$om; locate $((y)) $((x)); echo -en "${c}${m}${r}"; }
  ((y++))
  [[ $os != "$s" ]] && { s=$os; locate $((y)) $((x)); echo -en "${c}${s}${r}"; }

  pause 0.5
done

echo -en "${r}"
stty echo; showcursor
