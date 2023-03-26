var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines.shift());

for (let i = 0; i < value; i++) {
  let rays = lines[i].split(" ").map((item) => parseInt(item));
  let [R1, R2] = rays;
  console.log(R1 + R2);
}
