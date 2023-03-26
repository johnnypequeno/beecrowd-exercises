var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());
var H = parseInt(lines.shift());
var S = parseFloat(lines.shift());

var SALARY = H*S;

console.log ('NUMBER = '+N);
console.log ('SALARY = U$ '+SALARY.toFixed(2))