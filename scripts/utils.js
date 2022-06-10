export const nameInput = document.querySelector("#modal-name");
export const jobInput = document.querySelector("#modal-description");
export const profileName = document.querySelector("#profile-name");
export const profileAbout = document.querySelector("#profile-about");

export function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_open");
    closeModal(openedModal);
  }
}

export function closeModalOnRemoteClick(event) {
  if (event.target === event.currentTarget) {
    closeModal(event.target);
  }
}

export function openModal(modal) {
  modal.classList.add("modal_open");
  document.addEventListener("keydown", closeModalByEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

export function toggleModal(modal) {
  modal.classList.toggle("modal_open");
  document.addEventListener("keydown", closeModalByEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

export function closeModal(modal) {
  modal.classList.remove("modal_open");
  document.removeEventListener("keydown", closeModalByEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}
