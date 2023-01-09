// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// Valor esperado no retorno da função: Fernanda.

function nome (array) {
  nome = array[0];
  for(index in array) {
    if(nome.length < array[index].length) {
      nome = array[index]
    }
  }
  return nome
}
console.log(nome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));