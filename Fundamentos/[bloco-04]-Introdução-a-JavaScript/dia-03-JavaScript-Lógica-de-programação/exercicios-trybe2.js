
// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:

let sum = 0;

for (let count = 0; count <= 50; count = count + 1) {
  sum += count;
}

console.log('A soma total de 1 a 50 é: ' + sum);
// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let counter = 0;
for (let index = 2; index <= 150; index += 1) {
  if (index % 3 === 0) {
    counter += 1;
  }
}

if (counter === 50) {
  console.log('secret Message!');
}
// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let person1 = 'scissors';
let person2 = 'stone';

if (person1 === 'paper' && person2 == 'stone') {
  console.log('Player 1 won');
} else if (person1 === 'stone' && person2 === 'scissors') {
  console.log('Player 1 won');
} else if (person1 === 'scissors' && person2 === 'paper') {
  console.log('Player 1 won');
} else if (person1 === person2) {
  console.log('A Ties');
} else {
  console.log('Player 2 won');
}
// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.

let age = 20;
let category;

// Com if/else
if (age >= 18) {
  category = 'maior de idade';
} else {
  category = 'menor de idade';
};

console.log('A pessoa é ' + category);

// Utilizando o operador ternário
category = (age >= 18) ? 'maior de idade' : 'menor de idade';

console.log('A pessoa é ' + category);
// 5 - Crie um algoritmo que recebe a idade de Carolzita , Oliva e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let ageCarolzita = 18;
let ageOliva = 16;
let ageBaeta = 19;

if (ageCarolzita < ageOliva && ageCarolzita < ageBaeta) {
  console.log('Carolzita é a mais nova');
} else if (ageOliva < ageCarolzita && ageOliva < ageBaeta) {
  console.log('Oliva é o mais novo');
} else {
  console.log('Baêta é é o mais novo');
}