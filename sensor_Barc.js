var Barcli = require("barcli");
var five = require("johnny-five");
var Tessel = require("tessel-io");

var board = new five.Board( { io: new Tessel() });

board.on("ready", function() {
  var graph = new Barcli({
    label: "Potentiometer",
    range: [0, 1024]
  });
  var rotary = new five.Sensor("a4");

  rotary.scale(0, 1024).on("change", function() {
    graph.update(this.value);
  });
});