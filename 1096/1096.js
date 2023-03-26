let input = require('fs').readFileSync('stdin', 'utf8');

for (let i = 1; i <= 9; i += 2) {
    for (let j = 7; j >= 5; j--) {
      console.log(`I=${i} J=${j}`);
    }
  }

//O código usa dois loops for aninhados para percorrer todas as combinações possíveis de i e j, 
//seguindo a lógica da sequência. O primeiro loop percorre os valores ímpares de i de 1 a 9, 
//com um incremento de 2. O segundo loop percorre os valores de j de 7 a 5, em ordem decrescente.

//Dentro do loop interno, o código usa console.log para imprimir a sequência no formato "I=X J=Y", 
//onde X e Y são os valores de i e j, respectivamente.

//j-- é uma expressão que decrementa o valor da variável j em 1 unidade a cada iteração do loop.

//No caso específico da solução para o problema da sequência, 
//a expressão j-- é usada dentro do loop interno para percorrer os valores de j de 7 a 5, em ordem decrescente. Ou seja, a cada iteração do loop interno, o valor de j é decrementado em 1 unidade.

//Assim, a sequência de saída é gerada da seguinte forma:
//Na primeira iteração do loop externo (quando i é igual a 1), 
//o loop interno imprime os valores "I=1 J=7", "I=1 J=6" e "I=1 J=5", nessa ordem.
//Na segunda iteração do loop externo (quando i é igual a 3), 
//o loop interno imprime os valores "I=3 J=7", "I=3 J=6" e "I=3 J=5", nessa ordem.
//E assim por diante, até que todas as combinações de valores de i e j tenham sido impressas.