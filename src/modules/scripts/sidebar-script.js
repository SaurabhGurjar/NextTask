import content from "../ui-modules/content";
import { getInboxTasks, getPrivateTask, getTodayTask, getUpcomingTask, getProjectTask, taskArr } from "../data";
import { getTasksHTML } from "./showtask";
import { closeTaskForm } from "./task-script";
import { getNumFromStr } from "./stringlib";

function rotateArrow(btnId) {
    const arrow = document.getElementById(btnId);
    arrow.classList.toggle('rotate-dropdown-btn');
}

function toggleDropdown(btnId) {
    const projectsLinkContainer = document.getElementById('sd-project-links');
    const teamsLinkContainer = document.getElementById('sd-team-links');

    if (btnId === 'dropdown-project-btn') {
        projectsLinkContainer.classList.toggle('hide-projects-and-teams');
    } else if (btnId === 'dropdown-team-btn') {
        teamsLinkContainer.classList.toggle('hide-projects-and-teams');
    }
}

function dropdownEvents() {
    const dropdownBtn = document.querySelectorAll('.dropdown-btn');

    dropdownBtn.forEach((btn) => {
        btn.onclick = () => {
            rotateArrow(btn.id);
            toggleDropdown(btn.id);
        }
    });
}

function changeMainHeading(newHeading, id) {
    const heading = document.getElementById('mhd');
    heading.textContent = newHeading;
    heading.dataset.pageid = id;
}


function renderTasks(arr) {
    tasks.innerHTML = getTasksHTML(arr);
}

export function linksEvents() {
    const links = document.querySelectorAll('.sd-links');
    const tasks = document.getElementById('tasks');

    const heading = links.forEach((link) => {
        link.onclick = () => {
            if (!(link.classList[0] === 'sd-top-links' || link.classList[0] === 'sd-projects-link')) return;

            switch (link.id) {
                case 'g':
                    renderTasks(getInboxTasks());
                    break;
                case 'p':
                    renderTasks(getPrivateTask());
                    break;
                case 't':
                    renderTasks(getTodayTask());
                    break;
                case 'u':
                    renderTasks(getUpcomingTask());
                    break;
                default:
                    renderTasks(getProjectTask(link.id));
                    break;
            }
            changeMainHeading(link.textContent, link.id);
            closeTaskForm();
        };
    });
}

export default function sidebarEvents() {
    dropdownEvents();
}


