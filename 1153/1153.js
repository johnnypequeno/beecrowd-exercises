var input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let num = parseInt(lines.shift());


function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorialize(num);

let result = factorialize (num);

  console.log (result);
  