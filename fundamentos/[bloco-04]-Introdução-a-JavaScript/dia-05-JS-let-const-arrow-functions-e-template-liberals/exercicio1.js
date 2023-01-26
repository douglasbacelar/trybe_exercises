// 🚀 Altere a expressão if/else utilizando ternary operator;

// Copie o código abaixo:


    // let speed = 90;
    // const speedCar = (speed) => {
    //   if (speed >= 120) {
    //     return `Você ultrapassou o limite de velocidade`;
    //   } else {
    //     return `Você está na velocidade permitida`;
    //   }
    // };
    // console.log(speedCar(speed));


    let speed = 90;
    const speedCar = speed => (speed >= 120 ? `Você ultrapassou o limite de valocidade` : `Você está na velocidade permitida`);

    console.log(speedCar(speed));

