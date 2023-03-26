var input = require('fs').readFileSync('stdin', 'utf8');

const [initialTime,endTime] = input.split(' ').map(Number);

function spentHours (initialTime, endTime){
    if (initialTime<endTime)
       return endTime - initialTime;
    else
     if (initialTime>=endTime)
        return (24 + endTime) - initialTime;
       
  }

spentHours(initialTime,endTime);

const result = spentHours(initialTime, endTime);

console.log(`O JOGO DUROU ${result} HORA(S)`);
