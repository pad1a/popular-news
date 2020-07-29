
 class Popup {
  constructor (containerPopup) {
    this.containerPopup = containerPopup;
  }
  open = () => {
    this.containerPopup.classList.add('popup_is_opened');
    this._addListenerClose(this.containerPopup);
  }

  close = (event) => {
    if (event.target.classList.contains('popup__close')) {
      const popup1 = event.target.closest('.popup');
      this._removeListenerClose(popup1);
      popup1.classList.remove('popup_is_opened');
    }
     if (event.target.classList.contains('popup')) {
      const popup1 = event.target.closest('.popup');
      this._removeListenerClose(popup1);
      popup1.classList.remove('popup_is_opened');
    }

  }
  _addListenerClose = (popup) => {
      popup.addEventListener('click', this.close);
  }
  _removeListenerClose = (popup) => {
      popup.removeEventListener('click', this.close);
  }
  removePopup = () => {
    this._removeListenerClose(this.containerPopup);
    this.containerPopup.classList.remove('popup_is_opened');
  }

}
export { Popup };
