// Import the interface to Tessel hardware
var Five = require("johnny-five");
var tessel = require("tessel-io");

// Set the led pins as outputs with initial states
// Truthy initial state sets the pin high
// Falsy sets it low.
var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);

setInterval(function () {
    console.log("I'm blinking! (Press CTRL + C to stop)");
    // Toggle the led states
    led1.toggle();
    led2.toggle();
}, 100);