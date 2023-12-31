//Add Sibebar css
import '../../css/sidebar.css';

// Import project and teams
import { projectsArr, teamsArr  } from '../data';

// Import icons
import inboxIcon from '../../assets/icons/inbox.svg';
import privateTaskIcon from '../../assets/icons/private-task.svg';
import folderIcon from '../../assets/icons/folder.svg';
import helpIcon from '../../assets/icons/help.svg';
import addIcon from '../../assets/icons/invite.svg';
import taskIcon from '../../assets/icons/task.svg';
import todayIcon from '../../assets/icons/today.svg';
import teamIcon from '../../assets/icons/team.svg';
import upcomingIcon from '../../assets/icons/upcoming.svg';
import ArrowIcon from '../../assets/icons/arrow.svg';
import delIcon from '../../assets/icons/delete.svg';


import { strip, capitalize } from '../scripts/stringlib';

// Sidebar links
const defaultTabs = [{
    id: 'g',
    name: 'Inbox',
    icon: inboxIcon,
}, 
{
    id: 'p',
    name: 'Private tasks',
    icon: privateTaskIcon,
},
{
    id: 't',
    name: 'Today',
    icon: todayIcon,
},
{
    id: 'u',
    name: 'Upcoming',
    icon: upcomingIcon,
}
];


function createlink(link, section) {
    return `<a href="#" class="sd-${section}-links sd-links" id="${link.id}">${link.name}</a>`;
}

function createIconElement(link) {
    return `<img src="${link.icon}" id="${strip(link.name.toLowerCase())}-icon" class="sd-icons">`;
}

function createLinksHTML(links, section) {
    let sdHtml = '';
    links.forEach((item) => {
        sdHtml += `<div class="sd-link-wrapper">${createIconElement(item) + createlink(item, section)}</div>`;
    });
    return sdHtml;
}

export function createProjectLinkHTML (projectObj) {
    return (
        `<div class="sd-projects-link-wrapper" id="${projectObj.getId()}-plw">
            <div class="sd-project-color-box"></div>
            <a id="${projectObj.id}-pl" class="sd-projects-link sd-links" href="#">${projectObj.getName()}</a>
            <button class="pt-del-btn" id="${projectObj.getId()}-pdel" data-projectid="${projectObj.getId()}"><img src="${delIcon}" class="task-date-icon"></button>
        </div>`
    );
}

function createProjectElements(array) {
    let headings = '';
    array.forEach((item) => {
        headings += createProjectLinkHTML(item);
    });
    return headings;
}

function createTeamLinkHTML(array) {
    let teams = '';
    array.forEach((item) => {
        if (item.name === 'general' || item.name === 'private') return;
        teams += (
            `<div class="sd-team-link-wrapper">
                <div class="sd-team-icon-wrapper">
                    <span class="sd-team-icon">${item.name.toUpperCase()[0]}</span>
                </div>
                <a id="${item.getId()}-tl" class="sd-links sd-team-link" href="#">${item.name}</a>
                <button class="pt-del-btn" id="${item.getId()}-tdel" data-teamid="${item.getId()}">
                    <img src="${delIcon}" class="task-date-icon">
                </button>
            </div>
        `);
    });
    return teams;
}

const sidebarFooter = [{
    name: "Invite people",
    icon: addIcon,
},
{
    name: "Help",
    icon: helpIcon,
}
];

// Sidebar contain two section top section and bottom section

// Top section todo navigation links and inbox tab link

// Bottom section contains Invite tab links and help tap link

export default function sidebar() {
    return (
        `
        <div class="sidebar">
            <div class="top-section">
                <div class="sd-main">
                    <div class="sd-section-wrapper">
                        ${createLinksHTML(defaultTabs, 'top')}
                    </div>
                    <div class="sd-section-wrapper">
                        <div class="sd-heading-wrapper">
                            <div class="sd-heading-text-icon">
                                <img src="${folderIcon}" class="sd-icons">
                                <span id="projects" class="sd-heading-text">Projects</span>
                            </div>
                            
                            <div class="sd-buttons-interface-btn-wrapper">
                                <button id="add-new-project" class="interface-btn" data-fcid="PFC">
                                    <img src="${addIcon}" class="sd-icons add-btn" data-btnid="add-new-project" data-fcid="PFC">
                                </button>
                                <button id="dropdown-project-btn" class="dropdown-btn interface-btn">
                                    <img src="${ArrowIcon}" class="sd-icons">
                                </button>
                            </div>
                        </div>
                        <div class="sd-links-container" id="sd-project-links">
                            ${createProjectElements(projectsArr)}
                        </div>
                    </div>
                    <div class="sd-section-wrapper">
                        <div class="sd-heading-wrapper">
                            <div class="sd-heading-text-icon">
                                <img src="${teamIcon}" class="sd-icons">
                                <span id="team" class="sd-heading-text">Team</span>
                            </div>
                            <div class="sd-buttons-interface-btn-wrapper">
                                <button id="add-new-team" class="interface-btn" data-fcid="TFC">
                                    <img src="${addIcon}" class="sd-icons add-btn" data-btnId="add-new-team" data-fcid="TFC">
                                </button>
                                <button id="dropdown-team-btn" class="dropdown-btn interface-btn">
                                    <img src="${ArrowIcon}" class="sd-icons">
                                </button>
                            </div>
                        </div>
                        <div class="sd-links-container" id="sd-team-links">
                        ${createTeamLinkHTML(teamsArr)}
                        </div>
                    </div>
                </div>
            </div>
            <div class="sd-footer">
                ${createLinksHTML(sidebarFooter, 'footer')}
            </div>
        </div>
    `);
} 