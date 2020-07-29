// import
import '../constants/constants'
import '../../pages/myNews.css'
import {Header} from "../components/Header";
import {
  arrayNavigationsHeaderHide,
  badFindNews,
  buttonShowMore,
  goodFindNews,
  navigationHeaderAuth,
  rootCard,
  articleTitle,
  articleKeyWordsArray
} from "../dom/dom";
import {MainApi} from "../api/MainApi";
import {options} from "../constants/constants";
import {NewsCard} from "../components/NewsCard";
import {NewsCardList} from "../components/NewsCardList";
import {AnalyticsMyNews} from "../components/AnalyticsMyNews";

/*

import { MainApi } from "../api/MainApi";
import { Header } from "../components/Header";
import { NewsCard } from "../components/NewsCard";
import { NewsCardList } from "../components/NewsCardList";
import { MobileMenu } from "../components/MobileMenu";

*/
const mainApi = new MainApi(options);

const header = new Header(arrayNavigationsHeaderHide, navigationHeaderAuth, mainApi, goodFindNews, badFindNews);
const newsCard = new NewsCard(mainApi);
const newsCardList = new NewsCardList(newsCard, rootCard, buttonShowMore, mainApi);
const analyticsMyNews = new AnalyticsMyNews(mainApi, articleTitle, articleKeyWordsArray);

header.renderSecondPage();
newsCardList.getAllArticle();
newsCardList.addListeners();
analyticsMyNews.getAllArticle();


/*
window.addEventListener('keydown', function closeFormByKeydown(event) {
  if (event.keyCode === 27) {
    popupAuthUser.classList.remove("popup_is_opened");
  }
})
newsCardList.addListeners();
mobileMenu.addListenersMobileMenu();
*/
