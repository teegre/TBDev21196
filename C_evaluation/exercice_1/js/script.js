function writeTd(id, value) {
  var td = document.getElementById(id);
  td.textContent = value;
}

var ages = { J: [], M: [], V: [] };
var age = 0;

while (age < 100) {
  age = parseInt(prompt('Entrer âge :'));
  // console.log(age);
  // console.log('isNaN? ' + (Number.isNaN(age)));
  // console.log('NaN<100? ' + (age < 100))
  if (age <= 0 || Number.isNaN(age)) {
    age = 0; // Pour une raison que j'ignore si age == NaN, la boucle se termine...
    continue;
  }

  if (age < 20) {
    ages.J.push(age);
    writeTd("jcount", ages.J.length);
  }

  else if (age > 40 && age < 100) {
    ages.V.push(age);
    writeTd("vcount", ages.V.length);
  }

  else if (age >= 20 && age <= 40) {
    ages.M.push(age);
    writeTd("mcount", ages.M.length);
  }

  else if (age >= 100) {
    ages.V.push(age);
    writeTd("vcount", ages.V.length);
  }
}

console.table(ages.J);
console.table(ages.M);
console.table(ages.V);
