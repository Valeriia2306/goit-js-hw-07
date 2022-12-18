import { galleryItems } from "./gallery-items.js";
// Change code below this line
const picturesContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryOfPicturesMarkup(galleryItems);
picturesContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryOfPicturesMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
		})
		.join(``);
}

new SimpleLightbox(".gallery a", {
	captions: true,
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
});

// console.log(galleryItems);
