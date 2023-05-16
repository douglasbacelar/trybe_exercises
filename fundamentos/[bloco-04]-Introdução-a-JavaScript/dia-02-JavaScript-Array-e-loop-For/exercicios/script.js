// Parte 1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index])
};

console.log ('');

// Parte 2

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let index of names) {
  console.log(index);
};

console.log('');

// Parte 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index +=1) {
  console.log(numbers[index])
};

// Parte 3.1
console.log('');

let resultado = 0;
for (index = 0; index < numbers.length; index +=1) {
  resultado += numbers[index];
};
console.log(resultado);

// Parte 3.2
console.log('');

let media = resultado/numbers.length
console.log(media);

// Parte 3.3
console.log('');

if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
};

// Parte 3.4
console.log('');

let maiorNumero = numbers[0];
for (let index = 1; index < numbers.length; index +=1 ) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}
console.log(maiorNumero);

// Parte 3.5
console.log('');

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

// Parte 3.6
console.log('');

let menorNumero = numbers[0];
for (let index = 1; index < numbers.length; index +=1 ) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}
console.log(menorNumero);

// Parte 3.7
console.log('');

let numeral = [];

for (let index = 1; index <= 25; index += 1) {
  numeral.push(index);
}

console.log(numeral);

// Parte 3.8
console.log('');

for (let index = 0; index < numeral.length; index += 1) {
  console.log(numeral[index] / 2);
};




