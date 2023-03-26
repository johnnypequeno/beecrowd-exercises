var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
    
    for (let i = 1; i <= lines[0]; i++) {
        const [x, y] = lines[i].split(' ').map(Number);
      
        if (y === 0) {
            console.log('divisao impossivel');
          } else {
            const result = x / y;
            if (!isNaN(result)) {
              console.log(result.toFixed(1));
            } else {
              console.log('');
            }
          }
        }