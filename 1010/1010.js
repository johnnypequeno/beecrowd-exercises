var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [codeItem1, amountItem1, priceUnityItem1] = lines.shift().split(" ");
var [codeItem2, amountItem2, priceUnityItem2] = lines.shift().split(" ");

//var codeItem1 = parseInt(infoItem1.shift());
//var amountItem1 = parseInt(infoItem1.shift());
//var priceUnityItem1 = parseFloat(infoItem1.shift());

//var codeItem2 = parseInt(infoItem2.shift());
//var amountItem2 = parseInt(infoItem2.shift());
//var priceUnityItem2 = parseFloat(infoItem2.shift());

var totalItem1 = amountItem1*priceUnityItem1;
var totalItem2 = amountItem2*priceUnityItem2;

var totalToPay = totalItem1 + totalItem2;

console.log('VALOR A PAGAR: R$ ' +totalToPay.toFixed(2));