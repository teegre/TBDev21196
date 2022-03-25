function tableMultiplication(n) {
  var cap = document.getElementById('cap');
  cap.innerHTML = '<h1>Table des ' + n + '</h1>';

  var rows = document.getElementById('tbody');

  for (var i = 1; i < 11; i++) {
    var row =  document.createElement('tr');
    var f1 =   document.createElement('td');
    var x =    document.createElement('td');
    var f2 =   document.createElement('td');
    var eq =   document.createElement('td');
    var p  =   document.createElement('td');

    rows.appendChild(row);

    f1.innerHTML = n;
    x.innerHTML = 'x';
    f2.innerHTML = i;
    eq.innerHTML = '=';
    p.innerHTML = (i*n);

    row.appendChild(f1);
    row.appendChild(x);
    row.appendChild(f2);
    row.appendChild(eq);
    row.appendChild(p);
  }
}

var num = 0;

while (num == 0 || Number.isNaN(num)) {
  num = parseInt(prompt('Entrer un nombre entier positif :'));
  if (num > 0) tableMultiplication(num);
}
