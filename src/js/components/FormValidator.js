class FormValidator {
  constructor(form, button, errorMessage) {
    this.form = form;
    this.button = button;
    this.errorMessage = errorMessage;
  }

  checkInputValidity = (input, error) => {
    for (let key in this.errorMessage) {
      if (input.validity[key]) {
        return (error.textContent = this.errorMessage[key]);
      }

    }
    error.textContent = "";
  };

  setSubmitButtonState = () => {
    if (this.form.checkValidity()) {
      this.buttonEnable();
    } else {
      this.buttonDissable();
    }
  };

  setEventListeners = () => {
    this.form.addEventListener("input", event => {
      this.checkInputValidity(event.target, event.target.nextElementSibling);
      this.setSubmitButtonState();
    });
  };

  buttonEnable = () => {
    this.button.removeAttribute("disabled");
    this.button.classList.remove("popup__button_is_disabled");
    this.button.classList.add("popup__button_is_enabled");
  };

  buttonDissable = () => {
    this.button.setAttribute("disabled", true);
    this.button.classList.add("popup__button_is_disabled");
    this.button.classList.remove("popup__button_is_enabled");
  };
}
export { FormValidator };
