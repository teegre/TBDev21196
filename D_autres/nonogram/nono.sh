#! /usr/bin/env bash

rows=( "C" "BA" "CB" "BB" "F" "AE" "F" "A" "B" )
cols=( "AB" "CA" "AE" "GA" "E" "C" "D" "C" )

# rows=( "B" "AA" "AD" "FB" "GA" "EA" "CC" "CA" "BA" "F" )
# cols=( "AA" "BA" "FA" "G" "G" "ACA" "G" "AA" "H" "B" )

# rows=( "AA" "A" "AA" )
# cols=( "AA" "A" "AA" )

rows=( "AB" "A" "DA" "EA" "G" "AAAA" "AF" "CD" "DC" "AB" )
cols=( "AH" "CB" "CB" "CA" "D" "AAAA" "AD" "C" "E" "AAD" )

# rows=( "AH" "I" "HA" "AEB" "BCC" "AH" "I" "BCC" "AH" "CD" )
# cols=( "AH" "BABA" "DBB" "I" "I" "I" "DBB" "CF" "BG" "FC" )


height="${#rows[@]}"
width="${#cols[@]}"

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

solve() {
  # pos:    position
  # dir:    direction : 0=horizontal 1=vertical
  # size:   grid height or width
  # len:    blocks length
  # sum:    sum of blocks
  # spaces: number of spaces between blocks (AAF → spaces=2)

  local pos dir size row col blocks len sum spaces block
  pos=$1
  dir=${2:-1}

  case $dir in
    0) blocks="${rows[$pos]}"; size="width"; ((row=pos)); col=0 ;;
    1) blocks="${cols[$pos]}"; size="height"; ((col=pos)); row=0; local _v=1 ;;
  esac

  len="${#blocks}"
  sum="$(sum_blocks "$blocks")"
  ((spaces=len > 1 ? len - 1 : len == 1 ? 0 : 1))

  echo "pos: $pos [$dir] | size: $size | $blocks | sum: $sum | spaces: $spaces"

  (( sum+spaces == size && len > 1 )) && {
    # row/col is solved
    while read -r block; do
      draw_line $((dir)) $((col)) $((row)) $((block))
      [[ $_v ]] && ((row+=block))
      [[ $_v ]] || ((col+=block))
      ((spaces > 0)) && {
        draw_line $((dir)) $((col)) $((row)) 1 " "
        [[ $_v ]] && ((row++))
        [[ $_v ]] || ((col++))
        ((spaces--))
      }
    done < <(get_blocks "$blocks")
    return 0
  }

  local n fill

  [[ $_v ]] && { ((n=width-sum+spaces));  ((row+=n)); }
  [[ $_v ]] || { ((n=height-sum+spaces)); ((col+=n)); }

  while read -r block; do
    (( block > n )) &&  {
      local fill
      ((fill=block-n))
      draw_line $((dir)) $((col)) $((row)) $((fill))
    }
  done < <(get_blocks "$blocks")

  

}

mark_cell() {
  local col row mark col x y i 
  col=$1
  row=$2
  mark="${3:-#}"

  x="${grid[$row]}"
  for ((i=0;i<width;i++)); do
    ((i == col)) && y+="$mark"
    ((i == col)) || y+="${x:i:1}"
  done
  grid[$row]="$y"
}

read_cell() {
  local col row x y
  col=$1
  row=$2
  y="${grid[$row]}"
  x="${y:$col:1}"
  echo "$x"
}

is_space() {
  [[ $(read_cell "$1" "$2") =~ [[:space:]] ]] && return 0
  return 1
}

is_marked() {
  [[ $(read_cell "$1" "$2") =~ \# ]] && return 0
  return 1
}

is_empty() {
  [[ $(read_cell "$1" "$2") =~ \. ]] && return 0
  return 1
}

draw_line() {
  local dir col row len mark
  dir=$1
  col=$2
  row=$3
  len=$4
  mark=$5
  
  while ((len > 0)); do
    mark_cell $((col)) $((row)) "$mark"
    case $dir in
      0) ((col++)) ;;
      1) ((row++)) ;;
    esac
    ((len--))
  done
}

make_grid() {
  for ((i=0;i<height;i++)); do
    for ((j=0;j<width;j++)); do
      local row+="."
    done
    grid+=( "$row" )
    unset row
  done
}

get_row_max_blocklen() {
  local i sum=0
  for ((i=0;i<width; i++)); do
    [[ ${#cols[$i]} -gt sum ]] && sum=${#cols[$i]}
  done
  echo $((sum))
}

show_grid() {
  local yblocklen i j g
  yblocklen="$(get_row_max_blocklen)"
  maxblocklen=0;

  echo -n "  "

  for ((i=0;i<width;i++)); do
    echo -n " $i "
  done

  echo

  for ((i=0;i<height;i++)); do
    echo -n "$i "
    for ((j=0;j<width;j++)); do
      g="${grid[$i]}"
      echo -n " ${g:j:1} "
    done
    echo "${rows[$i]}"
  done

  while ((maxblocklen < yblocklen)); do
    echo -n "  "
    for ((i=0;i<width;i++)); do
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
for ((c=0;c<width;c++ )); do solve $((c)) 1; done
for ((r=0;r<height;r++ )); do solve $((r)) 0; done
show_grid
