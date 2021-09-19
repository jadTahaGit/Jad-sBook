const registerBtn = document.querySelector('.register-btn');

const popForm = document.querySelector('.pop-form');

const popTheForm = () => {
  document.querySelector('.main').classList.add('blur-filter');
  popForm.style.display = 'flex';
};

registerBtn.addEventListener('click', popTheForm);
