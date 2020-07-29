
 class SearchForm {
   constructor(elHeaderForm, goodFindNews, badFindNews, newsApi, cardList, rootResult, buttonShowMore) {
     this.elHeaderForm = elHeaderForm;
     this.goodFindNews = goodFindNews;
     this.badFindNews = badFindNews;
     this.newsApi = newsApi;
     this.cardList = cardList;
     this.rootResult = rootResult;
     this.buttonShowMore = buttonShowMore;
   }

   findNews = (event) => {
     event.preventDefault();
     const button = event.currentTarget;
     button.setAttribute('disabled',true);

     const word = this.elHeaderForm.querySelector('.search__input').value;

     this.renderLoading(false);
     this.badFindNews.classList.add('root__empty_status_disabled');

     this.newsApi.getNews(word).then((data) => {
       button.removeAttribute('disabled');

       if (( data === undefined || data.totalResults === 0))  {
         this.badFindNews.classList.remove('root__empty_status_disabled');
         this.rootResult.classList.add('root__result_status_disabled');
         this.buttonShowMore.classList.add('search__button_status_disabled');
       }
      this.rootResult.classList.remove('root__result_status_disabled');
      this.cardList.initCardListKeyWord(word);
      this.cardList.initCardList(data.articles);
       console.log(data,'dataSearchForm');
     }).catch((e) => {
       console.log(e);
     }).finally(() => {
      this.renderLoading(true);
     })
   }



   renderLoading = (isLoading) => {
     if (!isLoading){
       this.goodFindNews.classList.remove('root__find_status_disabled');
     } else {
       this.goodFindNews.classList.add('root__find_status_disabled');
     }
   }
 }
export { SearchForm }
