// Crie o costume de adicionar IDs a elementos únicos e classes a elementos com comportamentos similares, pois isso facilitará muito sua vida como pessoa desenvolvedora;
// Procure saber mais sobre as Tags <label> e <fieldset> clicando nas documentações a seguir:
// Label;
// Fieldset.
// O formulário deverá permitir que a pessoa usuária insira os seguintes campos:
// Nome Completo:

// Limitado entre 10 e 40 caracteres.
// E-mail:

// Limitado entre 10 e 50 caracteres.
// Destino Preferido:

// 4 opções: Cidade, Campo, Praia, Montanhas.
// Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?

// Limite de 500 caracteres.
// Qual a melhor data para realizar sua viagem?

// Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?

// Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.

// Esses serão os principais campos utilizados nos próximos exercícios.

// Crie um botão para enviar as informações preenchidas.
// Agora vamos utilizar um pouco de javascript. Para isso, crie o arquivo script.js e o referencie no HTML.

// Dica: Coloque a tag <script> no final do seu body.
// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().

// Crie um botão que limpe as informações contidas nos campos.

// (Bônus) A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.

// (Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.

window.onload = function () {
  const inputEnvia = document.querySelector('#input-envia');
  inputEnvia.addEventListener('click', handleSubmit);
};

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}

function enableSubmit() {
  const submitBtn = document.querySelector('#input-envia');
  const agreement = document.querySelector('#input-check-2');
  submitBtn.disabled = !agreement.checked;
}

window.onload = function () {
  const clearBtn = document.querySelector('#input-apaga');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#input-envia');
  submitBtn.addEventListener('click', handleSubmit);
  const agreement = document.querySelector('#input-check-2');
  agreement.addEventListener('change', enableSubmit);
};

function textInputValidation() {
  const email = document.querySelector('#input-Email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#input-Nome').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#text-me').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}
