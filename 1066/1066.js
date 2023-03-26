var input = require('fs').readFileSync('stdin', 'utf8');

const values = input.split('\n').map(value => parseInt(value));

let countPair = 0;
let countUnpair = 0;
let countPositive = 0;
let countNegative = 0;

for (let i = 0; i < 5; i++) {
    if (values[i] % 2 === 0) {
      countPair++;
    } else {
      countUnpair++;
    }
    
    if (values[i] > 0) {
        countPositive++;
    } else if (values[i] < 0) {
        countNegative++;
    }
}

console.log(`${countPair} valor(es) par(es)`);
console.log(`${countUnpair} valor(es) impar(es)`);
console.log(`${countPositive} valor(es) positivo(s)`);
console.log(`${countNegative} valor(es) negativo(s)`);
