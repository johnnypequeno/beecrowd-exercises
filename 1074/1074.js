var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());

for (let i=0; i < n; i++) {
        const x = parseInt(lines.shift());
        if (x===0){
            console.log('NULL')
        } else if (x % 2 === 0 && x > 0) {
            console.log('EVEN POSITIVE')
        } else if (x % 2 === 0 && x < 0) {
            console.log('EVEN NEGATIVE')
        } else if (x % 2 !==0 && x > 0) {
            console.log('ODD POSITIVE') 
        } else if (x % 2 !==0 && x < 0) {
            console.log('ODD NEGATIVE')
        }
}