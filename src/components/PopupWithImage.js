import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  open({ name, link }) {
    this._popupElement.querySelector(".modal-caption").textContent = name;
    this._cardImage = this._popupElement.querySelector(".modal-image__place");
    this._cardImage.alt = name;
    this._cardImage.src = link;
    super.open();
  }
}

export default PopupWithImage;
