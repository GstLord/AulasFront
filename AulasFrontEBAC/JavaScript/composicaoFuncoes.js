const gritar = s => s.toUpperCase()
const enfatizar = s => `${s}!!!` //lembrar de template literal -> ´${}´

//const status = `Você é ${idade >= 18 ? "maior" : "menor"} de idade`; (Eu posso validar algo em poucas linhas de codigo usando esse template como nesse exemplo)

const gritado = gritar('para')
const enfatizado = enfatizar(gritado)

const perguntar = s => `${s}???`



// const compor = (fn1, fn2, fn3, texto) => {
//     return function (texto) {
//         let resultado = fn1(texto)
//         resultado = fn2(resultado)
//         resultado = fn3(resultado)
//         return resultado
//     }
   

// }

const compor = (fn1, fn2, fn3,texto) => {
    let resultado = fn1(texto)
    resultado = fn2(resultado)
    resultado = fn3(resultado)
    return resultado

}

const resultado = compor(gritar, enfatizar, perguntar, 'bom dia')
console.log(resultado)
console.log(enfatizado)