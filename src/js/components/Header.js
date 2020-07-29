
 class Header {
  constructor (arrayNavigationsHeaderHide, navigationHeaderAuth, mainApi) {
    this.arrayNavigationsHeaderHide = arrayNavigationsHeaderHide;
    this.navigationHeaderAuth = navigationHeaderAuth;
    this.mainApi = mainApi;
  }

  render = () => {
    this.mainApi.getUserData().then((data) => {
      if (data === undefined){
        return;
      }
      const userName = data.name;
      this.navigationHeaderAuth.classList.add('navigation__li_status_unlogin');
      const naviButtonLength = this.arrayNavigationsHeaderHide.length - 1;
      this.arrayNavigationsHeaderHide.forEach((element, index) => {
       element.classList.remove('navigation__li_status_unlogin');
        if (index === naviButtonLength) {
         element.querySelector('.navigation__button').textContent = userName;
         this.addListenerLogout(element);
        }
      })
    })
      .catch((e)=> {
        console.log(e);
      })
  }
  renderSecondPage = () => {
    this.mainApi.getUserData().then((data) => {
      if (data === undefined){
        return location = './';
      }
      this.addListenerLogout(this.navigationHeaderAuth);
      this.navigationHeaderAuth.textContent = data.name;
    })
      .catch((e)=> {
        console.log(e);
      })
  }

  addListenerLogout = (element) => {
  element.addEventListener('click', this.removeListenerLogout)
  }
  removeListenerLogout = (event) => {
    if (event.target.classList.contains('navigation__button')) {
      event.preventDefault();
     const liButton = event.currentTarget;
     this.mainApi.logout().then(() => {
        liButton.removeEventListener('click', this.addListenerLogout);
        location.reload();
      })
        .catch((e) => {
          console.log(e);
        })


    }
  }

}
export { Header }
