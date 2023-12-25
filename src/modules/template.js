import header from './ui-modules/header.js';
import footer from './ui-modules/footer.js';
import sidebar from './ui-modules/sidebar.js';
import content from './ui-modules/content.js';
import { getDataTasks, getProjects, getTeams, projectStringfy } from './data.js';
getDataTasks();
getProjects();
getTeams();

const main = document.createElement('div');
main.id = 'root';
main.innerHTML = `${header()} ${sidebar()} ${content()}`;
export default function page () {
    return main;
}