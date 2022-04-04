var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius *= 0.9;

function drawClock() {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.lineWidth = 16;
  ctx.fillStyle = "#111111";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, 0, 2, 0, 2*Math.PI);
  ctx.fillStyle = "#DDDDDD"
  ctx.stroke();
  ctx.fill();
}

function drawDigits() {
  var angle;
  ctx.font = radius * 0.15 + "px monospace";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (var n = 1; n <= 12; n++) {
    angle = n * Math.PI / 6;
    ctx.rotate(angle);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-angle);
    ctx.fillText(n.toString(), 0, 0);
    ctx.rotate(angle);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-angle);
  }
}

function drawTime() {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();

  h %= 12;
  h = (h * Math.PI / 6) + (m * Math.PI / (6 * 60)) + (s * Math.PI / (360 * 60));
  drawHand(h, radius * 0.5, radius * 0.07);

  m = (m * Math.PI / 30) + (s * Math.PI / (30 * 60));
  drawHand(m, radius * 0.8, radius * 0.07);

  s = (s * Math.PI / 30);
  drawHand(s, radius * 0.9, radius * 0.02);
}

function drawHand(pos, len, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -len);
  ctx.fillStyle = "#DDDDDD"
  ctx.stroke();
  ctx.rotate(-pos);
}

function ziva() {
  drawClock();
  drawDigits(radius);
  drawTime();
}

setInterval(ziva, 1000);
