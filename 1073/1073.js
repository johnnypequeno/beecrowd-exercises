var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());

for (let i=2; i <= n; i++) {
    if (i%2===0){
        console.log(i + '^2 = ' + i*i);

    }

}