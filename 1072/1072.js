var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());

let inCount = 0;
let outCount = 0;


for (let i = 0; i < n; i++) {
    const x = parseInt(lines.shift());

    if (x >= 10 && x <= 20) {
      inCount++;
    } else {
      outCount++;
    }
  }

console.log (`${inCount} in`);
console.log (`${outCount} out`);

//O comando for em JavaScript é utilizado para executar um bloco de código repetidamente. Ele é composto de três partes:
//Inicialização: aqui é onde a variável de controle do loop é criada e inicializada com um valor inicial.
//Condição: aqui é onde a condição que deve ser avaliada a cada iteração do loop é especificada. Enquanto a condição for verdadeira, o loop continuará executando.
//Incremento: aqui é onde a variável de controle é atualizada a cada iteração do loop.
//No caso do for utilizado no exemplo, a variável de controle é i, que é inicializada com 0, a condição é que i seja menor que n e o incremento é i++, que significa que i é incrementado em 1 a cada iteração do loop.
//Assim, o for é utilizado para percorrer um conjunto de valores, que no caso do exemplo é um array de valores digitados pelo usuário. A cada iteração do loop, o código dentro do bloco do for é executado, permitindo que você realize uma ação em cada um dos valores do array. 
