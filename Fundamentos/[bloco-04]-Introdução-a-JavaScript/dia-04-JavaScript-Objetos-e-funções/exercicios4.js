// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4.

function maiorIndice (array) {
  let maiorIndice = 0; 
    for(let index in array) {
      if(array[maiorIndice] < array[index]) {
        maiorIndice = index
      }
    }
    return maiorIndice;
  }

  console.log(maiorIndice([2, 3, 6, 7, 10, 1]));
