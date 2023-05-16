# Exercícios

## Parte I: Comandos de input e output

* 1- Crie a pasta unix_tests_skills e navegue até ela.

* 2- Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.

* 3- Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

* 4- Conte quantas linhas tem o arquivo skills2.txt.

* 5- Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.

* 6- Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

* 7- Conte o número de linhas que contêm as letras br.

* 8- Conte o número de linhas que não contêm as letras br.

* 9- Adicione dois nomes de países ao final do arquivo phrases2.txt.

* 10- Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

* 11- Ordene o arquivo bunch_of_things.txt.

## Parte II: Permissões

* 1- Crie a pasta unix_tests_permissions e navegue até ela.

* 2- Rode o comando ls -l e veja quais as permissões dos arquivos.

* 3- Mude a permissão do arquivo arquivo_teste.txt para que todas as pessoas usuárias possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;

Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt

* 4- Tire a permissão de escrita do arquivo arquivo_teste.txt para todas as pessoas usuárias, verifique se está correto com o comando ls -l;

Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt

* 5- Volte à permissão do arquivo arquivo_teste.txt para a listada inicialmente utilizando o comando chmod 644 arquivo_teste.txt.

Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt

## Parte III: Processos & jobs

* 1- Liste todos os processos.

* 2- Agora use o comando sleep 30 &.

* 3- Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução ~~(mate o processo)~~.

* 4- Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background.

* 5- Crie um processo em background que rode o comando sleep por 300 segundos.

* 6- Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente. Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.

* 7- Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo. Você vai precisar trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal.

* 8- Retome a execução do processo sleep 100 em background com o comando bg.

* 9- Termine a execução de todos os processos sleep ~~(mate os processos)~~.

## Parte IV: (bônus) - O despertar do terminal

* 1- e você utiliza o Linux, abra o terminal e execute o comando sudo apt-get install cmatrix, ou para pessoas usuárias de macOS, utilize no terminal brew install cmatrix. Depois, execute o comando cmatrix. Quando estiver se sentindo como o Neo, aperte ctrl+c para voltar ao terminal;

* 2- No sistema Linux, execute o comando sudo apt-get install fortune, ou no macOS brew install fortune e, após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune, e o operador >;

* 3- Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc;

* 4- Execute o comando sudo apt-get install sl em um terminal Linux, ou brew install sl em um terminal macOS. Após a instalação, execute o comando sl. Agora tente sl -f;

* 5- No sistema Linux, execute o comando sudo apt-get install cowsay, ou brew install cowsay no macOS. Após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt;

* 6- Descubra os fatores primos usando o comando factor e em seguida o número 42;

* 7- Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev;

* 8- Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos.