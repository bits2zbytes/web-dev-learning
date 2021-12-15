$(document).keypress(function(event) {
  alert("Working");
  var keyPressed = event.key;
  $("h1").text(event.key);
});