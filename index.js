
function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

var player1 = getRandomInt(6) + 1;
document.getElementsByClassName("img1") [0].setAttribute("src", "images/dice" + player1 + ".png");


var player2 = getRandomInt(6) + 1;
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+ player2+ ".png")


if (player1 > player2){
  document.querySelector("h1").textContent = "Player 1 Wins!";

}
else if (player2 > player1){
  document.querySelector("h1").textContent = "Player 2 Wins!";

}

else{
  document.querySelector("h1").textContent = "Draw!";
}
