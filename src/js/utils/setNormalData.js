import { months } from '../constants/constants';
import { findMounth } from './findMounth';
function setNormalData (data){
  let date = new Date(data);
  let mounthNumber = date.getMonth();
  return `${date.getDate()} ${findMounth(months,mounthNumber)}, ${date.getFullYear()}`;
}


export { setNormalData };
