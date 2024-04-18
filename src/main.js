import axios from 'axios';
import { url } from './js/pixabay-api';
import { createMarkup } from './js/function-render';

const query = 'cat';
const searchParams = url(query);

const selectors = {
  container: document.querySelector('.js-list'),
  loadBtn: document.querySelector('.js-button'),
  loadBtnTwo: document.querySelector('.js-button-load'),
};

axios
  .get(`https://pixabay.com/api/?${searchParams}`)
  .then(response => {
    console.log(response.data);
    selectors.container.insertAdjacentHTML(
      'beforeend',
      createMarkup(response.data.hits)
    );
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
