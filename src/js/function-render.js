export function createMarkup(arr) {
  return arr
    .map(
      ({ id, likes, views, comments, downloads, largeImageUrl }) => `
            <li class = "picture-card" data-id = "${id}">
            <img src = "${largeImageUrl}"/>
            <div class = "picture-info">
            <span>Likes: ${likes}</span>
                                                <span>Views: ${views}</span>
                                                <span>Comments: ${comments}</span>
                                                <span>Downloads: ${downloads}</span>
            </div>
            </li>`
    )
    .join();
}
