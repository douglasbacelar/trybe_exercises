let statusMotor = 'desligado';

const ligarDesligar = ()  => 
(statusMotor === 'desligado' ? statusMotor = 'desligado' : statusMotor = 'ligado')

console.log(`O motor está ${ligarDesligar()}`);
