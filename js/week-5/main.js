// Створи додаток "Список справ" з можливістю додавання, видалення та відмітки виконаних завдань
// Оптимізуй код та оформи його згідно з найкращими практиками

const input = document.querySelector('input');
const button = document.querySelector('button');

const addItem = () => {
  const list = document.querySelector('.list');
  list;
  const li = document.createElement('li');
  li.className = 'item';
  const deleteItemButton = document.createElement('div');
  deleteItemButton.textContent = 'delete';
  deleteItemButton.className = 'deleteItemButton';

  console.log(input.value);
  li.textContent = input.value;
  list.appendChild(li);
  list.appendChild(deleteItemButton);
  input.value = '';

  // кнопка удаления
  const deleteElement = () => {
    li.remove();
    deleteItemButton.remove();
  };

  deleteItemButton.addEventListener('click', deleteElement);
};

button.addEventListener('click', addItem);
