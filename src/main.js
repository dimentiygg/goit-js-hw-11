import { getDataApi } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();

  document.querySelector('.gallery').innerHTML = '';
  if (form.inputForm.value !== '') {
    loader.style.display = 'block';
    getDataApi().then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      createMarkup(hits);
    });
  } else {
    iziToast.error({
      title: 'Error',
      message: 'field cannot be empty',
    });
  }
}
