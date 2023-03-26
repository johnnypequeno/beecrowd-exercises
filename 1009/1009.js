var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var name = lines.shift();
var salary = parseFloat(lines.shift());
var sales = parseFloat(lines.shift());


var comission = sales*0.15;
var total = salary + comission;

console.log('TOTAL = R$ '+total.toFixed(2));
