import refs from './refs.js';

export default {
  keyApi: '19150007-3fc3a7c6f5c788841ebed8fee',
  page: 1,
  searchRequest: '',

  getImage(request) {
    const baseURL = 'https://pixabay.com/api/';
    const params = `?image_type=photo&orientation=horizontal&q=${request}&page=${this.page}&per_page=12&key=${this.keyApi}`;
    return fetch(baseURL + params)
      .then(resp => resp.json())
      .then(images => images.hits)
      .catch(err => err);
  },

  pageUpdate() {
    return (this.page += 1);
  },

  clearPage() {
    return (refs.galleryRef.innerHTML = '');
  },

  get request() {
    return this.searchRequest;
  },

  set request(value) {
    return (this.searchRequest = value);
  },
};
