function toHex(n, d) {
  const hex = "0123456789ABCDEF";
  var hstr = "";

  while ( n > 0 ) {
    hstr = hex.substr(Math.floor(n % 16), 1) + hstr;
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
  const g1 = ( Math.floor(n / 16) >= 1 ? (Math.floor(n / 16) * 16).toString() : "00" );
  const g2 = ( Math.floor(n % 16).toString() );
  return [ g1.padStart(2, "0"), g2.padStart(2, "0") ];
}

function displayClock() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var g = ""

  document.getElementById("hours").innerHTML = toHex(h, 2);
  g = guide(h);
  document.getElementById("g-hours-dec").innerHTML = g[0];
  document.getElementById("g-hours-unity").innerHTML = g[1];
  document.getElementById("minutes").innerHTML = toHex(m, 2);
  g = guide(m);
  document.getElementById("g-minutes-dec").innerHTML = g[0];
  document.getElementById("g-minutes-unity").innerHTML = g[1];
  document.getElementById("seconds").innerHTML = toHex(s, 2);
  g = guide(s);
  document.getElementById("g-seconds-dec").innerHTML = g[0];
  document.getElementById("g-seconds-unity").innerHTML = g[1];
}

const hct = document.getElementById("hexclock-title");
hct.addEventListener("click", function() {
  document.getElementsByClassName("msgbox")[0].style.display = "inline-block";
  document.getElementById("hexclock-title").style.display = "none";
});

const btnclose = document.getElementsByClassName("btnclose")[0].addEventListener("click", function () {
  document.getElementsByClassName("msgbox")[0].style.display = "none";
  document.getElementById("hexclock-title").style.display = "inherit";
});

window.setInterval(displayClock, 1000);
