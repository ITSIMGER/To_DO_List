//jshint esversion:6

var today = new Date();
var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

var din = today.toLocaleDateString("em-US", options);
