var nom = window.prompt("Votre nom :");
var prenom = window.prompt("Votre prénom :");
var male = window.confirm("Etes-vous un homme ?");

if (male == true) {
  alert("Bonjour M. " + prenom + " " + nom);
  document.write("<p>M. " + prenom + " <b>" + nom + "</b></p>");
} else {
  alert("Bonjour Mme " + prenom + " " + nom);
  document.write("<p>Mme " + prenom + " <b>" + nom + "</b></p>");
}
