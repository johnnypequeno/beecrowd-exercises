var input = require('fs').readFileSync('stdin', 'utf8');

function countingPairs() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 2) == 0) {
                        console.log(i);
        }
    }
}

countingPairs();