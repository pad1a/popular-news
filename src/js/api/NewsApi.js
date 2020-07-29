
import { getData } from "../utils/getData";
import { pageSize, newsLang } from "../constants/constants";

 class NewsApi {
  constructor (options) {
   this.options = options;
  }
  getNews (searchWord) {
    let data = getData();
    return fetch(`${this.options.baseUrl}${searchWord}&from=${data.fromDate}&to=${data.toDate}&language=${newsLang}&sortBy=publishedAt&pageSize=${pageSize}&apiKey=${this.options.headers.authorizationNews}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Что то пошло не так ${res.status}`)
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export { NewsApi };
