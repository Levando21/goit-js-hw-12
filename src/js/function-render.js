import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderMarkup(data) {
  return data.hits
    .map(
      el =>
        `<div class="custom-gallery-item">
            <a class="custom-gallery-link" href="${el.largeImageURL}">
                <img class="custom-gallery-image" src="${el.webformatURL}" alt="${el.tags}" />
            </a>
            <div class="custom-gallery-item-info">
                <p class="custom-gallery-item-info-par">
                    <span class="custom-gallery-item-info-span">Likes: <span>${el.likes}</span>
                    </span>
                </p>
                <p class="custom-gallery-item-info-par">
                    <span class="custom-gallery-item-info-span">Views: <span>${el.views}</span>
                    </span>
                </p>
                <p class="custom-gallery-item-info-par">
                    <span class="custom-gallery-item-info-span">Comments: <span>${el.comments}</span>
                    </span>
                </p>
                <p class="custom-gallery-item-info-par">
                    <span class="custom-gallery-item-info-span">Downloads: <span>${el.downloads}</span>
                    </span>
                </p>
            </div>
        </div>`
    )
    .join('');
}

export function showEndOfListMessage() {
  iziToast.info({
    timeout: 3000,
    position: 'topRight',
    message: "We're sorry, but you've reached the end of search results.",
  });
}

export function showEmptyInputMessage() {
  iziToast.info({
    timeout: 3000,
    position: 'topRight',
    message: 'The search query can not be empty!',
  });
}

export function showNoImagesMessage() {
  iziToast.error({
    timeout: 3000,
    position: 'topRight',
    message:
      'There are no images matching your search query. Please, enter something else!',
  });
}
