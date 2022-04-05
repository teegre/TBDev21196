function toBin(n, b) {
  var d = "";
  while (n > 0) {
    d = (n % 2).toString() + d;
    n = Math.floor(n / 2);
    b--;
  }

  while (b > 0) {
    d = "0" + d;
    b--;
  }

  return d;
}

function displayDigit(row, bn) {
  var r;
  var b;
  var g = 32;
  var gg;

  for (var i = 0; i < 6; i++) {
    b = bn.substr(i, 1);
    r = document.getElementById(row+(i+1).toString());

    switch(b) {
      case "0":
        r.textContent = b;
        r.style.backgroundColor = "#333333";
        r.style.color = "#FF0030";
        gg = document.getElementById(row+"g"+g.toString());
        gg.textContent = ".";
        gg.style.backgroundColor = "#333333";
        gg.style.color = "#FF0030"
        break;
      case "1":
        r.innerHTML = "<b>"+b+"</b>"
        r.style.backgroundColor = "#FF0030";
        r.style.color = "#333333"
        gg = document.getElementById(row+"g"+g.toString());
        gg.textContent = g.toString();
        gg.style.backgroundColor = "#FF0030";
        gg.style.color = "whitesmoke";
        break;
    }
    g = g == 1 ? 32 : g / 2;
  }
}

function displayClock() {
  var now = new Date();

  H = now.getHours();
  if (h != H) {
    h = H;
    displayDigit("h", toBin(h, 6));
  }
  M = now.getMinutes();
  if (m != M) {
    m = M;
    displayDigit("m", toBin(m, 6));
  }
  S = now.getSeconds();
  if (s != S) {
    s = S;
    displayDigit("s", toBin(s, 6));
  }
}


var H, M, S, h, m, s;
setInterval(displayClock, 1000);
