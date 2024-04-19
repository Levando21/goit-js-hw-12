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

let hasMoreResults = true;
let searchTerm = '';
let currentPage;
loadMoreBtn.style.display = 'none';

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(event) {
  currentPage = 1;
  event.preventDefault();
  container.innerHTML = '';
  searchTerm = form.elements.customSearchWord.value.trim();
  loadMoreBtn.style.display = 'none';

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
        loader.style.display = 'none';
        return;
      }
      container.insertAdjacentHTML('beforeend', markup);
      loader.style.display = 'none';
      lightbox.refresh();
      if (data.hits.length <= 14) {
        hasMoreResults = false;
      } else {
        hasMoreResults = true;
        loadMoreBtn.style.display = 'block';
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
  form.reset();
}

async function onLoadMore() {
  currentPage += 1;
  try {
    loadMoreBtn.style.display = 'none';
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
        showEndOfListMessage();
        hasMoreResults = false;
      } else {
        hasMoreResults = true;
        loadMoreBtn.style.display = 'block';
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}
