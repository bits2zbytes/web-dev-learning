const express = require('express');
const app = express();

app.get("/", function(req, res) {
  console.log(req);
  res.send("Hello,World");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at :jhamonika711@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("I am Monika Jha, student and YAYYYY, nodemon is working.")
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
}); // this app will listen at port no. 3000