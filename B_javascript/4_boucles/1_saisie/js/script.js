var count = 0;
// var names = new Array();
var names = [];

// /!\ var name = ""
// /!\ while (name != null) {
// /!\ name = ...
// /!\ → endless loop...

let name = "a";

while (name != null && name != "") {
  name = prompt("Saisissez le prénom N° " + (count + 1) +" ou cliquez sur Annuler pour arrêter la saisie.");
  console.log(name);
  if (name != null && name != "") {
    names.push(name);
    count++;
  }
}

console.log("Vous avez entré " + names.length + " prénom(s).");

// single line if statement.
if (count > 0) console.log("En voici la liste :");

// iterate over indexes of an array
// for (var i in names) {
//   console.log(names[i]);
// }

// iterate over elements of an array.
for (const element of names) {
  console.log(element);
}

