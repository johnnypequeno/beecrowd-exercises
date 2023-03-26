var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Na declaração abaixo, desestruturamos a linhas em itens vetorizados para otimizar o código e mapeamos (map) para converter os itens para números flutuantes
var [A, B, C] = lines.shift().split(" ").map(item => parseFloat(item));

var pi = 3.14159;
var areaTriangulo = A*C/2.0;
var areaCirculo = pi*Math.pow(C,2);
var areaTrapezio = ((A+B)*C)/2.0;
var areaQuadrado = Math.pow(B,2);
var areaRetangulo = A*B;

console.log('TRIANGULO: '+areaTriangulo.toFixed(3));
console.log('CIRCULO: '+areaCirculo.toFixed(3));
console.log('TRAPEZIO: '+areaTrapezio.toFixed(3));
console.log('QUADRADO: '+areaQuadrado.toFixed(3));
console.log('RETANGULO: '+areaRetangulo.toFixed(3));