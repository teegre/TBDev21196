let a = parseInt(prompt("Entrer un nombre (a) :"));
let b = parseInt(prompt("Entrer un nombre (b) :"));
var r;

if (a != null && b != null && !Number.isNaN(a) && !Number.isNaN(b)) {
  var op = prompt("Entrer un opérateur [+ - * /] :");

  switch (op) {

    case "+" :
      r = (a + b);
      console.log(a + " + " + b + " = "  + r);
      break;

    case "-" :
      r = a - b;
      console.log(a + " - " + b + " = "  + r);
      break;

    case "*" :
      r = a * b;
      console.log(a + " * " + b + " = "  + r);
      break;

    case "/" :
      if (b == 0) {
        console.log("-ERR-");
      } else {
        r = a / b;
        console.log(a + " / " + b + " = "  + r);
      }
      break;

    default:
      alert("Opérateur manquant ou invalide.");
  }

} else {
  alert("...");
}
