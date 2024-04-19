import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  renderMarkup,
  showEndOfListMessage,
  showEmptyInputMessage,
  showNoImagesMessage,
} from './js/function-render';

import { fetchImages } from './js/pixabay-api.js';

const lightbox = new SimpleLightbox('.custom-gallery a', {
  nav: true,
  captions: true,
  captionsData: 'alt',
  captionDelay: 150,
});

const form = document.querySelector('.custom-search-form');
const container = document.querySelector('.custom-gallery');
const loader = document.querySelector('.custom-loader');
const loadMoreBtn = document.querySelector('.custom-load-btn');
let searchTerm = '';
let currentPage;

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(event) {
  currentPage = 1;
  event.preventDefault();
  container.innerHTML = '';
  searchTerm = form.elements.customSearchWord.value.trim();
  loadMoreBtn.style.display = 'block';

  if (searchTerm === '') {
    showEmptyInputMessage();
    container.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    form.reset();
    return;
  }
  loader.style.display = 'block';

  try {
    const images = await fetchImages(searchTerm, currentPage).then(data => {
      const markup = renderMarkup(data);
      if (data.hits.length === 0) {
        showNoImagesMessage();
        loadMoreBtn.style.display = 'none';
        loader.style.display = 'none';
        return;
      }
      container.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
      loader.style.display = 'none';
    });
  } catch (error) {
    console.error('Error:', error);
  }
  form.reset();
}

async function onLoadMore() {
  currentPage += 1;
  try {
    const images = await fetchImages(searchTerm, currentPage).then(data => {
      const markup = renderMarkup(data);
      container.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();

      const containerHeight = container.getBoundingClientRect().height;
      window.scrollBy({
        top: 2 * containerHeight,
        behavior: 'smooth',
      });

      if (data.hits.length <= 14) {
        loadMoreBtn.style.display = 'none';
        showEndOfListMessage();
        lightbox.refresh();
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}
