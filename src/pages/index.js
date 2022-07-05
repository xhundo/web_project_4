import "../pages/index.css";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
  initialCards,
  nameInput,
  jobInput,
  cardSelector,
  placeModal,
  profileModal,
  image,
  validationSettings,
  editFormElement,
  addFormElement,
  openProfileModalButton,
  modalPlaceOpenButton,
  elementsWrap,
} from "../utils/constants.js";

const section = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const card = new Card(data, cardSelector, () => handleCardClick(data));
      section.addItem(card.getView());
    },
  },
  elementsWrap
);
export const imagePopup = new PopupWithImage(image);
const userInfo = new UserInfo();
export const modalPlace = new PopupWithForm(placeModal, handleFormSubmit);
export const modalProfile = new PopupWithForm(
  profileModal,
  handleProfileSubmit
);

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

modalPlaceOpenButton.addEventListener("click", () => {
  modalPlace.open();
  addFormValidator.toggleSubmitButton();
});

const editFormValidator = new FormValidator(
  validationSettings,
  editFormElement
);
const addFormValidator = new FormValidator(validationSettings, addFormElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

function handleFormSubmit({ items, link }) {
  const card = new Card({ items, link }, cardSelector, () =>
    handleCardClick({ items, link })
  );
  section.addItem(card.getView());
  modalPlace.close();
}

function handleProfileSubmit({ name, description }) {
  userInfo.setUserInfo({ userName: name, userJob: description });
  modalProfile.close();
}

function handleCardClick(data) {
  imagePopup.open(data);
}

section.renderer(initialCards);
