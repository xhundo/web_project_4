import {
  modalPlaceCloseButton,
  imageModalClose,
  modalProfileButtonClose,
} from "../utils/constants.js";

import { imagePopup, modalPlace, modalProfile } from "../pages/index.js";

class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(`${popupSelector}`);
  }

  open() {
    document.addEventListener("keydown", this._handleEscClose.bind(this));
    this._popupElement.classList.add("modal_open");
  }

  close() {
    document.addEventListener("keydown", this._handleEscClose.bind(this));
    this._popupElement.classList.remove("modal_open");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__button-close")
      ) {
        this.close();
      }
    });
  }
}

imageModalClose.addEventListener("click", () => {
  imagePopup.close();
});

modalProfileButtonClose.addEventListener("click", () => {
  modalProfile.close();
});

modalPlaceCloseButton.addEventListener("click", () => {
  modalPlace.close();
});

export default Popup;
