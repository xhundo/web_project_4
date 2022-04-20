const modalProfile = document.querySelector("#modal-profile");
const modalProfileButtonClose = modalProfile.querySelector(
  ".modal-button__close"
);
const modalOpen = document.querySelector("#modal-open");
const modalForm = document.forms["profile-form"];
const nameInput = modalForm.name;
const jobInput = modalForm.description;
const profileName = document.querySelector("#profile-name");
const profileAbout = document.querySelector("#profile-about");

modalProfileButtonClose.addEventListener("click", () => {
  modalProfile.classList.remove("modal_open");
});

modalOpen.addEventListener("click", () => {
  modalProfile.classList.add("modal_open");
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
});

modalProfile.addEventListener("click", (e) => {
  if (e.target === modalForm) {
    modalProfile.classList.remove("modal_open");
  }
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  modalProfile.classList.remove("modal_open");
});
