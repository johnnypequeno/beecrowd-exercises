var input = require('fs').readFileSync('stdin', 'utf8');

const n = parseInt(input.split());

function countingMod() {
    for (let i = 1; i <= 10000; i++) {
        if (i % n === 2) {
            console.log(i);
        }
    }
}

countingMod();