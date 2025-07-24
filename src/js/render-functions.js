import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let lightbox = new SimpleLightbox('.gallery a');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {


    const markup = images.map(image => `
        <li class="gallery-item">
        <a href="${image.largeImageURL}">
           <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="info">
           <p><b>Likes:</b> ${image.likes}</p>
           <p><b>Views:</b> ${image.views}</p>
           <p><b>Comments:</b> ${image.comments}</p>
           <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
        </li>
        `).join('');
    

    gallery.innerHTML += markup;
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
 
    console.log('SHOW:', loader);
    loader.classList.remove('is-hidden');
}

export function hideLoader() {
    
    console.log('HIDE:', loader);
    loader.classList.add('is-hidden');
}


