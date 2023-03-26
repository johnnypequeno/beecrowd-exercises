let input = require('fs').readFileSync('stdin', 'utf8');

for (let i=1, j=7; j >-1; i= i+3, j= j-5) {
    console.log(`I=${i} J=${j}`);
}