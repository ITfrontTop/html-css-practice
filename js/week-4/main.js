// Практика:
// 1. Створи таймер, який відлічує час до певної події
// 2. Зроби запит до публічного API та виведи отримані дані на сторінку

// 1
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// calculate date
const currentYear = new Date().getFullYear(); // 2026
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// calc year
year.innerText = `${currentYear + 1}`;

function updateCounter() {
  const currentTime = new Date();
  const diff = nextYear - currentTime;

  // time in seconds / minutes / hours / days
  // days
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  // hours
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  // minutes
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  // second
  const secondsLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft;
  hours.innerText = /*hoursLeft < 10 ? '0' + hoursLeft : */ hoursLeft;
  minutes.innerText = /*minutesLeft < 10 ? '0' + minutesLeft : */ minutesLeft;
  seconds.innerText = /*secondsLeft < 10 ? '0' + secondsLeft : */ secondsLeft;
  if (
    daysLeft === 0 &&
    hoursLeft === 0 &&
    minutesLeft === 0 &&
    secondsLeft === 0
  )
    clearInterval(interval);
}

updateCounter();

const interval = setInterval(updateCounter, 1000);

// 2
const id = document.querySelector('.id');
const title = document.querySelector('.title');
const completed = document.querySelector('.completed');

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    id.textContent = data.id;
    title.textContent = data.title;
    completed.textContent = data.completed;
  });
