export default class Section { // Section - отвечает за отрисовку элементов на странице.
  // data —  массив данных, которые нужно добавить на страницу при инициализации класса
  // renderer —  функция, которая отвечает за создание и отрисовку каждого отдельного элемента.
  // containerSelector - селектор контейнера в который нужно добавлять созданные элементы.
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  addItem(element) { //принимает DOM-элемент и добавляет его в контейнер.
    this._container.prepend(element);
  }
  renderItems() {//отвечает за отрисовку всех элементов
    this._renderedItems.forEach(item => this._renderer(item));
  }
}

