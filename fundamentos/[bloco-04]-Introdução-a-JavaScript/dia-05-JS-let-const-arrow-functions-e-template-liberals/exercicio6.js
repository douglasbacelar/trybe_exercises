// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

// O nome da função deverá ser minhasSkills;

// A função deverá receber o retorno da Função 1 - substituaX por parâmetro;

// Declare dentro da função uma variável com o nome skills, do tipo const;

// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

// Exemplo de retorno:

// Tryber Bebeto aqui!

// Minhas três principais habilidades são:

// JavaScript
// HTML
// CSS

// Resolução do exercicio anterior:
const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

// console.log(substituaX('Bebeto'));

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    resultado = `${resultado}
    - ${skills[index]}`;
  }
  return resultado;
};
console.log(minhasSkills(substituaX('Bebeto')));