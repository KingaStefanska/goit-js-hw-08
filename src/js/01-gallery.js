// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('div.gallery');
const pictures = galleryItems
  .map(element => {
    const image = `<a class="gallery__item" href="${element.original}" >
    <img
      class="gallery__image"
      src="${element.preview}"
      alt="${element.description}"
      title="${element.description}"
    />
  </a>`;
    return image;
  })
  .join(' ');

gallery.insertAdjacentHTML('afterbegin', pictures);

new SimpleLightbox('.gallery a', { captionDelay: 250 });

console.log(galleryItems);
