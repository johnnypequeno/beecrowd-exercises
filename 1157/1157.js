var input = require('fs').readFileSync('stdin', 'utf8');

let n = parseInt(input.split());

for (let i=1; i<=n; i++) {
    if (n%i===0)
    console.log (i);
}
