import content from "../ui-modules/content";
import { getDataTasks, getPrivateTask, getTodayTask, getUpcomingTask, getProjectTask } from "../data";
import { getTasksHTML } from "./showtask";

function rotateArrow (btnId) {
    const arrow = document.getElementById(btnId);
    arrow.classList.toggle('rotate-dropdown-btn');
}

function toggleDropdown (btnId) {
    const projectsLinkContainer = document.getElementById('sd-project-links');
    const teamsLinkContainer = document.getElementById('sd-team-links');
    
    if(btnId === 'dropdown-project-btn') {
        projectsLinkContainer.classList.toggle('hide-projects-and-teams');
    } else if (btnId === 'dropdown-team-btn') {
        teamsLinkContainer.classList.toggle('hide-projects-and-teams');
    }
}

function dropdownEvents () {
    const dropdownBtn = document.querySelectorAll('.dropdown-btn');

    dropdownBtn.forEach((btn) => {

        btn.onclick = () => {
            rotateArrow(btn.id);
            toggleDropdown(btn.id);
        }
    });
}

function changeMainHeading(newHeading) {
    const heading = document.getElementById('mhd');
    heading.textContent = newHeading;
}


export function linksEvents() {
    const links = document.querySelectorAll('.sd-links');
    const tasks = document.getElementById('tasks');

   const heading =  links.forEach((link) => {
        link.onclick = () => {
            if (!(link.classList[0] === 'sd-top-links' || link.classList[0] === 'sd-projects-link')) return;

            switch (link.id) {
                case 'inbox-tab':
                    tasks.innerHTML = getTasksHTML(getDataTasks());
                    break;
                case 'private-tasks-tab': 
                    tasks.innerHTML = getTasksHTML(getPrivateTask());
                    break;
                case 'today-tab':
                    tasks.innerHTML = getTasksHTML(getTodayTask());
                    break;
                case 'upcoming-tab':
                    tasks.innerHTML = getTasksHTML(getUpcomingTask());
                    break;
                default:
                    tasks.innerHTML = getTasksHTML(getProjectTask(link.id));
                    break;
                }
                changeMainHeading(link.textContent);   
        };
    });
}

export default function sidebarEvents () {
    dropdownEvents();
}


