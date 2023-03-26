var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var PI = 3.14159;
var R = parseFloat(input);

var volume = (4/3.0) * PI * Math.pow(R, 3);

console.log ('VOLUME = '+volume.toFixed(3));