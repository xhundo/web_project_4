import "../pages/index.css";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator";
import Card from "../components/Card.js";
import {
  initialCards,
  modalPlaceCloseButton,
  nameInput,
  jobInput,
  modalPlaceForm,
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
  modalPlaceOpenButton,
} from "../utils/constants.js";

const imagePopup = new PopupWithImage(image);
const userInfo = new UserInfo();
const modalPlace = new PopupWithForm(placeModal, handleFormSubmit);
const modalProfile = new PopupWithForm(profileModal, handleProfileSubmit);
const elementsWrap = document.querySelector(".elements");
modalPlace.setEventListeners();
imagePopup.setEventListeners();
modalProfile.setEventListeners();

function fillProfileForm() {
  const { userName, userJob } = userInfo.getUserInfo();
  nameInput.value = userName;
  jobInput.value = userJob;
}

openProfileModalButton.addEventListener("click", () => {
  modalProfile.open();
  fillProfileForm();
});

modalProfileButtonClose.addEventListener("click", () => {
  modalProfile.close();
});

modalPlaceCloseButton.addEventListener("click", () => {
  modalPlace.close();
});

modalPlaceOpenButton.addEventListener("click", () => {
  modalPlace.open();
});

imageModalClose.addEventListener("click", () => {
  imagePopup.close();
});

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

function handleProfileSubmit({ name, description }) {
  userInfo.setUserInfo({ userName: name, userJob: description });
  modalProfile.close();
}

function handleCardClick(data) {
  imagePopup.open(data);
}

export const renderCard = (data, wrapper) => {
  const card = new Card(data, cardSelector, () => handleCardClick(data));
  wrapper.prepend(card.getView());
};

initialCards.forEach((data) => {
  renderCard(data, elementsWrap);
});
