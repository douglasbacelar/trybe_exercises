# Parte 1: Para fixar

* 1- Modifique o tamanho do h1 para 65 pixels;

* 2- Modifique a cor do texto do h1 para laranja;

* 3- Modifique a cor de fundo da lista não ordenada;

* 4- Crie uma classe para modificar a cor de fundo da tag p e da ul ao mesmo tempo.

# Parte 2: Para fixar 2

* 1- Modifique o font-family do h1 para sans-serif;

* 2- Deixe o parágrafo com o font-weight 600;

* 3- Modifique o font-size do body para 16px;

* 4- Coloque o tamanho do parágrafo com o tamanho de 3 vezes o padrão do body;

* 5- Explore as propriedades font-style, line-height, text-align e text-decoration;

* 6- Troque a cor de fundo de cada item da lista para a cor correspondente ao texto.

# Parte 3: Para fixar 3

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Trybe</title>
    <style>
      h1 {
        color: seagreen;
        font-size: 65px;
        font-family: sans-serif, Helvetica; 
      }

      .cor-de-fundo {
        background-color: whitesmoke;
      }

      p {
        font-weight: 600;
      }

      body {
        font-size: 16px;
      }

      li {
        font-style: italic;
        line-height: 60px;
        text-align: center;
        text-decoration: underline;
        font-size: 2em;
      }

      #verde {
        background-color: green;
      }

      #verde-escuro {
        background-color: seagreen;
      }

      #azul {
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Trybe</h1>
    <h2 class="cor-de-fundo">Um novo curso para sua vida</h2>
    <p class="cor-de-fundo">A porta de entrada para a sua carreira em tecnologia</p>
    <ul>
      <li id="verde">Ensinamos a programar</li>
      <li id="verde-escuro">Ensinamos a aprender</li>
      <li id="azul">Ensinamos a trabalhar</li>
    </ul>
  </body>
</html>

* 1- Coloque todo o CSS da tag style em um arquivo externo.