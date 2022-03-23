function getInteger(msg) {
  var n = 0;
  while (n == 0 || Number.isNaN(n)) {
    n = parseInt(prompt(msg));
  }
  return n;
}

var PU = getInteger('Entrer le prix unitaire :');
var QTECOM = getInteger('Entrer la quantité commandée :');
var TOT = PU * QTECOM;

var REM;
var PORT;

if (TOT >= 100 && TOT <= 200) REM = 0.05;
else if (TOT > 200) REM = 0.1;
else REM = 0;

TOT -= TOT * REM;
console.log('Prix après remise : ' + TOT);

if (TOT <= 500) {
  PORT = TOT * 0.02;
  if (PORT < 6) TOT += 6;
  else TOT += PORT;
}

alert('Total = ' + TOT.toFixed(2) + '€');
