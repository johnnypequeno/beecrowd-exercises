var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ");

const code = Number(lines[0]);
const amount = Number(lines[1]);

function food (code,amount){
    switch (code) {
        case 1:
            console.log(`Total: R$ ${(amount*4.00).toFixed(2)}`);
            break;
        case 2:
            console.log(`Total: R$ ${(amount*4.50).toFixed(2)}`);
            break;
        case 3:
            console.log(`Total: R$ ${(amount*5.00).toFixed(2)}`);
            break;
        case 4:
            console.log(`Total: R$ ${(amount*2.00).toFixed(2)}`);
            break;
        case 5:
            console.log(`Total: R$ ${(amount*1.50).toFixed(2)}`);
    }

}
food(code,amount);
