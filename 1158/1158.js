var input = require('fs').readFileSync('stdin', 'utf8');

const entry = input.split('\n');
const n = Number(entry.shift());

for (let i = 0; i < n; i++) {
    let [x,y] = entry.shift().split(' ').map(z => Number(z));
    let soma = 0;

    if (x%2===0) {
        x++;
    }

    for (let j = 0; j < y * 2; j += 2) {
        soma += x + j;
      }
    
console.log(soma);
}