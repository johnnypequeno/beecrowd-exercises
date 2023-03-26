var input = require('fs').readFileSync('stdin', 'utf8');

const n = parseInt(input.split(' '));
const multipliers = [1,2,3,4,5,6,7,8,9,10];

for (let result of multipliers) {
    let multiplication = parseInt(n*result);
    console.log(`${result} x ${n} = ${multiplication}`);
}