var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    // Verifica se a linha é vazia (EOF)
    if (lines[i] === '') {
        break;
    }

    const N = parseInt(lines[i]);
    if (N === 0) {
        console.log("vai ter copa!");
    } else {
        console.log("vai ter duas!");
    }
}
