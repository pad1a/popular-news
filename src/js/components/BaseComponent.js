class BaseComponent {
  constructor() {
    this._listeners = [];
  }
  _addListener(element, event, callback) {
    element.addEventListener(event, callback);
    this._listeners.push({ element, event, callback });
  }
  _removeListener({ element, event, callback }) {
    element.removeEventListener(event, callback);
  }
  removeHandlers() {
    this._listeners.forEach(handler => this._removeListener(handler));
  }

}
