class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(`${popupSelector}`);
  }

  open() {
    document.addEventListener("keydown", this._handleEscClose.bind(this));
    this._popupElement.classList.add("modal_open");
  }

  close() {
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
    this._popupElement.classList.remove("modal_open");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__button-close") ||
        evt.target.classList.contains("modal-place") ||
        evt.target.classList.contains("modal-place__close")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
