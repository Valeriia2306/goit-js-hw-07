import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(createGalleryOfPicturesMarkup(galleryItems));
const picturesContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryOfPicturesMarkup(galleryItems);
picturesContainer.insertAdjacentHTML("beforeend", galleryMarkup);
picturesContainer.addEventListener("click", onPicturesContainerClick);

function createGalleryOfPicturesMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="${original}">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
		})
		.join(``);
}

function onPicturesContainerClick(evt) {
	evt.preventDefault();

	if (evt.target.nodeName !== "IMG") {
		return;
	}
	const urlOriginalImg = evt.target.getAttribute("data-source");
	const instance = basicLightbox.create(`
    <img src="${urlOriginalImg}" width="800" height="600">
`);

	instance.show();
	// console.log(evt.target);
	// window.addEventListener("keydown", closeModal);

	// function closeModal(event) {
	// 	if (!basicLightbox.visible()) {
	// 		return;
	// 	}
	// 	if (event.code === "Escape") {
	// 		instance.close();
	// 		window.removeEventListener("keydown", closeModal);
	// 	}
	// }
}
