function handleInput(element, errElement, type) {
  const events = [ "change", "input"];
  for (const e of events) element.addEventListener(e, function() {
    errElement.textContent = "";
  });
  switch (type) {
    case "missing":
      errElement.style.color = "red";
      errElement.textContent = "Requis";
      break;
    case "invalid":
      errElement.style.color = "orange";
      errElement.textContent = "Invalide";
      break;
  }
}

function checkForm(event) {

  // Nom
  var nom = document.getElementById("name");
  var err = document.getElementById("err-name");

  if (nom.validity.valueMissing) {
    event.preventDefault();
    nom.focus();
    nom.placeholder = "Votre nom";
    handleInput(nom, err, "missing");
    return;
  }

  var regex = new RegExp("[A-Za-z-]+");

  if (!regex.test(nom.value)) {
    event.preventDefault();
    nom.focus();
    var err = document.getElementById("err-name");
    handleInput(nom, err, "invalid");
    return;
  }

  // Prénom
  var prenom = document.getElementById("firstname");
  var err = document.getElementById("err-firstname");

  if (prenom.validity.valueMissing) {
    event.preventDefault();
    prenom.focus();
    prenom.placeholder = "Votre prénom"
    handleInput(prenom, err, "missing");
    return
  }

  if (!regex.test(prenom.value)) {
    event.preventDefault();
    prenom.focus();
    handleInput(prenom, err, "invalid");
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
  var err = document.getElementById("err-birthdate");

  if (birth.validity.valueMissing) {
    event.preventDefault();
    birth.focus()
    handleInput(birth, err, "missing");
    return
  }

  // Code postal
  var regex_zip  = new RegExp("[0-9]{5}");
  var zipcode = document.getElementById("zipcode");
  var err = document.getElementById("err-zipcode");

  if (zipcode.validity.valueMissing) {
    event.preventDefault();
    zipcode.focus();
    zipcode.placeholder = "Votre code postal";
    handleInput(zipcode, err, "missing");
    return
  }

  if (!regex_zip.test(zipcode.value)) {
    event.preventDefault();
    zipcode.focus();
    handleInput(zipcode, err, "invalid");
    return
  }

  // E-mail
  // Pour info : https://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html
  var regex_email = new RegExp("^[A-Za-z0-9-_.]+@[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,3}$");
  var email = document.getElementById("email");
  var err = document.getElementById("err-email");

  if (email.validity.valueMissing) {
    event.preventDefault();
    email.focus();
    handleInput(email, err, "missing");
    return
  }

  if (!regex_email.test(email.value)) {
    event.preventDefault();
    email.focus();
    handleInput(email, err, "invalid");
    return
  }

  // Sujet
  var subject = document.getElementById("subject");
  var err = document.getElementById("err-subject");

  if (subject.validity.valueMissing) {
    event.preventDefault();
    subject.focus();
    handleInput(subject, err, "missing");
    return
  }

  // Question
  var question = document.getElementById("question");
  var err = document.getElementById("err-question");

  if (question.validity.valueMissing) {
    event.preventDefault();
    question.focus();
    question.placeholder = "Votre question"
    handleInput(question, err, "missing")
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
