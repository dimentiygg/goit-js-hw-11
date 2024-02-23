import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');

export function getDataApi() {
  return new Promise((resolve, reject) => {
    const formValue = form.inputForm.value.trim();
    if (formValue !== '') {
      const searchWord = formValue;
      const ref = `https://pixabay.com/api/?key=42472719-86e9d77d864a652d5db1b513d&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true`;
      fetch(ref)
        .then(response => {
          if (!response.ok) {
            throw new Error(`status of error${response.status}`);
          }
          return response.json();
        })
        .then(({ hits }) => {
          if (hits.length === 0) {
            iziToast.error({
              title: 'Error',
              message:
                'Sorry, there are no images matching your search query. Please try again!',
            });
          }
          resolve(hits);
        })
        .catch(error => {
          reject(error);
        });
      form.reset();
      return;
    }
    iziToast.error({
      title: 'Error',
      message: 'field cannot be empty',
    });
  });
}
