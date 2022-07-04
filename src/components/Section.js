class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._renderItems = items;
    this._container = document.querySelector(containerSelector);
  }

  renderer() {
    this._renderItems.forEach((items) => {
      this._renderer(items);
    });
  }

  addItem(items) {
    const card = this._renderer(items);
    this._container.prepend(card);
  }
}

export default Section;
