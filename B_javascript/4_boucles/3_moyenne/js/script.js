var nums = [];
let n = 1;

while (n != 0) {
  n = parseInt(prompt("Entrer un nombre entier (0 pour terminer) :"));
  if (n != 0 && !Number.isNaN(n)) nums.push(n);
}

let sum = 0;
for (const i of nums) {
  sum += i;
}

var mean = sum / nums.length;

console.log("Moyenne : " + mean);
