// import
import '../../pages/index.css';
import { options } from "../constants/constants";
import {
  rootCard,
  buttonAuth,
  popupAuthUser,
  popupAuthButton,
  popupAuthButtonRegister,
  arrayNavigationsHeaderHide,
  navigationHeaderAuth,
  elHeaderForm,
  elHeaderButton,
  goodFindNews,
  badFindNews,
  buttonShowMore,
  rootResult,
  nav,
  navSection,
  navigation,
  arrayNavigationLi,
  mobileButton,
  overFlow,
  bodyOvHide,
  popupSignUp

} from "../dom/dom";

import { NewsApi } from "../api/NewsApi";
import { MainApi } from "../api/MainApi";
import { PopupAuth } from "../components/PopupAuth";
import { PopupRegister } from "../components/PopupRegister";
import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { NewsCard } from "../components/NewsCard";
import { NewsCardList } from "../components/NewsCardList";
import { MobileMenu } from "../components/MobileMenu";

const newsApi = new NewsApi(options);
const mainApi = new MainApi(options);

const header = new Header(arrayNavigationsHeaderHide, navigationHeaderAuth, mainApi, goodFindNews, badFindNews);

const popupReg = new PopupRegister(popupSignUp, mainApi);
const popupAuth = new PopupAuth(popupAuthUser, mainApi, header, popupAuthButtonRegister, popupSignUp);

const newsCard = new NewsCard(mainApi);
const newsCardList = new NewsCardList(newsCard, rootCard, buttonShowMore, mainApi);

const searchForm = new SearchForm(elHeaderForm, goodFindNews, badFindNews, newsApi, newsCardList, rootResult, buttonShowMore);
const mobileMenu = new MobileMenu(mobileButton, nav, navSection, navigation, arrayNavigationLi, overFlow, bodyOvHide);


buttonAuth.addEventListener('click', popupAuth.open);
popupAuthButton.addEventListener('click', popupAuth.login);
elHeaderButton.addEventListener('click', searchForm.findNews);
buttonShowMore.addEventListener('click', newsCardList.buttonRender);



window.addEventListener('keydown', function closeFormByKeydown(event) {
    if (event.keyCode === 27) {
      popupAuthUser.classList.remove("popup_is_opened");
    }
})
popupAuthButtonRegister.addEventListener('click', () => {
  popupAuth.close();
  popupReg.open();
});

newsCardList.addListeners();
mobileMenu.addListenersMobileMenu();
header.render();
