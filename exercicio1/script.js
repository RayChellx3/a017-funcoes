// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
//FUNÇÃO SIMPLES
function nome(imprimeNome){
    console.log(`Olá ${imprimeNome}`)
}
nome("Raquel")

//FUNÇÃO ARROW

const imprimeNome2 = () => {
    const meuNome = "Raquel"
    return meuNome
}
imprimeNome2("Olá")

// const nome = (imprimeNome) => {
//     const imprimeNome = "Raquel"
//     return ("Olá"+ imprimeNome)
// }
// nome (imprimeNome)

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

const tabSeis = 6
function tabuada (){
    for (let x=1; x<=10; x++){
        console.log(`${tabSeis}x ${x} = ${tabSeis * x}`)
    }
}
tabuada()

// function tabuada (){
//     for (let x in array){
//         console.log(`${tabSeis}x ${array[x]} = ${tabSeis * array[x]}`)
//     }
// }
// console.log(tabuada)

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 



