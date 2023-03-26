var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valor = parseFloat(input);

let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log('NOTAS:');
for (let nota of notas) {
    let quantidade = Math.floor(valor / nota);
    console.log(`${quantidade} nota(s) de R$ ${nota.toFixed(2)}`);
    valor -= quantidade * nota;
}

console.log('MOEDAS:');
for (let moeda of moedas) {
    let quantidade = Math.floor(valor / moeda);
    console.log(`${quantidade} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valor = (valor - quantidade * moeda).toFixed(2);
}