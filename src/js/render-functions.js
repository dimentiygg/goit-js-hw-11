// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
const loader = document.querySelector('.loader');

export function createMarkup(promise) {
  const gallery = document.querySelector('.gallery');
  promise.then(images => {
    loader.style.display = 'none';
    const markup = images
      .map(
        img => `<li class="gallery-item">
    	<a class="gallery-link" href="${img.largeImageURL}">
    		<img
    			class="gallery-image"
    			src="${img.webformatURL}"
    			alt="${img.tags}"
    			/>
    	</a>
        <div class="stats-box">
      <ul class="img-stats">
         <li>
            <p>Likes</p>
            <p>${img.likes}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${img.views}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${img.comments}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${img.downloads}</p>
          </li>
      </ul>
    </div>
    </li>
    `
      )
      .join('');
    gallery.innerHTML = markup;
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
    });
    lightbox.refresh();
  });
}
