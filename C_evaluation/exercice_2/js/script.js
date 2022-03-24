function tableMultiplication(n) {
  var h = document.createElement("h1")
  h.innerHTML = 'Table de multiplication de ' + n;
  document.body.appendChild(h);
  for (var i = 1; i < 11; i++) {
    var span = document.createElement("span");
    span.innerHTML = i + ' x ' + n + ' = ' + (i*n) + '<br>';
    document.body.appendChild(span);
  }
}

var num = 0;

while (num == 0 || Number.isNaN(num)) {
  num = parseInt(prompt('Entrer un nombre entier positif :'));
  if (num > 0) tableMultiplication(num);
}
