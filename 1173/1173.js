var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const n = [Number(input)];
console.log(`N[0] = ${n[0]}`);

for (let i = 1; i < 10; i++) {
  n.push(n[i - 1] * 2);
  console.log(`N[${i}] = ${n[i]}`);
}