var input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const n = parseInt(lines.shift());

for (let i = 0; i<n; i++) {
    const [a, b, c] = lines[i].split(' ').map(parseFloat);
    const media = (a*2 + b*3 + c*5)/10;
    console.log(media.toFixed(1));
}

//O código lê a entrada do arquivo stdin usando require('fs').readFileSync('/dev/stdin', 'utf8'), 
//armazena cada linha da entrada em um array de strings chamado lines e extrai o número de 
//casos de teste n da primeira linha.
//Em seguida, o código entra em um loop para iterar sobre cada caso de teste. 
//Para cada caso, o código divide a linha correspondente em três valores reais, 
//armazenando-os nas variáveis a, b e c. Em seguida, o código calcula a média ponderada 
//usando as fórmulas mencionadas no enunciado e imprime o resultado com console.log(media.toFixed(1)), 
//usando toFixed(1) para exibir apenas uma casa decimal.
