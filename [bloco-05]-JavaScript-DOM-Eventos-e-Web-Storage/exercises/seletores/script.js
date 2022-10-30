const header = () => {
  let head1 = document.querySelector('#header-container').style.backgroundColor = 'rgb(76,164,109)';
}
header();

const sectionsEmergency = (selector, selector2) => {
  document.querySelector(selector).style.backgroundColor = '#ed8484';
  document.querySelectorAll(selector2).style.backgroundColor = '#ae81ff';
};

sectionsEmergency('.emergency-tasks', '.emergency-tasks div');

const sectionsNoEmergency = (selector) => {
  document.querySelector(selector).style.backgroundColor = '#e6db74';

};

sectionsNoEmergency('.no-emergency-tasks');

const footer = () => {
  let footer1 = document.querySelectorAll('footer')[0].style.backgroundColor = '#034422';
}
footer();