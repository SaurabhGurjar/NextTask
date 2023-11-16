import header from './ui-modules/header.js';
import footer from './ui-modules/footer.js';
import sidebar from './ui-modules/sidebar.js';

const main = document.createElement('div');
main.id = 'root';

main.innerHTML = `${sidebar()}`;
export default function page () {
    return main;
}