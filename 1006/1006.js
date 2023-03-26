var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var MEDIA = (A*2.0 + B*3.0 + C*5.0)/10.0;

console.log('MEDIA = ' +MEDIA.toFixed(1));