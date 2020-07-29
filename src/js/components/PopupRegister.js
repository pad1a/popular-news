import { Popup }  from "./Popup";

class PopupRegister extends Popup {
  constructor (containerPopup, mainApi) {
    super(containerPopup)
    this.mainApi = mainApi;
  }


  register = (event) => {
    event.preventDefault();
    const form = this.containerPopup.querySelector('#signIn');
    const email = this.containerPopup.querySelector('#emailLogin');
    const password = this.containerPopup.querySelector('#passwordLogin');
    form.reset();
    this.removePopup();
  }




}
export { PopupRegister };
