export function capitalize(str) {
    return str.charAt(0).toUpperCase()+str.slice(1);
}

export function strip (str) {
   return str.split(' ').filter(Boolean).join('-');
}