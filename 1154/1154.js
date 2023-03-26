var input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let sum = 0;
let i = 0;

while (true) {
    const added = parseInt(lines.shift());
    if (added < 0) break; // interrompe o loop se o número lido for negativo
    sum += added;
    i++;
}

let media = sum/i;

console.log(media.toFixed(2)); // imprime a média com duas casas decimais
