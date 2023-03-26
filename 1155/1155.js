var input = require('fs').readFileSync('stdin', 'utf8');

let S =1;

for(let i=2; i<=100; i++) {
    S += 1.00/i;
}

console.log(S.toFixed(2));
