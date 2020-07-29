import { Popup }  from "./Popup";

 class PopupAuth extends Popup {
  constructor (containerPopup, myApi, header) {
    super(containerPopup)
    this.myApy = myApi;
    this.header = header;
  }

  login = (event) => {
    event.preventDefault();
    const button = event.currentTarget;
    button.setAttribute('disabled',true);

    const form = this.containerPopup.querySelector('#signIn');
    const email = this.containerPopup.querySelector('#emailLogin');
    const password = this.containerPopup.querySelector('#passwordLogin');
    this.myApy.signIn(email.value, password.value).then((data) => {
      button.removeAttribute('disabled');
      if (data === undefined) {
        return;
      }
      this.header.render();
    }).catch((e) => {
      console.log(e)
    })
    form.reset();
    this.removePopup();
  }



}
export { PopupAuth };
