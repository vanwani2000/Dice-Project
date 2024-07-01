function randomGenerator() {
  var random_dice = Math.random();
  random_dice = Math.floor(random_dice * 6) + 1;
  return random_dice;
}

function changeDice(imageClass) {
  var n = randomGenerator();
  document
    .querySelector("." + imageClass)
    .setAttribute("src", "images/dice" + n + ".png");
  return n;
}

function changeTitle(winnerName) {
  var text;
  if (winnerName == 1) {
    text = "🚩Player 1 Wins!";
  } else if (winnerName == 2) {
    text = "🚩Player 2 Wins!";
  } else {
    text = "🚩Draw🚩";
  }
  document.querySelector("h1").innerHTML = text;
}
