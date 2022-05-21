//jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

var items = [];
let workItems = [];
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  let today = new Date();
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  let din = today.toLocaleDateString("em-US", options);

  res.render("list", {  listTitle: din, newListItems: items
  });
});

app.post("/", function(req, res) {
  var item = req.body.newItem;
  if(req.body.list ==="Work")
  {
    workItems.push(item);
    res.redirect("/work");
}
else{
  items.push(item);
  res.redirect("/")
}
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems});
});



app.listen(8080, function() {
  console.log("running on 8080");
});


// var currentDay = today.getDay();
// switch (currentDay) {
//   case 0:
//   day = "Sunday";
//       break;
//
//   case 1:
//   day = "Monday";
//       break;
//
//   case 2:
//   day = "Tuesday";
//       break;
//
//   case 3:
//   day = "Wednesday";
//       break;
//
//   case 4:
//   day = "Thursday";
//       break;
//
//   case 5:
//   day = "Friday";
//       break;
//
//   case 6:
//   day = "Saturday";
//       break;
//   default:console.log("error value is" + currentDay);
//
//
// }
// app.post("/work",function(req,res){
//   let item = req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// });
