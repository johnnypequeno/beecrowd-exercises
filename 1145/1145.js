var input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let [x, y] = lines.shift().split(" ").map(value => parseInt(value));

let currentSequence = "";
for (let i = 1; i <= y; i++) {
  currentSequence += i + " ";
  if (i % x === 0) {
    console.log(currentSequence.trim());
    currentSequence = "";
  }
}
if (currentSequence !== "") {
  console.log(currentSequence.trim());
}

// Aqui, preciso definir um contador para os números e um contador para as linhas, 
//de forma que a cada X números impressos, pula-se uma linha e continua a sequência.

//Alterei a atribuição das variáveis x e y para usar o método split ao invés do parseInt, 
//para que os valores sejam separados corretamente. Além disso, foi preciso criar 
//uma variável para armazenar a sequência atual, que deve ser impressa no final de cada linha.

//Nesse código, o método split é utilizado para separar os valores de x e y a partir da string de entrada, 
//e o método map é utilizado para converter cada valor em um número inteiro. 
//Depois, é criada uma variável currentSequence para armazenar a sequência atual, 
//e um loop é utilizado para gerar a sequência de 1 até y. Em seguida, o valor atual 
//é adicionado na variável currentSequence, seguido de um espaço em branco. Quando o valor atual 
//é um múltiplo de x, a linha atual é impressa e a variável currentSequence é resetada. 
//No final do loop, é verificado se a variável currentSequence contém alguma sequência não impressa, 
//e se houver, ela é impressa.

