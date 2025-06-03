// Практика:
// 1. Створи масив з числами та виведи їхню суму

// 2. Створи об'єкт з інформацією про себе та виведи її на сторінку

// 1
const numbers = [2, 4, 7, 10, 34, 3454, 454];

const sum = numbers.reduce((acc, item) => (acc += item), 0);

console.log(sum);

// 2
const mainBody = document.querySelector('#main');

mainBody.addEventListener('click', (e) => {
  mainBody.innerHTML =
    '<div class="title">Orel</div><div class="subtitle">Hello JS</div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tenetur sed tempora, pariatur culpa similique nisi laborum labore quidem asperiores.</p>';
});
