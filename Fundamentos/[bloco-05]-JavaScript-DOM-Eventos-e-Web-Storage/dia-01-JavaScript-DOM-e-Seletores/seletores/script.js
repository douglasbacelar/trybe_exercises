const header = () => {
  let head1 = document.querySelector('#header-container').style.backgroundColor = 'rgb(76,164,109)';
}
header();

const sectionsEmergency = (selector, selector2) => {
  document.querySelector(selector).style.backgroundColor = '#ed8484';
  const firstColor = document.querySelectorAll(selector2);
  for(let index = 0; index < firstColor.length; index += 1) {
    firstColor[index].style.backgroundColor = '#ae81ff';
  }
};

sectionsEmergency('.emergency-tasks', '.emergency-tasks h3');

const sectionsNoEmergency = (selector1, selector2) => {
  document.querySelector(selector1).style.backgroundColor = '#e6db74';
  const secondColor = document.querySelectorAll(selector2);
  for(let index = 0; index < secondColor.length; index += 1) {
    secondColor[index].style.backgroundColor = 'black';
  }
};

sectionsNoEmergency('.no-emergency-tasks', '.no-emergency-tasks h3');

const footer = () => {
  let footer1 = document.querySelectorAll('footer')[0].style.backgroundColor = '#034422';
}
footer();