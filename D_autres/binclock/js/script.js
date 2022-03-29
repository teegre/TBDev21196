// List of binary digits from 0 to 9

function getRndColor() {
  colors = [ "#444", "#555", "#666", "#777" ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getBinTime() {
  var binDigits = [ "0000", "000<b>1</b>", "00<b>1</b>0", "00<b>11</b>", "0<b>1</b>00", "0<b>1</b>0<b>1</b>", "0<b>11</b>0", "0<b>111</b>", "<b>1</b>000", "<b>1</b>00<b>1</b>" ];
  var currentDate = new Date();
  var H1 = String(currentDate.getHours()).padStart(2, "0").substr(0, 1);
  var H2 = String(currentDate.getHours()).padStart(2, "0").substr(1, 1); 
  var M1 = String(currentDate.getMinutes()).padStart(2, "0").substr(0, 1);
  var M2 = String(currentDate.getMinutes()).padStart(2, "0").substr(1, 1);
  var S1 = String(currentDate.getSeconds()).padStart(2, "0").substr(0, 1);
  var S2 = String(currentDate.getSeconds()).padStart(2, "0").substr(1, 1);
  return [ binDigits[H1], binDigits[H2], binDigits[M1], binDigits[M2], binDigits[S1], binDigits[S2] ];
}

function displayClock() {
  var clock = getBinTime();

  document.getElementById("H1").innerHTML = clock[0];
  document.getElementById("H2").innerHTML = clock[1];
  document.getElementById("M1").innerHTML = clock[2];
  document.getElementById("M2").innerHTML = clock[3];
  document.getElementById("S1").innerHTML = clock[4];
  document.getElementById("S2").innerHTML = clock[5];
  if (clock[4] == "0000" && clock[5] == "0000") {
    var html = document.getElementsByTagName("html")[0];
    html.style.color = getRndColor();
  }
}

window.setInterval(displayClock, 1000);

