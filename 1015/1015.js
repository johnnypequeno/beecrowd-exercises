var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [x1,y1] = lines.shift().split(" ").map(item => parseFloat(item));
var [x2,y2] = lines.shift().split(" ").map(item => parseFloat(item));

var distance = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));

console.log (distance.toFixed(4));

// Importante: este exercício compila vários conceitos que usamos separadamente (shift, split para desestruturação, mapeamento para converter em números)