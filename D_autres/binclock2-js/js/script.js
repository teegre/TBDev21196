/*
 * @licstart  The following is the entire license notice for the
 * JavaScript code in this page.
 *
 * Copyright (C) 2022 Stéphane MEYER (Teegre)
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

function toBin(n, b) {
  // convert an integer to binary.
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
  //
  // i.e: 59 seconds
  //
  // 32 16  8  s  2  1
  //  1  1  1  0  1  1
  var r;
  var b;
  var g = 32;
  var gg;
  var bg = "#333333"

  for (var i = 0; i < 6; i++) {
    b = bn.substr(i, 1);
    r = document.getElementById(row+(i+1).toString());
    gg = document.getElementById(row+"g"+g.toString());

    switch (row) {
      case "h":
        var fg = "#FF0030"
        break;
      case "m":
        var fg = "#FF0040"
        break;
      case "s":
        var fg = "#FF0050"
        break;
    }

    switch(b) {
      case "0":
        r.textContent = b;
        r.style.backgroundColor = bg;
        r.style.color = fg;
        gg.textContent = row;
        gg.style.backgroundColor = bg;
        gg.style.color = fg;
        break;
      case "1":
        r.innerHTML = "<b>"+b+"</b>"
        r.style.backgroundColor = fg;
        r.style.color = bg;
        gg.innerHTML = "<b>"+g.toString()+"</b>";
        gg.style.backgroundColor = bg;
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
