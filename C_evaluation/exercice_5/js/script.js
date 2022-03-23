function checkForm() {
  var text = document.getElementById("firstname").value;
  var regex_text = new RegExp("[A-Za-z]+");

  // Prénom
  text = document.getElementById("firstname");
  var result = regex_text.test(text)

  if (!result) {
    alert("Entrez votre prénom svp !");
    return
  }

  // Nom
  text = document.getElementById("name").value;
  result = regex_text.test(text);

  if (!result) {
    alert("Entrez votre nom svp !");
    return
  }

  // Genre
  if (!document.getElementById("female").checked && !document.getElementById("male").checked) {
    alert("Sélectionnez votre genre svp !");
    return
  }


  // Date de naissance
  if (!document.getElementById("birthdate").value) {
    alert("Entrez votre date de naissance svp !");
    return
  }

  // Code postal
  var regex_zip  = new RegExp("[0-9]{5}");

  text = document.getElementById("zipcode").value;
  result = regex_zip.test(text);

  if (!result) {
    alert("Entrez le code postal sur 5 chiffres svp !");
    return
  }

  // Sujet
  if (!document.getElementById("subject").value) {
    alert("Sélectionnez un sujet svp !");
    return
  }

  // E-mail
  var regex_email = new RegExp("[A-Za-z0-9-_]+@[A-Za-z0-9-_]+\.[A-Za-z]");
  text = document.getElementById("email").value;
  result = regex_email.test(text);

  if (!result) {
    alert("Entrez une adresse e-mail valide svp !");
    return
  }

  // Question
  if (!document.getElementById("question").value) {
    alert("Entrez votre question svp !");
    return
  }

  // Traitement
  if (!document.getElementById("process").checked) {
    alert("Veuillez cocher la case svp !");
    return
  }

  document.contact.submit();
}
