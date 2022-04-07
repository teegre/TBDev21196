#! /usr/bin/env bash

rows=( "C" "BA" "CB" "BB" "F" "AE" "F" "A" "B" )
cols=( "AB" "CA" "AE" "GA" "E" "C" "D" "C" )

# rows=( "B" "AA" "AD" "FB" "GA" "EA" "CC" "CA" "BA" "F" )
# cols=( "AA" "BA" "FA" "G" "G" "ACA" "G" "AA" "H" "B" )

# rows=( "AA" "A" "AA" )
# cols=( "AA" "A" "AA" )

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
  # AB → A+B = 1+2 = 3
  local blocks i sum
  blocks=$1
  sum=0
  for ((i=0;i<${#blocks};i++)); do
    ((sum+=$(ord "${blocks:i:1}")))
  done
  echo $((sum))
}

get_blocks() {
  # AB
  # 1
  # 2
  local blocks len c
  blocks=$1
  len="${#blocks}"
  for ((c=0;c<len;c++)); do
    ord "${blocks:$c:1}"
  done
}

solve_rows() {
  local row col yblocks yblocklen sum x

  for ((row=0;row<row_count;row++)); do

    yblocks="${rows[$row]}"
    yblocklen="${#yblocks}"
  
    sum="$(sum_blocks "$yblocks")"
    ((r=col_count-sum+yblocklen-1))
    while read -r block; do
      echo "block: $block r: $r"
      ((block > r)) && {
        ((col=col_count-block))
        echo "($row,$col) xblocks: $xblocks | block: $block | r: $r"
          ((len=sum+xblocklen-1 == row_count ? block : sum+xblocklen-1))
        for ((x=col;x<sum;x++)); do
          [[ $(read_cell $((row)) $((x))) == "#" ]] && continue
          mark_cell $((row)) $((x))
        done
      }
    done < <(get_blocks "$yblocks")
  done
}

solve_cols() {
  local row col xblocks xblocklen sum y

  for ((col=0;col<col_count;col++)); do

    xblocks="${cols[$col]}"
    xblocklen="${#xblocks}"
  
    sum="$(sum_blocks "$xblocks")"
    ((r=row_count-sum+xblocklen-1))
    while read -r block; do
      ((block > r)) && {
        ((row=row_count-block-xblocklen))
        echo "($row,$col) xblocks: $xblocks | block: $block | r: $r"
        ((len=sum+xblocklen-1 == row_count ? block : sum+xblocklen-1))
        for ((y=row;y<len;y++)); do
          [[ $(read_cell $((y)) $((col))) == "#" ]] && continue
          mark_cell $((y)) $((col))
        done
      }
    done < <(get_blocks "$xblocks")
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

read_cell() {
  local row col x y
  row=$1
  col=$2
  y="${grid[$row]}"
  x="${y:$col:1}"
  echo "$x"
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

get_row_max_blocklen() {
  local i sum=0
  for ((i=0;i<col_count; i++)); do
    [[ ${#cols[$i]} -gt sum ]] && sum=${#cols[$i]}
  done
  echo $((sum))
}

show_grid() {
  local yblocklen i j g
  yblocklen="$(get_row_max_blocklen)"
  maxblocklen=0;

  echo -n "  "

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

  while ((maxblocklen < yblocklen)); do
    echo -n "  "
    for ((i=0;i<col_count;i++)); do
      block="${cols[$i]}"
      block="${block:$maxblocklen:1}"
      [[ -n $block ]] && echo -n " $block "
      [[ -z $block ]] && echo -n "   "
    done
    ((maxblocklen++))
    echo
  done
}

make_grid
# solve_rows
solve_cols
show_grid
