var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());

let initialNumber = 1;

function generateSequence(initialNumber, n) {
    let sequence = String();
    let counter = 0;

    for (i=0; i<n; i++){
    for (j = 0; j<3; j++){
        sequence += `${initialNumber + counter} `;
        counter++;
        }
    sequence += 'PUM\n';
    counter++;
    }

return sequence;
}

console.log (generateSequence(initialNumber, n));
