var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let alcool = 0;
let gasolina = 0;
let diesel = 0;

let codigo = input.split ('\n').map(Number);

for (i = 0; i < codigo.length; i++) {
    if (codigo [i] === 1) {
        alcool++;
    } else if (codigo [i]  === 2) {
        gasolina++;
    } else if (codigo [i] === 3) {
        diesel++;
    } else if (codigo [i] === 4) {
        break;
    }
}

console.log('MUITO OBRIGADO');
console.log('Alcool: ' + alcool);
console.log('Gasolina: ' + gasolina);
console.log('Diesel: ' + diesel);
