// 🚀 Organizando biblioteca
// A empresa em que você trabalha fechou um contrato com uma biblioteca e você está responsável por desenvolver o novo sistema para organizar os livros. O acervo que a biblioteca possui está descrito no array abaixo:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 🚀 1 - Filtre todos os objetos do gênero ficção científica ou fantasia.
const genre = () => {
  return books.filter((type) => {
    return type.genre === 'Ficção Científica' || type.genre === 'Fantasia'})
}

console.log(genre(books));

// 🚀 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

// De olho na dica 👀: para acessar o ano atual, pesquise sobre “como resgatar o ano atual com JavaScript” e use as funções filter e sort.

const actualYear = new Date().getFullYear();

const releaseYearBook = () => {
  return books.filter((actualBook) => (actualYear - actualBook.releaseYear) > 60
  ).sort((a, b) => a.releaseYear - b.releaseYear);
}
console.log(releaseYearBook(books));