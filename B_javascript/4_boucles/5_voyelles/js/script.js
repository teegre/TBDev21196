// mot
var m = prompt('Entrer un mot au clavier :');

if (m != null) {
  // voyelles
  var V = [ 'a', 'e', 'é', 'è', 'ê', 'ë', 'i', 'î', 'ï', 'o', 'ô', 'ö', 'u', 'ù', 'û', 'ü', 'y' ];
  // nombre de voyelles
  var v = 0;
  // lettre
  var l;

  for (var i = 0; i < m.length; i++) {
    l = m.substr(i, 1).toLowerCase();
    if (V.indexOf(l) != -1) v++;
  }

  if (v > 0) {
    console.log('Le mot ' + m + ' contient ' + v + ' voyelle(s).');
  } else {
    console.log('Le mot ' + m + ' ne contient pas de voyelles.');
  }
} else {
  console.log('Vous n\'avez pas entré de mot...');
}

