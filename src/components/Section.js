class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._items = items;
    this._container = document.querySelector(containerSelector);
  }

  renderer() {
    this._items.forEach((items) => {
      this._renderer(items);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}

export default Section;
