// 1 - Crie uma função que gere um card de filme
// A função deve receber o título do filme por parâmetro:

// Criar uma div com a classe card-filme;
// Criar um elemento de texto que receba o título do filme;
// Adicionar o elemento de texto como filho da div;
// Retornar o card de filme criado.
// Se a função for chamada com o valor Toy Story como parâmetro, retornará:

// <div class="card-filme">
//   <p>Toy Story</p>
// </div>

const favoritaFilme = (event) => {
  const defineFavorito = document.querySelector('.card-filme');
  defineFavorito.classList.add('favoritado');
  event.target.classList.add('favoritaço');
  criaDiv.classList.toggle('favoritaço');
}

const pegaSection = document.getElementById('filmes');

const filme = (nomeFilme) => {
  criaDiv = document.createElement('div');
  criaDiv.addEventListener('click', favoritaFilme);
  criaDiv.classList.add('card-filme');
  criaTexto = document.createElement('p');
  criaTexto.innerHTML = nomeFilme;
  criaDiv.appendChild(criaTexto);
  pegaSection.appendChild(criaDiv);
}

// 2 - Adicione quatro cards na seção de filmes
// Detalhamento do exercício
// A section com id filmes deve receber os quatro cards de filmes:
// Capturar a section com id filmes;
// Criar quatro cards de filmes utilizando a função do exercício anterior;
// Adicionar os quatros cards como elementos filhos da section capturada;
// Se povoarmos a section com os filmes Matrix, Matrix Reloaded, Matrix Revolutions e Matrix Resurrections o resultado será:

// <section id="filmes">
//   <div class="card-filme">
//     <p>Matrix</p>
//   </div>
//   <div class="card-filme">
//     <p>Matrix Reloaded</p>
//   </div>
//   <div class="card-filme">
//     <p>Matrix Revolutions</p>
//   </div>
//   <div class="card-filme">
//     <p>Matrix Resurrections</p>
//   </div>
// </section>

const array = ['Matrix', 'Matrix Reloaded', 'Matrix Revolution', 'Matrix Resurrections'];

const filmeFavorito = (cards) => {
    for (let index = 0; index < cards.length; index += 1) {
    filme(cards[index]);
  };
}
filmeFavorito(array);

// 3 - Crie uma função que favorite um filme
// Detalhamento do exercício
// A função deve permitir favoritar um filme por vez, além de destacar o nome do filme favoritado:
// Permitir que apenas um card de filme por vez possua a classe favoritado;
// Acidionar ao p com id filme-selecionado o título do filme que estiver com a classe favoritado;
// Se o filme favoritado for Iron Man seu título ficará em destaque:

// <p id="filme-selecionado">Iron Man</p>





