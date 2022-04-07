#! /usr/bin/env bash

rows=( "C" "BA" "CB" "BB" "F" "AE" "F" "A" "B" )
cols=( "AB" "CA" "AE" "GA" "E" "C" "D" "C" )
# rows=( "B" "AA" "AD" "FB" "GA" "EA" "CC" "CA" "BA" "F" )
# cols=( "AA" "BA" "FA" "G" "G" "ACA" "G" "AA" "H" "B" )
((row_count=${#rows[@]}))
((col_count=${#cols[@]}))

declare -a grid

ord() {
  # A=1, B=2 ... Z=26
  local d c=${1^^}
  printf -v d "%d" "'$c"
  ((d < 65 || d > 90)) && return
  echo $((d-64))
}

sum_blocks() {
  local blocks i sum
  blocks=$1
  sum=0
  for ((i=0;i<${#blocks};i++)); do
    ((sum+=$(ord "${blocks:i:1}")))
  done
  echo $((sum))
}

get_blocks() {
  local blocks len c
  blocks=$1
  len="${#blocks}"
  for ((c=0;c<len;c++)); do
    ord "${blocks:$c:1}"
  done
}


solve_rows() {
  local row col len blocks block_len sum block r i
  ((len=row_count))
  for ((row=0;row<len;row++)); do
    blocks="${rows[$row]}"
    block_len="${#blocks}"
    sum="$(sum_blocks "$blocks")"
    ((r=len+1-block_len-sum))
    echo -n "$row: r=$r ; "
    while read -r block; do
      echo -n "$block → $((block-r)) ; "
      ((block-r == 0)) && {
        ((col=block-1))
        mark_cell $((row)) $((col))
      }
    done < <(get_blocks "$blocks")
    echo
  done
}

solve_cols() {
  local row col len blocks block_len sum block r i
  ((len=col_count))
  for ((col=0;col<len;col++)); do
    blocks="${cols[$col]}"
    block_len="${#blocks}"
    sum="$(sum_blocks "$blocks")"
    ((r=len+1-block_len-sum))
    echo -n "$col: r=$r ; "
    while read -r block; do
      echo -n "$block → $((block-r)) ; "
      ((block-r == 0)) && {
        ((row=block-1))
        mark_cell $((row)) $((col))
      }
    done < <(get_blocks "$blocks")
    echo
  done
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
    echo "${rows[$i]}"
  done
}

make_grid
solve_rows
solve_cols
show_grid
