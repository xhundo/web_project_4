class Section {
  constructor({ items, renderer }) {
    this._renderer = renderer;
    this._items = items;
    this._container = document.querySelector(".elements");
  }

  renderer() {
    this._initialArray.forEach((item) => {
      this._renderer(item);
    });

    additems(element);
  }

  addItem() {
    this._container.append(element);
  }
}

export default Section;
