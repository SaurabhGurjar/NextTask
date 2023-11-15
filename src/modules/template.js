import header from './ui-modules/header.js';
import footer from './ui-modules/footer.js';

const main = document.createElement('div');
main.id = 'root';

main.innerHTML = `${header()} ${footer()}`
export default function page () {
    return main;
}