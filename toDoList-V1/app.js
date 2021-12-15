const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();


var items = ["Build Resume", "Complete PPT", "Do Something"];
var workItems = [];
var item = "";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  let day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  let currentList = req.body.list;
  if (currentList === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  }
  //console.log(req.body);
  else {
    items.push(item);
    res.redirect("/");
  } //sets the value of item, by sending the value back to the home route
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});


app.listen(3000, function() {
  console.log("Server running at port 3000");
});