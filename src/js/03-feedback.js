const formEl = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const throttleInput = require('lodash.throttle');

let data = {};

// Зчитування даних з полів та збереження їх у вигляді об'єкту
formEl.addEventListener('input', throttleInput(saveData, 500));
formEl.addEventListener('submit', onFormSubmit);

function saveData({ target: { name, value } }) {
  data[name] = value;
  localStorage.setItem(storageKey, JSON.stringify(data));
}

// Заповнення полів форми, збереженими даними у сховище
function setData() {
  if (localStorage.getItem(storageKey)) {
    data = JSON.parse(localStorage.getItem(storageKey));
    const { email, message }  = data;
    formEl.elements.email.value = email || '';
    formEl.elements.message.value = message || '';
  }
}

// Очищення сховища і полів, та виведення у консоль об'єкта з поточними даними
function onFormSubmit(event) {
  event.preventDefault();
  if (
    formEl.elements.email.value === '' ||
    formEl.elements.message.value === '' 
  ) {
    alert( 'Заповніть всі поля!!!');
    return;
  }
  formEl.reset();
console.log(data);
localStorage.removeItem(storageKey);
}

setData();