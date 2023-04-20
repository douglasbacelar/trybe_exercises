const a = 10;
const b = 15;
const c = 20;

// Parte 1
console.log('Soma:' + (a+b));
console.log('Subtracao:' + (a-b));
console.log('Multiplicacao:' + (a*b));
console.log('Divisao:' + (a/b));
console.log('Modulo:' + (a%b));

// Parte 2

if (a>b) {
  console.log("'a' é maior que 'b'");
} else {
  console.log("'a' é menor que 'b'");
};

// Parte 3

if (a>b && a>c) {
  console.log("a' é maior que 'b e c'");
} else if (b>a && b>c) {
  console.log("'b é maior que 'a e c'");
} else (c>a && c>b); {
  console.log("'c' é maior que 'a e b'");
}

// Parte 4 

const numero = 16

if (numero > 0) {
  console.log("Positive"); 
} else if (numero < 0) {
  console.log("Negative")
} else {
  console.log("Zero");
};

// Parte 5

const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}

// Parte 6

let chesspiece = 'bispo';

switch(chesspiece) {
  case 'rei': 
    console.log('Rei -> Uma casa apenas para qualquer direção')
    break;
  case 'bispo': 
    console.log('Bispo -> Diagonal');
    break;
  case 'rainha': 
    console.log('Rainha -> Diagonal, horizontal e vertical');
   break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
   case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}

// Parte 7

const nota = 65;

if (nota >= 90) {
  console.log('Sua nota é A');
} else if (nota >= 80) {
  console.log('Sua nota é B');
} else if (nota >= 70) {
  console.log('Sua nota é C');
} else if (nota >= 60) {
  console.log('Sua nota é D');
} else if (nota >= 50) {
  console.log('Sua nota é E');
} else {
  console.log('Sua nota é F');
};

// Parte 8

const q = 41;
const w = 53;
const e = 21;

let codigo =false;

if ((q % 2 === 0 || w % 2 === 0 || e % 2 === 0)) {
  codigo = true;
};
console.log(codigo);

// Parte 9

const r = 41;
const t = 53;
const y = 21;

let code =false;

if ((r % 2 === 0 || t % 2 === 0 || y % 2 === 0)) {
  code = true;
};
console.log(code);

// Parte 10


const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};

// Parte 11


let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
