// Import project and teams
import { getProjects, getTeams } from '../data';

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
import LOGO from '../../assets/icons/logo.svg';

// Sidebar links
const defaultTabs = [{
    name: 'Inbox',
    icon: inboxIcon,
}, {
    name: 'Private tasks',
    icon: privateTaskIcon,
},
{
    name: 'Today',
    icon: todayIcon,
},
{
    name: 'Upcoming',
    icon: upcomingIcon,
}
];

function createlink(link) {
    return `<a href="#" class="sd-links" id="${link.name.toLowerCase()}-tab">${link.name}</a>`;
}

function createIconElement(link) {
    return `<img src="${link.icon}" id="${link.name.toLowerCase()}-icon" class="sd-icons">`;
}

function createLinksHtml(links) {
    let sdHtml = '';
    links.forEach((item) => {
        sdHtml += `<div class="sd-link-wrapper">${createIconElement(item) + createlink(item)}</div>`;
    });
    return sdHtml;
}

function createHeading(array) {
    let headings = '';
    array.forEach((item) => {
        headings += (
            `<div class="sd-projects-link-container">
                <div class="sd-project-color-box"></div>
                <a id="${item.name.toLowerCase()}" class="sd-links sd-projects-link" href="#">
                    <span class="sd-projects-link-text" id="${item.name.toLowerCase()}">${item.name}</span>
                </a>
            </div>`
        );
    });
    return headings;
}

function createTeamLinkHtml(array) {
    let teams = '';
    array.forEach((item) => {
        teams += (
            `<div class="sd-team-link-container">
                <div class="sd-team-icon-wrapper">
                    <span class="sd-team-icon">${item.name.toUpperCase()[0]}</span>
                </div>
                <a id="${item.name.toLowerCase()}" class="sd-links sd-team-link" href="#">
                    <span class="sd-team-link-text" id="${item.name.toLowerCase()}">${item.name}</span>
                </a>
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

function parseData() {
    const projects = getProjects();
    projects.forEach((item) => {

    });
    console.log(getTeams());
}

parseData();

// Sidebar contain two section top section and bottom section

// Top section todo navigation links and inbox tab link

// Bottom section contains Invite tab links and help tap link

export default function sidebar() {
    return (
        `
        <div class="sidebar">
            <div class="top-section">
                <div class="logo-wrapper">
                    <span id="logo-text">NextTask</span><img src="${LOGO}" id="logo-icon" alt="NT">
                </div>
                <div class="sd-main">
                    <div class="sd-section-wrapper">
                        ${createLinksHtml(defaultTabs)}
                    </div>
                    <div class="sd-section-wrapper">
                        <div class="sd-heading-wrapper">
                            <div class="sd-heading-text-icon">
                                <img src="${folderIcon}" class="sd-icons">
                                <span id="projects" class="sd-heading-text">Projects</span>
                            </div>
                            
                            <div class="sd-buttons-interface-btn-wrapper">
                                <button id="projects" class="interface-btn">
                                    <img src="${addIcon}" class="sd-icons add-btn">
                                </button>
                                <button id="projects" class="dropdown-btn interface-btn">
                                    <img src="${ArrowIcon}" class="sd-icons">
                                </button>
                            </div>
                        </div>
                        ${createHeading(getProjects())}
                    </div>
                    <div class="sd-section-wrapper">
                        <div class="sd-heading-wrapper">
                            <div class="sd-heading-text-icon">
                                <img src="${teamIcon}" class="sd-icons">
                                <span id="team" class="sd-heading-text">Team</span>
                            </div>
                            <div class="sd-buttons-interface-btn-wrapper">
                                <button id="projects" class="interface-btn">
                                    <img src="${addIcon}" class="sd-icons add-btn">
                                </button>
                                <button id="team" class="dropdown-btn interface-btn">
                                    <img src="${ArrowIcon}" class="sd-icons">
                                </button>
                            </div>
                        </div>
                        ${createTeamLinkHtml(getTeams())}
                    </div>
                </div>
            </div>
            <div class="sd-footer">
                ${createLinksHtml(sidebarFooter)}
            </div>
        </div>
    `);
} 