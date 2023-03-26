var input = require('fs').readFileSync('stdin', 'utf8');


const entry = input.split('\n');

const t = Number(entry.shift());

for (let i = 0; i < t; i++) {
    let [pa, pb, g1, g2] = entry.shift().split(' ').map(x => Number(x));
    g1 /= 100;
    g2 /= 100;
    time = 'Mais de 1 seculo.';

for (let j = 1; j < 101; j++) {
    pa += Math.floor(pa * g1);
    pb += Math.floor(pb * g2);

    if (pa > pb) {
      time = `${j} anos.`;
      break;
    }
  }

  console.log(time);
}
