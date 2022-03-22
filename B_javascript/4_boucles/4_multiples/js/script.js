var n = parseInt(prompt("N"));
var x = parseInt(prompt("X"));

if (n > 0 && x > 0 && !Number.isNaN(n)) {
  for (var i = 1; i <= n; i++) {
    console.log(i + " x " + x + " = " + (i*x));
  }
} else {
  console.log("...");
}
