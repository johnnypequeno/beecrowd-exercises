var input = require('fs').readFileSync('stdin', 'utf8');

const values = input.split('\n').map(value => parseInt(value));

let count = 0;

for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      count++;
    }
  }
  
console.log(`${count} valores pares`);

