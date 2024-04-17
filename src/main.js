import axios from 'axios';
import { url } from './js/pixabay-api';

const query = 'cat';
const searchParams = url(query);

axios
  .get(`https://pixabay.com/api/?${searchParams}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
