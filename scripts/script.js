const modalProfile = document.querySelector("#modal-profile");
const modalProfileButtonClose = modalProfile.querySelector(
  ".modal-button__close"
);
const modalOpen = document.querySelector("#modal-open");
const modalForm = document.forms["profile-form"];
const modalSubmitButton = modalForm.querySelector("button[type=submit]");

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
  modalProfile.classList.remove("modal__open");
});
