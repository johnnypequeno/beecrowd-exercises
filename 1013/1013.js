var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = input.split(" ").map(item => parseInt(item));

var maiorAB = (A+B + Math.abs(A-B))/2

var maior = Math.max(maiorAB, C);

console.log (maior+' eh o maior');