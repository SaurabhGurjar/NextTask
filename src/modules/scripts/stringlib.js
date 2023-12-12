import { el } from "date-fns/locale";

export function capitalize(str) {
    return str.charAt(0).toUpperCase()+str.slice(1);
}

export function strip (str) {
   return str.split(' ').filter(Boolean).join('-');
}

export function getNumFromStr (str) {
   const num =  str.split('').filter((element) => {
    if (Number(element) || element === '0') {
        return element;
    }
   });
   return Number(num.join(''));
}