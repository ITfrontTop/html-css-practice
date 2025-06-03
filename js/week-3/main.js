// Практика:
// 1. Створи кнопку, яка при натисканні змінює текст на сторінці

// 2. Створи форму, яка при відправці виводить введені дані

// 1
const mainPage = document.querySelector('#main');
const oldText = document.querySelector('.text');
const button = document.querySelector('button');

const newText = document.createElement('p');
newText.textContent =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur recusandae autem iure dolores eos quam nobis odio minus. Natus qui amet praesentium tenetur in reprehenderit molestias dolorem. Nemo, placeat corrupti.';

button.addEventListener('click', (e) => {
  oldText.replaceWith(newText);
});

// 2
const firstInput = document.querySelector('.firstInput');
const lastInput = document.querySelector('.lastInput');

const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const change = document.querySelector('.change');

change.addEventListener('click', (e) => {
  e.preventDefault;
  firstName.textContent = firstInput.value;
  firstInput.value = '';
  lastName.textContent = lastInput.value;
  lastInput.value = '';
});
