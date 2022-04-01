function toHex(n, d) {
  const hex = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];
  var hstr = "";

  while ( n > 0 ) {
    hstr = hex[Math.floor(n % 16)] + hstr;
    n = Math.floor(n / 16);
    d--;
  }

  while ( d > 0 ) {
    hstr = "0" + hstr;
    d--;
  }

  return hstr;
}

function guide(n) {
  g1 = ( Math.floor(n / 16) >= 1 ? (Math.floor(n / 16) * 16).toString() : "00" );
  g2 = ( Math.floor(n % 16).toString() );
  return g1.padStart(2, "0") + " " + g2.padStart(2, "0")
}

function displayClock() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  document.getElementById("hours").innerHTML = toHex(h, 2);
  document.getElementById("g-hours").innerHTML = guide(h);
  document.getElementById("minutes").innerHTML = toHex(m, 2);
  document.getElementById("g-minutes").innerHTML = guide(m);
  document.getElementById("seconds").innerHTML = toHex(s, 2);
  document.getElementById("g-seconds").innerHTML = guide(s);
}

window.setInterval(displayClock, 1000);
