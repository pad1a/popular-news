import {getData} from "../utils/getData";
import {NEWS_LANG, PAGESIZE} from "../constants/constants";

class MainApi {
  constructor (options) {
    this.options = options;
  }

   signUp () {
}
//     credentials: 'include',
//        withCredentials: true,
   signIn = (userEmail, userPassword) => {
     return fetch(`${this.options.myURL}/signin`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       credentials: 'include',
       body: JSON.stringify({
         email: userEmail,
         password: userPassword
       }),

     })
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

   getUserData () {
     return fetch(`${this.options.myURL}/users/me`, {
       method: 'GET',
       credentials: 'include',
       headers: {
         'Content-Type': 'application/json',
       },
     })
       .then(res => {
         if (res.ok) {
           return res.json()
         }
         return Promise.reject(`Что то пошло не так ${res.status}`)
       })
       .catch((error) => console.log(error));
   }

   getArticles () {
     return fetch(`${this.options.myURL}/articles`, {
       method: 'GET',
       credentials: 'include',
       headers: {
         'Content-Type': 'application/json',
       },
     })
       .then(res => {
         if (res.ok) {
           return res.json()
         }
         return Promise.reject(`Что то пошло не так ${res.status}`)
       })
       .catch((error) => console.log(error));
   }
  createArticle (cardObject) {
    return fetch(`${this.options.myURL}/articles`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        keyword: cardObject.keyword,
        title: cardObject.title,
        text: cardObject.text,
        date: cardObject.date,
        source: cardObject.source,
        link: cardObject.link,
        image: cardObject.image
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Что то пошло не так ${res.status}`)
      })
      .catch((error) => console.log(error));
  }

  removeArticle = (id) => {
    console.log(id, 'send');
    return fetch(`${this.options.myURL}/articles/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Что то пошло не так ${res.status}`)
      })
      .catch((error) => console.log(error));
  }


  logout = () => {
    return fetch(`${this.options.myURL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
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
export { MainApi }
