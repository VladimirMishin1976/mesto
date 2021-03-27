export default class Section { // Section - отвечает за отрисовку элементов на странице.
  // data — это массив данных, которые нужно добавить на страницу при инициализации класса
  // renderer — это функция, которая отвечает за создание и отрисовку каждого отдельного элемента.
  // container - контейнер в который нужно добавлять созданные элементы.
  constructor({ data, renderer }, container) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = container;
  }
  addItem(element) { //принимает DOM-элемент и добавляет его в контейнер.
    this._container.prepend(element);
  }
  renderItems() {//отвечает за отрисовку всех элементов
    this._renderedItems.forEach(item => this._renderer(item));
  }
}

