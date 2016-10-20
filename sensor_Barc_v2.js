var Barcli = require("barcli");
var five = require("johnny-five");
var Tessel = require("tessel-io");

var board = new five.Board( { io: new Tessel() });

board.on("ready", function() {
  var graph = new Barcli({
    label: "Potentiometer",
    range: [0, 1024]
  });
  var rotary = new five.Sensor({
  	pin:"a4",
  	threshold:20,
  	frequency:100
  })

  rotary.scale(0, 1024).on("change", function() {
    graph.update(this.value);
  });
});