import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import refs from "./js/refs";
const { form, gallery, loader } = refs;

import { createMarkup } from "./js/render-functions";
import { getSearch } from "./js/pixabay-api";

loader.style.display = 'none';

form.addEventListener('submit', onSearch);

function onSearch(evt) {
    evt.preventDefault()
    gallery.innerHTML = '';
    loader.style.display = 'block';

    const { query } = evt.currentTarget.elements;

    getSearch(query.value.split(' ').join('+'))
        .then(data => {
            gallery.innerHTML = createMarkup(data.hits);
            const refreshPage = new SimpleLightbox('.gallery a', {
                captions: true,
                captionsData: 'alt',
                captionDelay: 250,
            });
            refreshPage.refresh();
        })
        .catch(err => {
            loader.style.display = 'none';
            console.log(`${err}`)
        });

    form.reset();

}