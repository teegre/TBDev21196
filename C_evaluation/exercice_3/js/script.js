var tab = [ 'Audrey', 'Flavien', 'Jérémy', 'Laurent', 'Melik', 'Nouara', 'Salem', 'Samuel', 'Stéphane' ];

function search(name) {
  for (var e of tab) {
    if (e.toLowerCase() == name) return tab.indexOf(e);
  }
  return -1;
}

function displayList() {
  document.getElementById('names').innerHTML = tab.join(' / ');
}

displayList();

let prenom = ' ';

while (prenom != '' && prenom != null) {
  prenom = prompt('Entrer un prénom à rechercher :');
  if (prenom != '' && prenom != null) {
    var index = search(prenom.toLowerCase())
    if (index != -1) {
      tab.splice(index, 1);
      tab.push('');
      displayList();
    } else alert('Non trouvé !');
  }
}
