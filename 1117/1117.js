var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
    
const notas = [];

for (let i = 0; i < 10; i++) {
  const nota = parseFloat(lines[i]);

  if (nota >= 0 && nota <= 10) {
    notas.push(nota);
  } else {
    console.log('nota invalida');
  }

  if (notas.length === 2) {
    const media = (notas[0] + notas[1]) / 2;
    console.log('media = ' + media.toFixed(2));
    break;
  }
}