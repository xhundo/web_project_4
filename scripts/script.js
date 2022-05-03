const modalProfile = document.querySelector("#modal-profile");
const modalProfileButtonClose = modalProfile.querySelector(
  ".modal-button__close"
);
const modalOpen = document.querySelector("#modal-open");
const modalForm = document.forms["profile-form"];
const nameInput = document.querySelector("#modal-name");
const jobInput = document.querySelector("#modal-description");
const profileName = document.querySelector("#profile-name");
const profileAbout = document.querySelector("#profile-about");
const modalPlaceForm = document.querySelector("#modal_place-form");
const modalPlaceCloseButton = document.querySelector(".modal__place-close");
const modalPlaceOpenButton = document.querySelector("#modal_place-open");
const modalPlace = document.querySelector("#modal-place");
const modalPlaceSubmit = document.querySelector(".modal__place-submit");
const imageModal = document.querySelector("#image-modal");
const imageElement = document.querySelector(".modal__place-image");
const imageCaption = document.querySelector(".modal__caption");
const imageModalClose = document.querySelector(".modal__image-button");
const initialCards = [
  {
    name: "Venice Beach, CA",
    link: "https://images.unsplash.com/photo-1648604811521-56f6b8084325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Miami, FL",
    link: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    name: "New York, NY",
    link: "https://images.unsplash.com/photo-1582140388172-5651e808ab45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80",
  },
  {
    name: "Orlando, FL",
    link: "https://images.unsplash.com/photo-1601051297657-39a9b2ce2cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  },
  {
    name: "Chicago, IL",
    link: "https://images.unsplash.com/photo-1477414956199-7dafc86a4f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    name: "Brooklyn, NY",
    link: "https://images.unsplash.com/photo-1580614875936-4888ac34052e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".elements__card");

const elementsWrap = document.querySelector(".elements");
const titleInputValue = modalPlaceForm.querySelector("#modal-title");
const linkInputValue = modalPlaceForm.querySelector("#modal-link");

modalProfileButtonClose.addEventListener("click", () => {
  modalProfile.classList.remove("modal_open");
});

modalOpen.addEventListener("click", () => {
  modalProfile.classList.add("modal_open");
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  modalProfile.classList.remove("modal_open");
});

modalPlaceCloseButton.addEventListener("click", () => {
  modalPlace.classList.remove("modal_place-open");
});

modalPlaceOpenButton.addEventListener("click", () => {
  modalPlace.classList.add("modal_place-open");
});

function modalPlaceFormSubmitHandler(evt) {
  evt.preventDefault();
  renderCard(
    {
      name: titleInputValue.value,
      link: linkInputValue.value,
    },
    elementsWrap
  );
}

modalPlaceForm.addEventListener("submit", modalPlaceFormSubmitHandler);
modalPlaceSubmit.addEventListener("click", () => {
  modalPlace.classList.remove("modal_place-open");
});

const getCardElement = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  const deleteButton = cardElement.querySelector(".elements__button-trash");
  cardElement.querySelector(".elements__image").src = data.link;
  cardElement.querySelector(".elements__title").textContent = data.name;

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardElement
    .querySelector(".elements__image")
    .addEventListener("click", () => {
      imageElement.src = data.link;
      imageCaption.textContent = data.name;
      imageModal.classList.add("modal_image-open");
    });
  imageModalClose.addEventListener("click", () => {
    imageModal.classList.remove("modal_image-open");
  });
  cardElement
    .querySelector(".elements__button")
    .addEventListener("click", () => {});
  return cardElement;
};

const renderCard = (data, wrapper) => {
  const newCard = getCardElement(data);
  wrapper.append(newCard);
};

initialCards.forEach((data) => {
  renderCard(data, elementsWrap);
});
