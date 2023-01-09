1 🚀 - Crie erros personalizados.

Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?

Utilize o throw new Error e o bloco try/catch.

Evite funções que tenham muitas responsabilidades distintas.

Caso a pessoa usuária não preencha nenhum input, ou preencha apenas um input, lance um erro.

Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função isNan().

Adicione o texto dos erros no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!

Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch.

De olho na dica 👀: Cuidado ao utilizar o isNaN, pois valores considerados falsy são convertidos em 0, e valores truthy convertidos em 1, podendo assim gerar um falso positivo. Por exemplo, isNaN(true) retorna false, dado que true será convertido para 1, que é um número. De olho na dica 👀: Lembre-se de que, em JavaScript, para separar a parte inteira da decimal de um número, você deve utilizar o .. Exemplo: 1.5, com ponto, ao invés de 1,5, com vírgula.