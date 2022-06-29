import "../pages/index.css";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";

import FormValidator from "../components/FormValidator";
import Card from "../components/Card.js";
import { closeModalByEscape } from "../utils/utils.js";
import { closeModalOnRemoteClick } from "../utils/utils.js";
import { openModal } from "../utils/utils.js";
import { toggleModal } from "../utils/utils.js";
import { closeModal } from "../utils/utils.js";

const placeModal = {
  popupSelector: "#modal-place",
};

const profileModal = {
  popupSelector: "#modal-profile",
};
const modalPlace = new PopupWithForm(placeModal, handleFormSubmit);
modalPlace.setEventListeners();

const modalProfile = new PopupWithForm(profileModal);

const modalProfileButtonClose = document.querySelector(".modal__button-close");

const openProfileModalButton = document.querySelector("#modal-open");
const profileModalForm = document.forms["profile-form"];
const nameInput = document.querySelector("#modal-name");
const jobInput = document.querySelector("#modal-description");
const profileName = document.querySelector("#profile-name");
const profileAbout = document.querySelector("#profile-about");
const modalPlaceForm = document.querySelector("#modal_place-form");
const modalPlaceCloseButton = document.querySelector(".modal-place__close");
const modalPlaceOpenButton = document.querySelector("#modal_place-open");

const modalPlaceSubmit = document.querySelector(".modal__submit");
const imageModal = document.querySelector("#image-modal");
const imageElement = document.querySelector(".modal-image__place");
const imageCaption = document.querySelector(".modal-caption");
const imageModalClose = document.querySelector(".modal-image__button");
const cardSelector = "#card-template";
const initialCards = [
  {
    name: "Brooklyn, NY",
    link: "https://images.unsplash.com/photo-1580614875936-4888ac34052e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Chicago, IL",
    link: "https://images.unsplash.com/photo-1477414956199-7dafc86a4f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    name: "Orlando, FL",
    link: "https://images.unsplash.com/photo-1601051297657-39a9b2ce2cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  },
  {
    name: "New York, NY",
    link: "https://images.unsplash.com/photo-1582140388172-5651e808ab45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80",
  },
  {
    name: "Miami, FL",
    link: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    name: "Venice Beach, CA",
    link: "https://images.unsplash.com/photo-1648604811521-56f6b8084325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".elements__card");

const elementsWrap = document.querySelector(".elements");
const titleInputValue = modalPlaceForm.querySelector("#modal-title");
const linkInputValue = modalPlaceForm.querySelector("#modal-link");

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

function fillProfileInfo() {
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

openProfileModalButton.addEventListener("click", () => {
  modalProfile.open();
  fillProfileForm();
});

modalProfileButtonClose.addEventListener("click", () => {
  modalProfile.close();
});

profileModalForm.addEventListener("submit", (e) => {
  fillProfileInfo();
  modalProfile.close();
});

modalPlaceCloseButton.addEventListener("click", () => {
  modalPlace.close();
});

modalPlaceOpenButton.addEventListener("click", () => {
  modalPlace.open();
});

imageModalClose.addEventListener("click", () => {
  closeModal(imageModal);
});

const validationSettings = {
  inputSelector: ".modal__input, .modal-place__input",
  submitButtonSelector: ".modal__submit, .modal-place__submit",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_error",
  errorClass: "modal__error-text_visible",
};

const editFormElement = document.querySelector(".modal__form");
const addFormElement = document.querySelector(".modal-place__form");

const editFormValidator = new FormValidator(
  validationSettings,
  editFormElement
);
const addFormValidator = new FormValidator(validationSettings, addFormElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

function handleFormSubmit({ name, link }) {
  renderCard(
    {
      name,
      link,
    },
    elementsWrap
  );
  modalPlaceForm.reset();
  modalPlace.close();

  addFormValidator.toggleSubmitButton();
}

export const renderCard = (data, wrapper) => {
  const card = new Card(data, cardSelector);
  wrapper.prepend(card.getView());
};

initialCards.forEach((data) => {
  renderCard(data, elementsWrap);
});
