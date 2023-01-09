// Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.

// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.

// Você deve aplicar preferências das pessoas leitoras na página, para melhorar a experiência de leitura dessas pessoas.

// As pessoas devem ter o poder de alterar:

// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte (Font family).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

// Você também recebeu a imagem abaixo para ter uma referência de como a página ficará quando estiver pronta.

window.onload = function (){  
  let select = document.querySelector('select');
  select.addEventListener('change', function() {
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;

    localStorage.setItem('5.4-background-color', selected.value);
  });

  let inputFontSize = document.querySelector('input[name="font-size"]');
  inputFontSize.addEventListener('change', function() {
    let p = document.querySelector('p');
    p.style.fontSize = `${inputFontSize.value}px`;
    localStorage.setItem('5.4-font-size',`${inputFontSize.value}px` );
  });

  let savedBackground = localStorage.getItem('5.4-background-color');
  document.body.style.backgroundColor = savedBackground;

  let savedFontsize = localStorage.getItem('5.4-font-size');
  document.body.style.fontSize = savedFontsize;
}

