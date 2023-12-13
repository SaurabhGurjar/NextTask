//Add Sibebar css
import '../../css/sidebar.css';

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

import { strip } from '../scripts/stringlib';

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


function createlink(link, section) {
    return `<a href="#" class="sd-${section}-links sd-links" id="${strip(link.name.toLowerCase())}-tab">${link.name}</a>`;
}

function createIconElement(link) {
    return `<img src="${link.icon}" id="${strip(link.name.toLowerCase())}-icon" class="sd-icons">`;
}

function createLinksHtml(links, section) {
    let sdHtml = '';
    links.forEach((item) => {
        sdHtml += `<div class="sd-link-wrapper">${createIconElement(item) + createlink(item, section)}</div>`;
    });
    return sdHtml;
}

function createHeading(array) {
    let headings = '';
    array.forEach((item) => {
        if (item === 'general' || item === 'private') return;
        headings += (
            `<div class="sd-projects-link-wrapper">
                <div class="sd-project-color-box"></div>
                <a id="${strip(item.toLowerCase())}" class="sd-projects-link sd-links" href="#">${item}</a>
            </div>`
        );
    });
    return headings;
}

function createTeamLinkHtml(array) {
    let teams = '';
    array.forEach((item) => {
        if (item.name === 'general' || item.name === 'private') return;
        teams += (
            `<div class="sd-team-link-wrapper">
                <div class="sd-team-icon-wrapper">
                    <span class="sd-team-icon">${item.name.toUpperCase()[0]}</span>
                </div>
                <a id="${strip(item.name.toLowerCase())}" class="sd-links sd-team-link" href="#">${item.name}</a>
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
    // console.log(getTeams());
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
                <div class="sd-main">
                    <div class="sd-section-wrapper">
                        ${createLinksHtml(defaultTabs, 'top')}
                    </div>
                    <div class="sd-section-wrapper">
                        <div class="sd-heading-wrapper">
                            <div class="sd-heading-text-icon">
                                <img src="${folderIcon}" class="sd-icons">
                                <span id="projects" class="sd-heading-text">Projects</span>
                            </div>
                            
                            <div class="sd-buttons-interface-btn-wrapper">
                                <button id="add-new-project" class="interface-btn">
                                    <img src="${addIcon}" class="sd-icons add-btn">
                                </button>
                                <button id="dropdown-project-btn" class="dropdown-btn interface-btn">
                                    <img src="${ArrowIcon}" class="sd-icons">
                                </button>
                            </div>
                        </div>
                        <div class="sd-links-container" id="sd-project-links">
                            ${createHeading(getProjects())}
                        </div>
                    </div>
                    <div class="sd-section-wrapper">
                        <div class="sd-heading-wrapper">
                            <div class="sd-heading-text-icon">
                                <img src="${teamIcon}" class="sd-icons">
                                <span id="team" class="sd-heading-text">Team</span>
                            </div>
                            <div class="sd-buttons-interface-btn-wrapper">
                                <button id="add-new-team" class="interface-btn">
                                    <img src="${addIcon}" class="sd-icons add-btn">
                                </button>
                                <button id="dropdown-team-btn" class="dropdown-btn interface-btn">
                                    <img src="${ArrowIcon}" class="sd-icons">
                                </button>
                            </div>
                        </div>
                        <div class="sd-links-container" id="sd-team-links">
                        ${createTeamLinkHtml(getTeams())}
                        </div>
                    </div>
                </div>
            </div>
            <div class="sd-footer">
                ${createLinksHtml(sidebarFooter, 'footer')}
            </div>
        </div>
    `);
} 