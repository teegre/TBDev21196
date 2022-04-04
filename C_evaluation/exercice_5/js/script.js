function checkForm(event) {

  // Nom
  var nom = document.getElementById("name");

  if (nom.validity.valueMissing) {
    event.preventDefault();
    nom.focus();
    nom.placeholder = "Votre nom";
    var err = document.getElementById("err-name")
    nom.addEventListener(["change", "", function () {
      err.textContent = "";
    });
    err.style.color = "red";
    err.textContent = "Requis";
    return
  }

  var regex = new RegExp("[A-Za-z-]+");

  if (!regex.test(nom.value)) {
    event.preventDefault();
    alert("Nom invalide !");
    nom.focus();
    return
  }

  // Prénom
  var prenom = document.getElementById("firstname");
  if (prenom.validity.valueMissing) {
    event.preventDefault();
    alert("Entrez votre prénom svp !");
    prenom.focus();
    prenom.placeholder = "Votre prénom"
    return
  }

  if (!regex.test(prenom.value)) {
    event.preventDefault();
    alert("Prénom invalide !");
    prenom.focus();
    return
  }

  // Genre
  if (!document.getElementById("female").checked && !document.getElementById("male").checked) {
    event.preventDefault();
    alert("Sélectionnez votre genre svp !");
    return
  }

  // Date de naissance
  var birth = document.getElementById("birthdate");
  if (birth.validity.valueMissing) {
    event.preventDefault();
    alert("Entrez votre date de naissance svp !");
    birth.focus()
    return
  }

  // Code postal
  var regex_zip  = new RegExp("[0-9]{5}");
  var zipcode = document.getElementById("zipcode");

  if (zipcode.validity.valueMissing) {
    event.preventDefault();
    alert("Entrez votre code postal svp !")
    zipcode.focus();
    zipcode.placeholder = "Votre code postal";
    return
  }

  if (!regex_zip.test(zipcode.value)) {
    event.preventDefault();
    alert("Entrez le code postal sur 5 chiffres svp !");
    zipcode.focus();
    return
  }

  // E-mail
  // Pour info : https://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html
  var regex_email = new RegExp("^[A-Za-z0-9-_.]+@[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,3}$");
  var email = document.getElementById("email");

  if (email.validity.valueMissing) {
    event.preventDefault();
    alert("Entrez votre adresse e-mail svp !");
    email.focus();
    return
  }

  if (!regex_email.test(email.value)) {
    event.preventDefault();
    alert("Adresse e-mail invalide !");
    email.focus();
    return
  }

  // Sujet
  var sujet = document.getElementById("subject");
  if (sujet.validity.valueMissing) {
    event.preventDefault();
    alert("Sélectionnez un sujet svp !");
    sujet.focus();
    return
  }

  // Question
  var question = document.getElementById("question");
  if (question.validity.valueMissing) {
    event.preventDefault();
    alert("Entrez votre question svp !");
    question.focus();
    question.placeholder = "Votre question"
    return
  }

  // Traitement
  var check = document.getElementById("process")
  if (!check.checked) {
    event.preventDefault();
    alert("Veuillez cocher la case svp !");
    check.focus();
    return
  }
}

var formButton = document.getElementById("submit");
formButton.addEventListener('click', checkForm);
