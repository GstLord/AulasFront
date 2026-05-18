const soma = (a,b) => a + b;

const subtracao = (a,b) => a - b;

const multiplicacao = (a,b) => a * b;

const divisao = (a,b) => b > 0? a / b: NaN;
                    //if ternário se b for menor que zero, retorna um NotaNumber

const calculo = (operacao, a, b) => operacao(a,b);
                //Cricação de uma função chamada operação, que retorna ela mesma, e os parametros 

console.log(soma(2, 3));           // 5
console.log(subtracao(5, 2));      // 3
console.log(multiplicacao(4, 3));  // 12
console.log(divisao(10, 2));       // 5
console.log(divisao(10, 0));       // NaN

console.log(calculo(soma, 2, 3));          // 5
console.log(calculo(multiplicacao, 2, 3)); // 6

