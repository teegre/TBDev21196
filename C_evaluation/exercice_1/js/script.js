var ages = { J: [], M: [], V: [] };
var age = 0;

while (age < 100) {
  age = parseInt(prompt('Entrer âge :'));

  if (age <= 0) continue;
  if (age < 20) ages.J.push(age);
  else if (age > 40 && age < 100) ages.V.push(age);
  else if (age >= 20 && age <= 40) ages.M.push(age);
  else if (age >= 100) ages.V.push(age);
}

console.log('Nombre de jeunes : ' + ages.J.length);
console.log('Nombre de moyens : ' + ages.M.length);
console.log('Nombre de vieux  : ' + ages.V.length);
