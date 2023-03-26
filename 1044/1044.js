var input = require('fs').readFileSync('stdin', 'utf8');

const [A,B] = input.split(' ').map(Number);

function multiples (A, B){
     if (A%B === 0 ^ B%A === 0)
        console.log('Sao Multiplos');
          else
        console.log('Nao sao Multiplos');
   }
multiples(A,B);

//const A = Number(lines[0]);
//const B = Number(lines[1]);