// 🚀 Exercício 1
// Crie uma aplicação React e implemente um formulário contendo os dados pessoais de uma pessoa estudante da Trybe. Os seus componentes precisam ser funcionais e, para gerenciamento do estado, precisam utilizar hooks.

// O formulário deve conter:

// Input do tipo text contendo o nome completo;
// Input do tipo number contendo a idade;
// Input do tipo text contendo a cidade;
// Quatro inputs do tipo radio button contendo o módulo que está estudando (Fundamentos, Front-end, Back-end ou Ciência da Computação);
// Um botão para submeter as informações. Nesse exercício você não precisa implementar o click, o botão deve apenas existir na aplicação.
// Dica: Utilize o hook useState para gerenciar o estado do seu componente!

import React, { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  return (
    <div>
     <fieldset>
      <legend>Dados pessoais</legend>
        <label htmlFor="name">
            Nome Completo
          <input type="text" id="name" value={ name } onChange={ (e) => setName(e.target.value) }/>
        </label>

        <label htmlFor="age">
            Idade
          <input type="Number" id="age" value={age} onChange={ (e) =>setAge(e.target.value )}/>
        </label>

        <label htmlFor="city">
            Cidade
          <input type="text" id="city" value={ city } onChange={ (e) =>setCity(e.target.value )}/>
        </label>

     </fieldset>

     <fieldset>
      <legend>Módulos</legend>
        <label htmlFor="fundamentos">
          Fundamentos
          <input type="radio" id='fundamentos' checked={ module === "Fundamentos"} onChange={ ({ target }) => setModule(target.value)} name="Fundamentos" value="Fundamentos" />
        </label>
        <label htmlFor='Front-end'>
          Front-end
          <input type="radio" name="Front-end" id='Front-end' value="Front-end" checked={ module === "Front-end"} onChange={ ({ target }) => setModule(target.value)}/>
        </label>
        <label htmlFor='Back-end'>
          Back-end
          <input type="radio" name="Back-end" value="Back-end" id='Back-end' checked={ module === "Back-end"} onChange={ ({ target }) => setModule(target.value)} />
        </label>
        <label htmlFor='Ciência-da-computação'>
          Ciência da Computação
          <input type="radio" name="Ciência-da-computação" value="Ciência-da-computação" id='Ciência-da-computação' checked={ module === "Ciência-da-computação"} onChange={ ({ target }) => setModule(target.value)} />
        </label>

     </fieldset>

     <button>
      Submit
     </button>

    </div>
  );
}

export default Form;