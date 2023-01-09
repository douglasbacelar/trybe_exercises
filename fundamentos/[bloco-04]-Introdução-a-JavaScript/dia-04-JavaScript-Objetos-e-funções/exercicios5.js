// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.

function inteiros (array) {
  inteiros = 0;
  for (index in array) {
    if(array[inteiros] > array[index]); {
      inteiros = index
    }
  }
  return inteiros;
};

console.log(inteiros([2, 4, 6, 7, 10, 0, -3]));