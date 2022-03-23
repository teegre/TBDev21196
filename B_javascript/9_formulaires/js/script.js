function updateText() {
  var text = document.getElementById("techenv-listbox").value;
  // On ne modifie pas le texte si l'élément sélectionné
  // contient une chaîne vide.
  if (text != "") {
    document.getElementById("techenv-text").value = text;
  }
}

function checkForm() {
  var text = document.getElementById("company").value;
  var regex = new RegExp("[A-Za-z0-9_-]+");
  var result = regex.test(text)

  if (!result) {
    alert("Entrez le nom de la société svp !");
    return
  }

  text = document.getElementById("person").value;
  result = regex.test(text);

  if (!result) {
    alert("Entrez le nom de la personne à contacter svp !");
    return
  }

  text = document.getElementById("city").value;
  result = regex.test(text);

  if (!result) {
    alert("Entrez la ville svp !");
    return
  }

  text = document.getElementById("zipcode").value;
  regex = new RegExp("[0-9]{5}");
  result = regex.test(text);

  if (!result) {
    alert("Entrez le code postal sur 5 chiffres svp !");
    return
  }

  text = document.getElementById("email").value;
  regex = new RegExp(".+@.+");
  result = regex.test(text);

  if (!result) {
    alert("Entrez une adresse e-mail valide svp !");
    return
  }

  document.contact.submit();
}
