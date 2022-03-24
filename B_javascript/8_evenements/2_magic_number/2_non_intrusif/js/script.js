function check() {
  var text = document.getElementById("text");
  var reply = parseInt(text.value);

  if (Number.isNaN(reply)) {
    writeResult('Ceci n\'est pas un nombre...');
  } else if (reply > 100 || reply < 1) {
    writeResult('Entre 1 et 100...');
  } else if (reply > num) {
    writeResult('Trop grand...');
  } else if (reply < num) {
    writeResult('Trop petit...');
  } else {
    writeResult('Vous avez gagné !');
    win = true;
  }
  text.select();

}

function keyPress(event) {
  if (event.keyCode == 13 && !win) {
    check();
    if (win) {
      var btn = document.getElementById('check');
      btn.style.display = 'none';
      btn = document.getElementById('restart');
      btn.style.display = 'inline-block';
    }
  }
}

//
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function writeResult(msg) {
  var result = document.getElementById("result");
  result.innerHTML = '';
  await sleep(250);
  result.innerHTML = msg;
  focusInput();
}

function focusInput() {
  document.getElementById("text").focus();
}

var num = Math.floor((Math.random() * 100) + 1);
var win = false;
document.getElementById("text").value = "";
document.getElementById("result").InnerHTML = "";
focusInput();
