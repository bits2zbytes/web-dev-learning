// detecting button press

var arrayOfDrumButtons = document.querySelectorAll(".drum");
var n = arrayOfDrumButtons.length;

for (var i = 0; i < n; i++) {
  arrayOfDrumButtons[i].addEventListener("click", function() {
    var drumName = this.innerHTML;
    playDrum(drumName);
    animateButton(drumName);
  });
}

//detecting key press
document.addEventListener("keydown", function(event) {
  var drumName = event.key;
  playDrum(drumName);
  animateButton(drumName);
});

//playing drum sound
function playDrum(key) {

  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case 'k':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'l':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    default:
      console.log(drumName);


  }

}

function animateButton(drumName) {
  var activeButton = document.querySelector("." + drumName);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 190);
}




// var audio = new Audio('sounds/tom-1.mp3');
// audio.play()






// function playDrum(drumName){
// switch(drumName){
//         case 'w':
//             var audio = new Audio('sounds/tom-1.mp3');
//             //audio.play();
//             break;
//
//         case 'a':
//             var audio = new Audio('sounds/tom-2.mp3');
//             //audio.play();
//             break;
//
//         case 's':
//             var audio = new Audio('sounds/tom-3.mp3');
//             //audio.play();
//             break;
//
//         case 'd':
//             var audio = new Audio('sounds/tom-4.mp3');
//             //audio.play();
//             break;
//
//         case 'j':
//             var audio = new Audio('sounds/kick-bass.mp3');
//             //audio.play();
//             break;
//
//         case 'k':
//             var audio = new Audio('sounds/snare.mp3');
//             //audio.play();
//             break;
//
//         case 'l':
//             var audio = new Audio('sounds/crash.mp3');
//             //audio.play();
//             break;
//
//
//       }
//
// }