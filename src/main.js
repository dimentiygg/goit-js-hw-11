import { getDataApi } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  document.querySelector('.gallery').innerHTML = '';
  if (form.inputForm.value !== '') {
    loader.style.display = 'block';
  }
  createMarkup(getDataApi());
}
