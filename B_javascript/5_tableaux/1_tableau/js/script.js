var t = parseInt(prompt('Taille du tableau :'));
var val = null;

if (!Number.isNaN(t)) {
  var T = new Array(t);
  for (var i = 0; i < t; i++) {
    while (val == null) {
      val = prompt('Entrer la valeur ' + (i+1) + ' :');
    }
    T[i] = val;
    val = null;
  }
  
  for (const e of T) {
    console.log(e);
  }
} else {
  alert('Annulé !');
}
