function updateText() {
  var text = document.getElementById("techenv-listbox").value;
  // On ne modifie pas le texte si l'élément sélectionné
  // contient une chaîne vide.
  if (text != "") {
    document.getElementById("techenv-text").value = text;
  }
}
