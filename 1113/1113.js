var input = require('fs').readFileSync('stdin', 'utf8');

const lines = input.trim().split('\n');

for (let i = 0; i < lines.length; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
  
    if (x === y) {
      break;
    }
  
    if (x < y) {
      console.log('Crescente');
    } else {
      console.log('Decrescente');
    }
  }

//Esta solução lê cada linha do stdin e, para cada linha, 
//verifica se x e y são iguais. Se forem, o loop é encerrado com o break. 
//Caso contrário, o código compara os valores de x e y para determinar 
//se estão em ordem crescente ou decrescente e exibe a mensagem correspondente. 
//O trim() é usado para remover qualquer espaço em branco no início e no 
//fim da string de entrada e o map(Number) é usado para converter as strings de entrada em números.

