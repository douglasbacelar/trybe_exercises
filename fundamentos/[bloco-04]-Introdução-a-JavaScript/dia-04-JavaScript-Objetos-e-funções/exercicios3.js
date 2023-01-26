// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

function verificapalindromo(palavra) {
  for (index in palavra) {
    if(palavra[index] != palavra[(palavra.length -1) - index]) {
      return false;
    }
  }
  return true;
}
console.log(verificapalindromo('radar'));