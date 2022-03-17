var birth = window.prompt("Entrez votre année de naissance :");
var year = new Date().getFullYear();
var age = year - birth;
if (year != null) {
  (year < birth) ? console.log("Vous n'êtes pas encore né.") : console.log("Vous avez " + age + " ans.");
  (age >= 18) ? console.log("Vous êtes majeur.") : (year > birth) ? console.log("Vous êtes mineur.") : console.log("Vous êtes mineur... en quelque sorte...");
} else {
  alert("Tant pis...");
}
