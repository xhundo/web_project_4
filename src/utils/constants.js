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

const modalProfileButtonClose = document.querySelector(".modal__button-close");
const openProfileModalButton = document.querySelector("#modal-open");
const nameInput = document.querySelector("#modal-name");
const jobInput = document.querySelector("#modal-description");
const profileName = document.querySelector("#profile-name");
const profileAbout = document.querySelector("#profile-about");
const modalPlaceForm = document.querySelector("#modal_place-form");
const modalPlaceCloseButton = document.querySelector(".modal__button-close");
const modalPlaceOpenButton = document.querySelector("#modal_place-open");
const imageModal = document.querySelector("#image-modal");
const imageModalClose = document.querySelector(".modal__button-close");
const cardSelector = "#card-template";
const elementsWrap = document.querySelector(".elements");
const avatarModal = document.querySelector("#avatar-modal");
const deleteCardModal = document.querySelector("delete-card");
const avatarModalButton = document.querySelector(".profile__icon");
const deleteSubmitButton = document.querySelector(".modal__submit-delete");

const placeModal = {
  popupSelector: "#modal-place",
};
const profileModal = {
  popupSelector: "#modal-profile",
};

const changeAvatarModal = {
  popupSelector: "#avatar-modal",
};

const deleteCard = {
  popupSelector: "#delete-card",
};

const image = {
  popupSelector: "#image-modal",
};

const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit, .modal-place__submit",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_error",
  errorClass: "modal__error-text_visible",
};

const editFormElement = document.querySelector(".modal__form");
const addFormElement = document.querySelector("#modal_place-form");

export {
  initialCards,
  modalPlaceCloseButton,
  nameInput,
  jobInput,
  modalPlaceForm,
  modalPlaceOpenButton,
  imageModal,
  imageModalClose,
  cardSelector,
  placeModal,
  profileModal,
  image,
  validationSettings,
  editFormElement,
  addFormElement,
  modalProfileButtonClose,
  openProfileModalButton,
  elementsWrap,
  profileName,
  profileAbout,
  avatarModal,
  deleteCardModal,
  avatarModalButton,
  changeAvatarModal,
  deleteCard,
  deleteSubmitButton,
};
