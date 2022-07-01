import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  open({ name, link }) {
    this._popupElement.querySelector(".modal-caption").textContent = name;
    const image = this._popupElement.querySelector(".modal-image__place");
    image.alt = name;
    image.src = link;
    super.open();
  }
}

export default PopupWithImage;
