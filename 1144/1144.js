var input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
    let [a, b, c] = [i, Math.pow(i, 2), Math.pow(i, 3)];
    for (let k = 0; k < 2; k++) {
        let [d, e, f] = [a, b + k, c + k];
        console.log(d + " " + e + " " + f);
    }
}