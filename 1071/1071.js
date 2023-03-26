var input = require('fs').readFileSync('stdin', 'utf8');

var [x, y] = input.split('\n').map(value => parseInt(value));
var sum = 0;

if (y < x) {
  [x, y] = [y, x];
}

for (let i = x + 1; i < y; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

console.log(sum);

//Para estudar: Nesse código, usamos a função readFileSync para ler a entrada pelo arquivo stdin. Depois, usamos o método split para separar os dois valores de entrada em um array, e em seguida usamos o map para converter esses valores para o tipo integer.
//Então, criamos a variável sum com valor inicial 0 e verificamos qual dos dois valores é o maior, para que possamos percorrer o intervalo correto na próxima etapa.
//Em seguida, usamos um loop for para percorrer todos os valores ímpares entre x e y e somar esses valores na variável sum, caso eles sejam ímpares.
//Por fim, imprimimos a soma dos números ímpares entre x e y.