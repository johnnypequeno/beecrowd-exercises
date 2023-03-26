let input = require('fs').readFileSync('stdin', 'utf8');

let value = parseInt(input);

const bankNotes = [100,50,20,10,5,2,1];

console.log (value);

for (let note of bankNotes) {
    let amountBankNotes = parseInt(value/note);
    console.log(`${amountBankNotes} nota(s) de R$ ${note},00`);
    value = value%note;
}