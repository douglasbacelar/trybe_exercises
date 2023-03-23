
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
