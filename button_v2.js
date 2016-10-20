var five = require("johnny-five");
var Tessel = require("tessel-io");

var board = new five.Board( { io: new Tessel() });

board.on("ready", function() {
  var led = new five.Led("a5");
  var button = new five.Button("a4");

  button.on("press", function() {led.on()});
  button.on("release", function() {led.off()});
});