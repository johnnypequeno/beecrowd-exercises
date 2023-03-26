let input = require('fs').readFileSync('stdin', 'utf8');

let j = 7;
for(let i = 1; i < 10; i += 2){
    for(cont = 0; cont < 3; j--, cont++) console.log(`I=${i} J=${j}`);
    j += 5; 
}
//Este código tem um loop externo com variável "i" que começa em 1 e incrementa de 2 em 2 
//até o valor 9. A cada iteração deste loop, ele executa um loop interno que roda três vezes, 
//com variável de contador "cont", e dentro deste loop interno é impressa uma linha 
//com os valores das variáveis "i" e "j", onde "j" começa em 7 e é decrementada de 1 
//a cada iteração do loop interno. Após cada iteração do loop interno, o valor de "j" é 
//incrementado em 5, o que garante que o próximo loop interno comece com o valor correto de "j".

//Ou seja, o resultado impresso será uma sequência de linhas no formato "I=x J=y", 
//onde "x" é um número ímpar entre 1 e 9 e "y" é um número que começa em 7 e é decrementado 
//de 1 em 1 por três vezes, e então é incrementado em 5 para a próxima iteração do loop externo.