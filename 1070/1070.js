var input = require('fs').readFileSync('stdin', 'utf8');

let count = 0;
let currentNumber = parseInt(input.split());

while (count < 6) {
  if (currentNumber % 2 !== 0) {
    console.log(currentNumber);
    count++;
  }
  currentNumber++;
}