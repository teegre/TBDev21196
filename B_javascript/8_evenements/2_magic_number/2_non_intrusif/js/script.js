function check() {
  var reply = parseInt(document.getElementById("text").value);

  if (Number.isNaN(reply)) {
    writeResult('Ceci n\'est pas un nombre...');
  } else if (reply > 10 || reply < 0) {
    writeResult('Entre 1 et 10...');
  } else if (reply > num) {
    writeResult('Trop grand...');
  } else if (reply < num) {
    writeResult('Trop petit...');
  } else {
    writeResult('Vous avez gagné !');
  }
}

function keyPress(event) {
  if (event.keyCode == 13) { 
    check();
    return false;
  }
}

function writeResult(msg) {
  var result = document.getElementById("result");
  result.innerHTML = msg;
  focusInput();
}

function focusInput() {
  document.getElementById("text").focus();
}

var num = Math.floor((Math.random() * 10) + 1);
document.getElementById("text").value = "";
document.getElementById("result").InnerHTML = "";
focusInput();

