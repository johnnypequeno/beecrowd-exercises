var input = require('fs').readFileSync('stdin', 'utf8');

const [a, b, c, d] = input.split(' ').map(Number);
  
    if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
      console.log('Valores aceitos');
    } else {
      console.log('Valores nao aceitos');
    }



