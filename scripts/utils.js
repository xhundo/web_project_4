import Script from "./script.js";

const modalProfile = document.querySelector("#modal-profile");
const modalProfileButtonClose = modalProfile.querySelector(
  ".modal__button-close"
);
const openProfileModalButton = document.querySelector("#modal-open");
const profileModalForm = document.forms["profile-form"];
const nameInput = document.querySelector("#modal-name");
const jobInput = document.querySelector("#modal-description");
const profileName = document.querySelector("#profile-name");
const profileAbout = document.querySelector("#profile-about");
const modalPlaceForm = document.querySelector("#modal_place-form");
const modalPlaceCloseButton = document.querySelector(".modal-place__close");
const modalPlaceOpenButton = document.querySelector("#modal_place-open");
const modalPlace = document.querySelector("#modal-place");
const modalPlaceSubmit = document.querySelector(".modal__submit");
const imageModal = document.querySelector("#image-modal");
const imageElement = document.querySelector(".modal-image__place");
const imageCaption = document.querySelector(".modal-caption");
const imageModalClose = document.querySelector(".modal-image__button");
const cardSelector = "#card-template";

function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_open");
    closeModal(openedModal);
  }
}

function closeModalOnRemoteClick(event) {
  if (event.target === event.currentTarget) {
    closeModal(event.target);
  }
}

function openModal(modal) {
  modal.classList.add("modal_open");
  document.addEventListener("keydown", closeModalByEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

function toggleModal(modal) {
  modal.classList.toggle("modal_open");
  document.addEventListener("keydown", closeModalByEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

function closeModal(modal) {
  modal.classList.remove("modal_open");
  document.removeEventListener("keydown", closeModalByEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

function fillProfileInfo() {
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

openProfileModalButton.addEventListener("click", () => {
  fillProfileForm();
  openModal(modalProfile);
});

modalProfileButtonClose.addEventListener("click", () => {
  closeModal(modalProfile);
});

profileModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fillProfileInfo();
  closeModal(modalProfile);
});

modalPlaceCloseButton.addEventListener("click", () => {
  closeModal(modalPlace);
});

modalPlaceOpenButton.addEventListener("click", () => {
  openModal(modalPlace);
});

imageModalClose.addEventListener("click", () => {
  closeModal(imageModal);
});

export default Utils;
