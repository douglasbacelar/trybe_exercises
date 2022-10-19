#Exercicios 1

Vamos reproduzir esse esquema de itens no seu browser! Copie os códigos abaixo e cole-os no seu VS Code, criando um arquivo index.html e um arquivo style.css.

Você provavelmente não conhece algumas das propriedades utilizadas nesse código, mas não se preocupe, por enquanto se concentre nas classes que você deve alterar de acordo com as instruções dos comentários.

index.html

Copiar
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício: box model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caixa width-and-height" style="background: #036b52">A</div>
  <div class="caixa width-and-height padding" style="background: #41197f;">B</div>
  <div class="caixa width-and-height padding margin" style="background: #444955">C</div>
  <div class="caixa width-and-height padding margin border" style="background: #3898EC">D</div>
</body>
</html>
style.css

Copiar
.caixa {
  color: white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  vertical-align: top;
}

.width-and-height {
  height: 50px;
  width: 50px;
}

/* insira na classe abaixo um padding de 20px para aplicá-lo aos itens B, C e D */
.padding {

}

/* insira na classe abaixo uma margem de 30px para aplicá-la aos itens C e D */
.margin {

}

/* insira na classe abaixo uma borda com valor '5px solid black' para aplicá-la ao item D */
.border {
  
}

# Exercicios 2

Vamos reproduzir esse esquema de itens no seu browser! Copie os códigos abaixo e cole-os no seu VS Code, criando um arquivo index.html e um arquivo style.css.

Você provavelmente não conhece algumas das propriedades utilizadas nesse código, mas não se preocupe, por enquanto se concentre nas classes que você deve alterar de acordo com as instruções dos comentários.

index.html

Copiar
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício: box model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caixa width-and-height" style="background: #036b52">A</div>
  <div class="caixa width-and-height padding" style="background: #41197f;">B</div>
  <div class="caixa width-and-height padding margin" style="background: #444955">C</div>
  <div class="caixa width-and-height padding margin border" style="background: #3898EC">D</div>
</body>
</html>
style.css

Copiar
.caixa {
  color: white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  vertical-align: top;
}

.width-and-height {
  height: 50px;
  width: 50px;
}

/* insira na classe abaixo um padding de 20px para aplicá-lo aos itens B, C e D */
.padding {

}

/* insira na classe abaixo uma margem de 30px para aplicá-la aos itens C e D */
.margin {

}

/* insira na classe abaixo uma borda com valor '5px solid black' para aplicá-la ao item D */
.border {
  
}

# Exercicios 3

Para fixar
Vamos praticar o que aprendemos.

Copie o código HTML abaixo e faça o que for pedido:

index.html

Copiar
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Agrupando Seletores</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Lista dos Melhores Sites que já vi</h1>
    <p>Top 3 dos melhores sites que existem na web</p>
    <p>Principais motivos para eu gostar deles</p>
  </body>
</html>
Adicione uma lista ordenada dos 3 melhores sites que você conhece.

Crie um arquivo no mesmo diretório e nomeie-o de ‘style.css’.

Nesse arquivo .css, adicione os estilos para que:

O texto das tags ‘h1’ e ‘p’ estejam centralizados.
A cor de fundo da sua lista mude quando o cursor estiver sobre o item.
A fonte do item mude quando ele for clicado.
Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.

No ‘style.css’, adicione a propriedade ‘list-style: none’ para ambas as listas.

# Exercicios 4

🚀 Para fixar
Para este exercício, você não deve atribuir nenhuma classe ou id aos componentes, mas apenas utilizar pseudo-classes para individualizar cada elemento!

index.html

Copiar
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Pseudo-classes</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Paleta de Cores</h1>
  <p>Vamos criar uma paleta de cores com as divs abaixo:</p>
  <div>
    <h3>Cor primária</h3>
  </div>
  <div>
    <h3>Cor Secundária</h3>
  </div>
  <div>
    <h3>Cor Complementar</h3>
  </div>
  <div>
    <h3>Cor Escura</h3>
  </div>
  <div>
    <h3>Cor Clara</h3>
  </div>
</body>
</html>
Estilize as divs para que, ao passar o cursor por cima das mesmas, elas ganhem uma borda.

Faça cada div ter uma cor própria.

Estilize cada uma das tags h3.

Faça a terceira div ser maior que as demais.

Deixe as tags ímpares h3 com o texto em itálico.

# Exercicios 5

🚀 Para fixar
Para este exercício, você não deve atribuir nenhuma classe ou id aos componentes, mas apenas utilizar pseudo-classes para individualizar cada elemento!

index.html

Copiar
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Pseudo-classes</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Paleta de Cores</h1>
  <p>Vamos criar uma paleta de cores com as divs abaixo:</p>
  <div>
    <h3>Cor primária</h3>
  </div>
  <div>
    <h3>Cor Secundária</h3>
  </div>
  <div>
    <h3>Cor Complementar</h3>
  </div>
  <div>
    <h3>Cor Escura</h3>
  </div>
  <div>
    <h3>Cor Clara</h3>
  </div>
</body>
</html>
Estilize as divs para que, ao passar o cursor por cima das mesmas, elas ganhem uma borda.

Faça cada div ter uma cor própria.

Estilize cada uma das tags h3.

Faça a terceira div ser maior que as demais.

Deixe as tags ímpares h3 com o texto em itálico.



