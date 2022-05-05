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
const modalPlaceSubmit = document.querySelector(".modal-place__submit");
const imageModal = document.querySelector("#image-modal");
const imageElement = document.querySelector(".modal-image__place");
const imageCaption = document.querySelector(".modal-caption");
const imageModalClose = document.querySelector(".modal-image__button");
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

function openModal() {
  modalProfile.classList.add("modal_open");
}

function closeModal() {
  modalProfile.classList.toggle("modal_open");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

function fillProfileModal() {
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

openProfileModalButton.addEventListener("click", () => {
  openModal();
  fillProfileForm();
});

modalProfileButtonClose.addEventListener("click", () => {
  closeModal();
});

profileModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fillProfileModal();
  closeModal();
});

modalPlaceCloseButton.addEventListener("click", () => {
  modalPlace.classList.toggle("modal_open");
});

modalPlaceOpenButton.addEventListener("click", () => {
  modalPlace.classList.add("modal_open");
});

imageModalClose.addEventListener("click", () => {
  imageModal.classList.remove("modal_open");
});

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  renderCard(
    {
      name: titleInputValue.value,
      link: linkInputValue.value,
    },
    elementsWrap
  );
  modalPlaceForm.reset();
  modalPlace.classList.toggle("modal_open");
}

modalPlaceForm.addEventListener("submit", handlePlaceFormSubmit);

const getCardElement = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  const deleteButton = cardElement.querySelector(".elements__button-trash");
  cardElement.querySelector(".elements__image").src = data.link;
  cardElement.querySelector(".elements__image").alt = data.alt;
  cardElement.querySelector(".elements__title").textContent = data.name;

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardElement
    .querySelector(".elements__image")
    .addEventListener("click", () => {
      imageElement.src = data.link;
      imageCaption.textContent = data.name;
      imageElement.alt = data.name;
      imageModal.alt = data.name;
      imageModal.classList.add("modal_open");
    });
  cardElement
    .querySelector(".elements__button")
    .addEventListener("click", (evt) => {
      if (evt.target.classList.contains("elements__button_active")) {
        evt.target.classList.remove("elements__button_active");
      } else {
        evt.target.classList.add("elements__button_active");
      }
    });

  return cardElement;
};

const renderCard = (data, wrapper) => {
  const newCard = getCardElement(data);
  wrapper.append(newCard);
};

initialCards.forEach((data) => {
  renderCard(data, elementsWrap);
});
