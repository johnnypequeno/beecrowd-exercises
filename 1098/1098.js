let input = require('fs').readFileSync('stdin', 'utf8');

let j = 1.0;
for(let i = 0.0; i < 2.0; i += 0.2){
    for(let cont = 0; cont < 3; cont++, j++){
        const verify_integer = (n) => {
            let num_str = n.toFixed(1) + '';
            if(num_str.charAt(2) === '0') return true;
            return false;
        };
        if(verify_integer(i)) console.log(`I=${i.toFixed(0)} J=${j.toFixed(0)}`);
        else console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}`);
    }
    j -= 2.8;
}

//A sequência é gerada por meio de dois loops aninhados, e o resultado final é impresso no console.
//Na primeira linha, o código utiliza o módulo fs do Node.js para ler a entrada padrão (stdin). 
//Essa entrada não é utilizada no código.
//A variável j é iniciada com o valor 1.0 e é utilizada para gerar a segunda parte 
//do resultado de cada linha da sequência.

//O loop externo começa com a variável i igual a 0.0 e se repete 
//enquanto i for menor do que 2.0, incrementando i em 0.2 a cada iteração. Esse loop externo é responsável pela primeira parte do resultado de cada linha da sequência.
//O loop interno é responsável por gerar as três linhas com base em cada valor de i. 
//A cada iteração, a variável cont é incrementada e j é incrementado em 1.0. O if dentro do loop verifica se o valor de i é um número inteiro e, dependendo do resultado, imprime uma linha com a primeira parte do resultado formatado como um número inteiro ou como um número decimal com uma casa decimal.
//No final do loop interno, j é decrementado em 2.8 para iniciar 
//a próxima iteração com o valor correto de j.
//O resultado final é impresso no console usando o console.log(). 
//A primeira parte do resultado é formatada usando o método toFixed() 
//para definir o número de casas decimais.