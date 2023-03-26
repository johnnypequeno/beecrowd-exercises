var input = require('fs').readFileSync('stdin', 'utf8');

let numbers = input.split('\n').map(x => Number(x));

for (let n of numbers) {

    if (n === 0) {
        break;
        }
   
    let sum = 0;

    if (n%2!==0) {
        n++;
    }

    for (let i = 0; i<5; i++) {
        sum += n+i*2;
    }
  
console.log(sum);
}