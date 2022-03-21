function bubbleSort(t) {
  // 3 1 2
  // 1 3 2
  // 1 2 3
  var len = t.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len-i-1; j++) {
      if (t[j] > t[j+1]) {
        var temp = t[j];
        t[j] = t[j+1];
        t[j+1] = temp;
      }
    }
  }
}

function showArray(t) {
  for (const e of t) console.log(e);
}

var T = new Array();

// La longueur du tableau est comprise entre 5 et 10.
l = Math.floor(Math.random() * 11)
T.length = (l < 5 ? 5 : l);

// On remplit le tableau avec des valeurs aléatoires comprises entre 0 et 100.
for (var i = 0; i < T.length; i++) {
  T[i] = Math.floor(Math.random() * 101);
}

console.log('*** Avant tri ***');
showArray(T);

// On trie
bubbleSort(T);

console.log('*** Après tri ***');
showArray(T);

