var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = lines.shift();
let column1 = 1;
let column2 = 2;
let column3 = 3;

    for (i=0; i<n; i++){
    console.log (column1+' '+column2+' '+column3 + ' PUM');
    column1 +=4;
    column2 +=4;
    column3 +=4;
}
