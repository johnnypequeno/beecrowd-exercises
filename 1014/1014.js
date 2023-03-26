var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines.shift());
var Y = parseFloat(lines.shift());

var consumoMedio = X/Y;

console.log (consumoMedio.toFixed(3)+' km/l');