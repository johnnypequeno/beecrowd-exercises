var input = require('fs').readFileSync('stdin', 'utf8');

var amountDays = parseInt(input);

const values = [365, 30, 1];
var result = [];

for (var value of values) {
    result.push(parseInt(amountDays/value));
    amountDays = amountDays%value;
}

console.log(result.shift()+' ano(s)');
console.log(result.shift()+' mes(es)');
console.log(result.shift()+' dia(s)');
