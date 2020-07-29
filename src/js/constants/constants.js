import { config } from "../config/config";

export const msOnDay = 86400000;
export const pageSize = 100;
export const newsLang = 'ru';

export const options = JSON.parse( config ); // Настройка API

// Validator
export const errorMsg = {
  valueMissing: "Это обязательное поле",
  tooShort: "Должно быть от 2 до 30 символов",
  tooLong: "Должно быть от 8 до 30 символов",
  typeMismatch: "Неверный Email"
};
export const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
