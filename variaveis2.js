/*
ES6
let
=> contexto/escopo é de bloco
=> não podem ser declaradas mais de uma vez
=> podem ser alteradas mais de uma vez
=> mecanismo hoisting 
*/

// let nome = 'Jessica';
// let sobrenome ='Medeiros';

// if (sobrenome) {
//     let nome = 'Jessica Medeiros';
//     console.log(nome)
// }

// console.log(nome);


// let nome = 'Jessica';
// let nome = 'Beatriz';


// let nome = 'Jessica';
// nome = 'Beatriz';
// nome = 'Jojo';

// console.log(nome);

// console.log(nome);
// let nome = 'Jessica';

// let nome;
// console.log(nome);
// nome = 'Jessica';


// try {

// }catch(e) {
    
// }


let nome = 'Jessica';

if (nome) {
    // no contexto de bloco
    let digaOla = 'Olá, ' + nome;
    console.log(digaOla)
}

// no contexto global
let digaOla = 'ola';

console.log(digaOla);