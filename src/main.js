import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const query = e.target.elements['search-text'].value.trim();

    if (!query) {
        iziToast.error({ title: 'Error', message: 'Please enter a search term!' });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const { hits } = await getImagesByQuery(query);
        
        if (hits.length === 0) {
            iziToast.warning({ title: 'No Results', message: 'Sorry, there are no images matching your search query. Please try again!' });
        } else {
            createGallery(hits);
        }
    } catch (err) {
        iziToast.error({ title: 'Fetch Error', message: 'Failed to load images. Please try again later.' });
    } finally {
        hideLoader();
    }
});
