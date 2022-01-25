/*
ES6
var
=> contexto/escopo global e pode ter o contexto/escopo de função
=> podem ser declaradas mais de uma vez
=> podem ser alteradas mais de uma vez
=> mecanismo hoisting 
=> Problema encontrado na var
*/

// var nome = "Jessica";

// function digaOla() {
//     var ola = 'ola';
// }

// console.log(ola);
// digaOla();

// var nome = 'Jessica';
// var nome = 'Beatriz';

// console.log(nome);

// var nome = 'Jessica';
// nome = 'Beatriz';

// console.log(nome);



// console.log(nome);
// var nome = 'Jessica'; nome is not defined


// var nome;
// console.log(nome);
// nome = 'Jessica'; underfined


var nome = 'Jessica';
var sobrenome = 'Medeiros';

if (sobrenome) {
    var nome = 'Jessica Medeiros';
}

console.log(nome);


