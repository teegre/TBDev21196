var T = new Array();

function getInteger(msg, max) {
  var n = 0;
  while (n == 0 || Number.isNaN(n)) {
    n = parseInt(prompt(msg));
    if (n > max) n = 0;
  }
  return n;
}

function initTab() {
  // on demande la taille (t) du tableau
  var t = getInteger('Taille du tableau :');
  // et on initialise la longueur du tableau (T) en conséquence
  // Au début je voulais initialiser le tableau comme suit :
  // var T = new Array(t);
  // Mais dans ce cas, la variable T est locale à la fonction initTab().
  // Alors j'ai essayé :
  // let T = new Array(t);
  // Mais cela ne fonctionne pas non plus : j'obtiens une erreur
  // qui me signale que la variable T n'est pas définie.
  T.length = t;
}

function saisieTab() {
  for (var i = 0; i < T.length; i++) {
    T[i] = getInteger('Entrer la valeur ' + (i+1) + '/' + T.length + ' :');
  }
}

function afficheTab() {
  for (const e of T) console.log(e);
}

function rechercheTab() {
  var n = getInteger('Entrer l\'index [1-' + T.length + '] :', T.length);
  console.log(n + ' → ' + T[n-1]);
}

function infoTab() {
  var max = 0;
  var add = 0;
  for (const e of T) {
    if (e > max) max = e;
    add += e;
  }
  console.log('Valeur maximum : ' + max);
  console.log('Moyenne : ' + (add / T.length));
}

initTab();
saisieTab();
