var Five = require("johnny-five");
var Tessel = require("tessel-io");

var board = new Five.Board({ io: new Tessel() });

board.on("ready", function() {

  var left = new Five.Servo({ pin: "a5", type: "continuous" });
  var right = new Five.Servo({ pin: "a6", type: "continuous", invert: true });

  left.cw();
  right.cw();

  setTimeout( function() {
    left.stop();
    right.stop();
  }, 2500);

});