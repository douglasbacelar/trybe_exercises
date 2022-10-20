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