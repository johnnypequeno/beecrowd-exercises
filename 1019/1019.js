var input = require('fs').readFileSync('stdin', 'utf8');

var amountSeconds = parseInt(input);

const values = [3600, 60, 1];
var result = [];

for (var valor of values) {
    result.push (parseInt(amountSeconds/valor));
    amountSeconds = amountSeconds%valor;
}

console.log(result.join(":"));