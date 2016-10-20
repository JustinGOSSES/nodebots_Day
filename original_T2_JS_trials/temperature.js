var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board( { io: new Tessel() });

board.on("ready", function() {
  var temp = new five.Temperature({
    controller: "TMP36",
    pin: "a4"
  });

  temp.on("change", function() {
    console.log(this.celsius + "°C");
  });
});