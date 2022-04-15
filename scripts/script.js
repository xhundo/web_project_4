const modalProfile = document.querySelector("#modal-profile");
const modalProfileButtonClose = modalProfile.querySelector(
  ".modal-button__close"
);
const modalOpen = document.querySelector("#modal-open");
const modalForm = document.forms["profile-form"];
const nameInput = modalForm.name;
const descriptionInput = modalForm.description;
const modalSubmitButton = modalForm.querySelector("button[type=submit]");
const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");

modalProfileButtonClose.addEventListener("click", () => {
  modalProfile.classList.remove("modal__open");
});

modalOpen.addEventListener("click", () => {
  modalProfile.classList.add("modal__open");
});

modalProfile.addEventListener("click", (e) => {
  if (e.target === modalProfile) {
    modalProfile.classList.remove("modal__open");
  }
});

modalForm.addEventListener("Submit", (e) => {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  modalProfile.classList.remove("modal__open");
});
