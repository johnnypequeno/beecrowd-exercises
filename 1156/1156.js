var input = require('fs').readFileSync('stdin', 'utf8');

let S = 0;

let denominador = 1;

for (let i = 1; i <= 39; i += 2) {
  S += i / denominador;
  denominador *= 2;
}

console.log(S.toFixed(2));
