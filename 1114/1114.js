var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const password = 2002;
let value = parseInt(lines.shift());

while (value !== password) {
    console.log('Senha Invalida');
    value = parseInt(lines.shift());
  }

  console.log('Acesso Permitido');
