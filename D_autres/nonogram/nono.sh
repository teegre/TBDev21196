#! /usr/bin/env bash

rows=( "C" "BA" "CB" "BB" "F" "AE" "F" "A" "B" )
cols=( "AB" "CA" "AE" "GA" "E" "C" "D" "C" )

((row_count=${#rows[@]}))
((col_count=${#cols[@]}))

declare -a grid

ord() {
  # A=1, B=2 ... Z=26
  local d c=$1
  printf -v d "%d" "'$c'"
  ((d < 65 || d > 90)) && return
  echo $((d-64))
}

mark_cell() {
  local row col mark x y i 
  row=$1
  col=$2
  mark="${3:-#}"

  x="${grid[$row]}"
  for ((i=0;i<col_count;i++)); do
    ((i == col)) && y+="$mark"
    ((i == col)) || y+="${x:i:1}"
  done
  grid[$row]="$y"
}

make_grid() {
  for ((i=0;i<row_count;i++)); do
    for ((j=0;j<col_count;j++)); do
      row+="."
    done
    grid+=( "$row" )
    unset row
  done
}

show_grid() {
  echo -n "__"

  for ((i=0;i<col_count;i++)); do
    echo -n " $i "
  done

  echo

  for ((i=0;i<row_count;i++)); do
    echo -n "$i "
    for ((j=0;j<col_count;j++)); do
      g="${grid[$i]}"
      echo -n " ${g:j:1} "
    done
    echo
  done
}

make_grid
mark_cell 4 4 x
show_grid
