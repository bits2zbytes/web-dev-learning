var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
  level++;
  userClickedPattern.length = 0;
  $("#level-title").text("Level " + level);

}

$(".btn").click(function() {
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  var lastIndex = userClickedPattern.length - 1;
  checkAnswer(lastIndex, level);
});

function playSound(name) {
  var buttonSound = new Audio('sounds/' + name + '.mp3');
  buttonSound.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


$(document).keypress(function() {
  if (gamePattern.length <= 0) {
    $("#level-title").text("Level " + level);
    nextSequence();
  }
});

function checkAnswer(lastIndex, currentLevel) {
  var result = true;
  for (var i = 0; i <= lastIndex; i++) {
    if (userClickedPattern[i] !== gamePattern[i]) {
      result = false;
      gameOver();
      return;
    }
  }
  if ((lastIndex + 1) === currentLevel) {
    setTimeout(function() {
      nextSequence();
    }, 1000);

  }

}

function gameOver() {
  $("#level-title").text("Game Over,Press any key to restart");
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
  var name = "wrong";
  playSound(name);
  newGame();
}

function newGame() {
  level = 0;
  gamePattern.length = 0;
}