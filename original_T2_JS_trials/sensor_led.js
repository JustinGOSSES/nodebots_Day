var five = require("johnny-five");
var Tessel = require("tessel-io");

var board = new five.Board( { io: new Tessel() });

board.on("ready", function() {
  var led = new five.Led("a5");
  var rotary = new five.Sensor("a4");

  rotary.on("change", function() {
    // Analog sensors produce a 10-bit value,
    // but led brightness is an 8-bit PWM value.
    // Convert by shifting the value's bits
    // two places to the right.
    led.brightness(this.value >> 2);
  });
});