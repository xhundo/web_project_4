class Section {
  constructor({ items, renderer }, container) {
    this._renderer = renderer;
    this._items = items;
    this._container = container;
  }

  renderer() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}

export default Section;
