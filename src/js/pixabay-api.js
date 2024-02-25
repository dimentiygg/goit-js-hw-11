const form = document.querySelector('.search-form');

export function getDataApi() {
  const formValue = form.inputForm.value.trim();
  if (formValue !== '') {
    const searchWord = formValue;
    const ref = `https://pixabay.com/api/?key=42472719-86e9d77d864a652d5db1b513d&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true`;
    return fetch(ref).then(response => {
      if (!response.ok) {
        throw new Error(`status of error${response.status}`);
      }
      form.reset();
      return response.json();
    });
  }
}
