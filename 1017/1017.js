var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var timeSpent = parseInt(lines.shift());
var velocity = parseInt(lines.shift());

var distance = timeSpent*velocity;
var fuelConsuming = 12;
var fuel = distance/fuelConsuming;

console.log (fuel.toFixed(3));