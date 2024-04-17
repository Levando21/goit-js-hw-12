export const url = query => {
  const API_KEY = '33885109-a6cb8296a367a3cf09d2759c8';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return searchParams;
};
