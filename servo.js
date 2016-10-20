var five = require("johnny-five");
var Tessel = require("tessel-io");

var board = new five.Board( { io: new Tessel() });

board.on("ready", function() {
  var servo = new five.Servo({
    type: "continuous",
    pin: "a5"
  });

  servo.cw();

  setTimeout( function() {
    console.log("stop");
    servo.stop();
  }, 7000)

});