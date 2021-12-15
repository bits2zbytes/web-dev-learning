const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apiKey = "a33dcc5b3e9c5921988ea36208a28234"
  const units = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
  https.get(url, function(response) {
    response.on('data', function(data) {

      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const city = weatherData.name;
      const icon = weatherData.weather[0].icon;
      const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>Weather is currently " + weatherDescription + "</p>" + "<h1>The temp in " + city + " is " + temp + " degree celsius.</h1>");
      res.write("<img src =" + iconURL + ">");
      res.send();
    })
  });
})




app.listen(3000, function(req, res) {
  console.log("server started on port 3000");
})