
class AnalyticsMyNews {
  constructor (mainApi, articleTitle, articleKeyWordsArray) {
    this.mainApi = mainApi;
    this.articleTitle = articleTitle;
    this.articleKeyWordsArray = articleKeyWordsArray;
    this.countArticle = 0;
    this.keywordsArray = [];
  }
  getUserInfo = () => {
    this.mainApi.getUserData().then((data) => {
      this.articleTitle.textContent = `${data.name}, у вас ${this.countArticle} сохранённых статей`;
    })
  }

  getAllArticle = () => {
    this.mainApi.getArticles().then((data) => {
      this.countArticle = data.length;
      data.forEach((element) => {
       this.keywordsArray.push(element.keyword)
      })
      this.getUserInfo();
      this.getPopularKeyword();
    })
  }
  getPopularKeyword = () => {
    let result = {};
    this.keywordsArray.forEach(function (a) {
      if (result[a] !== undefined)
        ++result[a];
      else
        result[a] = 1;
    });
    let sortable = [];
    for (let popularKeyword in result) {
      sortable.push([popularKeyword, result[popularKeyword]]);
    }
    sortable.sort((a, b) =>{
      return b[1] - a[1];
    })
    this.setPopularWord(sortable);

}
  setPopularWord(sortObj) {
    const arrayKeyWordsWithCount = sortObj.flat(Infinity);
    const wordArray = arrayKeyWordsWithCount.filter(e => typeof e === 'string');
    this.articleKeyWordsArray[0].textContent = `${wordArray[0]},`
    this.articleKeyWordsArray[1].textContent = `${wordArray[1]}`;
    this.articleKeyWordsArray[2].textContent = `${wordArray.length - 2} другим`;

  }


}
export { AnalyticsMyNews };
