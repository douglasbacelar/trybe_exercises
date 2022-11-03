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

// 3 - Crie uma função que favorite um filme
// Detalhamento do exercício
// A função deve permitir favoritar um filme por vez, além de destacar o nome do filme favoritado:
// Permitir que apenas um card de filme por vez possua a classe favoritado;
// Acidionar ao p com id filme-selecionado o título do filme que estiver com a classe favoritado;
// Se o filme favoritado for Iron Man seu título ficará em destaque:

// <p id="filme-selecionado">Iron Man</p>

// 4 - Adicione o evento de clique em cada card
// Detalhamento do exercício

// Cada card deve possuir um evento de clique que dispara a função criada no exercício anterior:

// Adicionar evento de clique para selecionar um card, o deixando favoritado;
// Ao clicar em card diferentes, além da classe favoritado mudar entre os cards, o título em destaque no p de id filme-selecionado também deve mudar;

const secaoDeFilmes = document.getElementById('filmes');

const selecionaFilmeFavorito = (evento) => {
  const filmeSelecionado = document.getElementsByClassName('favoritado')[0];

  if (filmeSelecionado !== undefined) {
    filmeSelecionado.classList.remove('favoritado');
  }

  evento.target.classList.add('favoritado');
  document.getElementById('filme-selecionado').innerText = evento.target.innerText;
}

const geraCardDeFilme = (tituloDoFilme) => {
  const card = document.createElement('div');
  const titulo = document.createElement('p');

  card.classList.add('card-filme');
  titulo.innerText = tituloDoFilme;

  card.appendChild(titulo);
  card.addEventListener('click', selecionaFilmeFavorito);

  return card;
}

secaoDeFilmes.appendChild(geraCardDeFilme('Harry Potter'));
secaoDeFilmes.appendChild(geraCardDeFilme('Star Wars'));
secaoDeFilmes.appendChild(geraCardDeFilme('Senhor dos Anéis'));
secaoDeFilmes.appendChild(geraCardDeFilme('Toy Story'));



