var five = require("johnny-five");
var Tessel = require("tessel-io");

var board = new five.Board( { io: new Tessel() });

board.on("ready", function() {
  var rotary = new five.Sensor("a4");

  rotary.on("change", function() {
    console.log("Sensor changed!", this.value);
  });
});