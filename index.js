function setHeading(text) {
  document.querySelector("h1").textContent = text;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setImage(className, diceNumber) {
  document.getElementsByClassName(className)[0].setAttribute("src", "images/dice" + diceNumber + ".png");
}

function playAGameOfDice() {
  var player1 = getRandomInt(6) + 1;
  setImage("img1", player1);

  var player2 = getRandomInt(6) + 1;
  setImage("img2", player2);

  if (player1 > player2) {
    setHeading("Player 1 Wins!");
  } else if (player2 > player1) {
    setHeading("Player 2 Wins!");
  } else {
    setHeading("Draw!");
  }
}

setTimeout(playAGameOfDice, 1000);
