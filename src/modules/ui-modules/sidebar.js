// Sidebar links

import inboxIcon from '../../assets/icons/inbox.svg';
import privateTaskIcon from '../../assets/icons/private-task.svg';
import folderIcon from '../../assets/icons/folder.svg';
import helpIcon from '../../assets/icons/help.svg';
import inviteIcon from '../../assets/icons/invite.svg';
import taskIcon from '../../assets/icons/task.svg';
import todayIcon from '../../assets/icons/today.svg';
import upcomingIcon from '../../assets/icons/upcoming.svg';

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

function createToplinksHtml(links) {
    let sdHtml = '';
    links.forEach((item) => {
        sdHtml += `<div class="sd-link-wrapper">${createIconElement(item) + createlink(item)}</div>`;
    });
    return sdHtml;
}
const projects = '';
const teams = '';

const sidebarFooter = [{
    name: "Invite people",
    icon: inviteIcon,
},
{
    name: "Help",
    icon: helpIcon,
}
]

// Sidebar contain two section top section and bottom section

// Top section todo navigation links and inbox tab link

// Bottom section contains Invite tab links and help tap link

export default function sidebar() {
    return `
        <div class="sidebar">
            <div class="top-section">
                <div class="sd-header">
                    <h4 id="logo">NextTask</h4>
                </div>
                <div class="sd-main">
                    <div class="sd-heading">
                        ${createToplinksHtml(defaultTabs)}
                    </div>
                    <div class="sd-heading" id="projects">
                        <h5>Projects</h5>
                    </div>
                    <div class="sd-heading" id="Teams">
                        <h5>Teams</h5>
                    </div>
                </div>
            </div>
            <div class="sd-footer">
                ${createToplinksHtml(sidebarFooter)}
            </div>
        </div>
    `;
} 