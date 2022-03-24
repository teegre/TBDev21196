var tab = [ 'Audrey', 'Flavien', 'Jérémy', 'Laurent', 'Melik', 'Nouara', 'Salem', 'Samuel', 'Stéphane' ];

function search(name) {
  for (var e of tab) {
    if (e.toLowerCase() == name) return tab.indexOf(e);
  }
  return -1;
}

function print(msg) {
  document.getElementById('names').innerHTML = msg;
}

function displayList() {
  print(tab.join(' / '));
}

displayList();

let prenom = ' ';
var count = 0;
var over = false;

while (count < tab.length) {
  prenom = prompt('Entrer un prénom à rechercher :');
  if (prenom != '' && prenom != null) {
    var index = search(prenom.toLowerCase())
    if (index != -1) {
      tab.splice(index, 1);
      tab.push('');
      displayList();
      count++;
    } else {
      alert('Non trouvé !');
      break;
    }
  }
}

if (count == tab.length) print('Gagné !');
else print('Perdu !');
