var input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

const n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
  const [a, b, c] = [i, Math.pow(i, 2), Math.pow(i, 3)];
  console.log(a + " " + b + " " + c);
}