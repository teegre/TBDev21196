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
  if (age < 20) ages.J.push(age);
  else if (age > 40 && age < 100) ages.V.push(age);
  else if (age >= 20 && age <= 40) ages.M.push(age);
  else if (age >= 100) ages.V.push(age);
}

// console.log('loop end: ' + age);

console.log('Nombre de jeunes : ' + ages.J.length + ' | ' + ages.J.join(', '));
console.log('Nombre de moyens : ' + ages.M.length + ' | ' + ages.M.join(', '));
console.log('Nombre de vieux  : ' + ages.V.length + ' | ' + ages.V.join(', '));
