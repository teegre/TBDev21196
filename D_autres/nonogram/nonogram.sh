#! /usr/bin/env bash

ord() {
  # A=1, B=2 ... Z=26
  local d c=$1
  printf -v d '%d' "'$c"
  ((d < 65 || d > 90 )) && return
  echo $((d-64))
}

grid() {

  for ((y=0;y<row_count;y++)); do
    for ((x=0;x<col_count;x++)); do
      echo -n " . "
    done
    cx="${rows[$y]}"
    for ((c=0;c<${#cx};c++)); do
      echo -n "$(ord "${cx:c:1}") "
    done
    echo
  done

  ((i=0))
  while ((i<row_count)); do
    for ((j=0;j<col_count;j++)); do
      cy="${cols[$j]}"
      if [[ ${cy:$i:1} == "" ]]; then
        echo -n "   "
      else
        echo -n " $(ord "${cy:$i:1}") "
      fi
    done
    echo
    ((i++))
  done
}

a_to_d() {
  local i j c d
  for ((i=0;i<row_count;i++)); do
    c="${rows[$i]}"
    for ((j=0;j<${#c};j++)); do
      d+="$(ord "${c:$j:1}")."
    done
    rows+=( "${d%.}" )
    unset d
  done
  for ((i=0;i<col_count;i++)); do
    c="${cols[$i]}"
    for ((j=0;j<${#c};j++)); do
      d+="$(ord "${c:$j:1}")."
    done
    cols+=( "${d%.}" )
    unset d
  done
}

sum_blocks() {
  local block i sum
  block=$1
  sum=0
  for ((i=0;i<${#block};i++)); do
    ((sum+=$(ord "${block:i:1}")))
  done
  echo $((sum))
}

solve_row() {
  local row_num len block block_len sum r i
  row_num=$1
  len=$col_count
  blocks="${rows[$row_num]}"
  block_len="${#blocks}"
  sum="$(sum_blocks "$blocks")"
  ((r=len+1-block_len-sum))
  for ((i=0;i<block_len;i++)); do
    block="${rows[row_num]}"
    block="$(ord "${block:$i:1}")"
    ((block-r > 0)) && echo -n " ${block} $((block-r)) ($r) "
    ((block-r > 0)) || echo -n " ${block} . ($r) "
  done
  echo
}

solve_col() {
  local col_num len block block_len sum r i j k grid_row
  col_num=$1
  row_num=0;
  len=$row_count
  blocks="${cols[$col_num]}"
  block_len="${#blocks}"
  sum="$(sum_blocks "$blocks")"
  ((r=len+1-block_len-sum))
  for ((i=0;i<block_len;i++)); do
    block="${cols[col_num]}"
    block="$(ord "${block:$i:1}")"
    ((r == 0)) && {
      for ((j=row_num;j<block;j++)); do
        row=${grid[$j]}
        for ((k=0;k<${#row};k++)); do
          ((k == col_num)) && grid_row+="#"
          ((k == col_num)) || grid_row+="${row:$k:1}"
        done
        grid[$row_num]="$grid_row"
        unset grid_row
      done
      ((row_num+=block))
    }
    ((block-r > 0)) && echo -n " ${block} $((block-r)) ($r) "
    ((block-r > 0)) || echo -n " ${block} . ($r) "
  done
  echo
}

declare -a rows
declare -a cols

# ((idx=0))

# while read -r; do
  # [[ $REPLY == "" ]] && {
    # IFS=' ' read -ra rows <<< "$nx"
    # IFS=' ' read -ra cols <<< "$ny"

    rows=( "C" "BA" "CB" "BB" "F" "AE" "F" "A" "B" )
    cols=( "AB" "CA" "AE" "GA" "E" "C" "D" "C" )
    grid=( "........" "........" "........" "........" "........" "........" "........" "........" "........" )

    ((row_count=${#rows[@]}))
    ((col_count=${#cols[@]}))

    # a_to_d
    # grid
    echo "rows: $row_count cols: $col_count"

    for ((i=0;i<row_count;i++)); do
      echo -n "${i}: "
      solve_row "$i"
    done
    for ((i=0;i<col_count;i++)); do
      echo -n "${i}: "
      solve_col "$i"
    done


    for g in "${grid[@]}"; do
      echo "$g"
    done

    echo "${rows[*]}"
    echo "${cols[*]}"

    # ((idx=0))
    # break
  # }
  # ((idx == 0)) && nx="$REPLY"
  # ((idx == 1)) && { ny="$REPLY"; ((idx=0)); continue; }
  # ((idx++))
# done < "./nonogram_problems.txt"

#   0  1  2  3  4  5  6  7
# 0 .  #  #  #  .  .  .  . C
# 1 #  #  .  #  .  .  .  . BA
# 2 .  #  #  #  .  .  #  # CB
# 3 .  .  #  #  .  .  #  # BB
# 4 .  .  #  #  #  #  #  # F
# 5 #  .  #  #  #  #  #  . AE
# 6 #  #  #  #  #  #  .  . F
# 7 .  .  .  .  #  .  .  . A
# 8 .  .  .  #  #  .  .  . B
#   A  C  A  G  E  C  D  C
#   B  A  E  A
