var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const N = [];
for (let i = 0; i < 20; i++) {
  N.push(parseInt(lines.shift()));
}

let i = 0;
let j = 19;
while (i < 10) {
  const temp = N[i];
  N[i] = N[j];
  N[j] = temp;
  i++;
  j--;
}

for (let i = 0; i < 20; i++) {
  console.log(`N[${i}] = ${N[i]}`);
}
