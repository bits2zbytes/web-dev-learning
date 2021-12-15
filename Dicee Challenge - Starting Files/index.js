var randomNumber1 = Math.ceil(Math.random() * 6);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.ceil(Math.random() * 6);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
//player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "🚩Player1 Wins!";
}
//player 2 wins
else if (randomNumber1 < randomNumber2) {
  document.querySelector(".container h1").innerHTML = "Player2 Wins!🚩";
}
//draw
else if (randomNumber1 === randomNumber2)
  document.querySelector(".container h1").innerHTML = "Draw!";