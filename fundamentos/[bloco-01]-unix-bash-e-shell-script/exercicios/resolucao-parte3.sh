## Parte III: Processos & jobs

1- Liste todos os processos.
 
ps
 
2- Agora use o comando sleep 30 &.
 
sleep 30 &
 
3- Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução ~~(mate o processo)~~.
 
ps | grep sleep

4- Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background.
 
sleep 30
bg
 
5- Crie um processo em background que rode o comando sleep por 300 segundos.
 
sleep 300 &
 
6- Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente. Você deve criá-los em foreground (sem usar o &) e enviá-los para background após cada um começar a executar.
 
sleep 200
ctrl z 
sleep 100
ctrl z 
 
7- Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo (você vai precisar trazer o processo para foreground e suspendê-lo, ou enviar um sinal).
 
jobs
fg %1 
ctrl z 
jobs

8-Retome a execução do processo sleep 100 em background.
 
bg %3
jobs

9- Termine a execução de todos os processos sleep ~~(mate os processos)~~.
 
ps | grep sleep
kill 