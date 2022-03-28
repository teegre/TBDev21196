var formButton = document.getElementById("submit");
formButton.addEventListener('click', checkForm);

function checkForm(event) {

  // Nom
  var nom = document.getElementById("name");

  if (nom.validity.valueMissing) {
    event.preventDefault();
    alert("Entrez votre nom svp !");
    return
  }

  var regex = new RegExp("[A-Za-z]+");

  if (!regex.test(nom.value)) {
    event.preventDefault();
    alert("Nom invalide !");
    return
  }

  // Prénom
  var prenom = document.getElementById("firstname");
  if (prenom.validity.valueMissing) {
    event.preventDefault();
    alert("Entrez votre prénom svp !");
    return
  }

  if (!regex.test(prenom.value)) {
    event.preventDefault();
    alert("Entrez votre prénom svp !");
    return
  }

  // Genre
  if (!document.getElementById("female").checked && !document.getElementById("male").checked) {
    event.preventDefault();
    alert("Sélectionnez votre genre svp !");
    return
  }

  // Date de naissance
  if (!document.getElementById("birthdate").value) {
    event.preventDefault();
    alert("Entrez votre date de naissance svp !");
    return
  }

  // Code postal
  var regex_zip  = new RegExp("[0-9]{5}");
  var zipcode = document.getElementById("zipcode");

  if (zipcode.validity.valueMissing) {
    event.preventDefault();
    alert("Entrez votre code postal svp !")
    return
  }

  if (!regex_zip.test(zipcode.value)) {
    alert("Entrez le code postal sur 5 chiffres svp !");
    return
  }

  // E-mail
  // Pour info : https://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html
  var regex_email = new RegExp("^[A-Za-z0-9-_.]+@[a-zA-Z-_]+?\.[a-zA-Z]{2,3}$");
  var email = document.getElementById("email");

  if (email.validity.valueMissing) {
    event.preventDefault();
    alert("Entrez votre adresse e-mail svp !");
    return
  }

  if (!regex_email.test(email.value)) {
    event.preventDefault();
    alert("Entrez une adresse e-mail valide svp !");
    return
  }

  // Sujet
  var sujet = document.getElementById("subject");
  if (sujet.validity.valueMissing) {
    event.preventDefault();
    alert("Sélectionnez un sujet svp !");
    return
  }

  // Question
  var question = document.getElementById("question");
  if (question.validity.valueMissing) {
    event.preventDefault();
    alert("Entrez votre question svp !");
    return
  }

  // Traitement
  if (!document.getElementById("process").checked) {
    event.preventDefault();
    alert("Veuillez cocher la case svp !");
    return
  }
}
