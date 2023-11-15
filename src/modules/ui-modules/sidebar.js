// Sidebar links
const defaultTabs = [{
    link: 'Inbox',
    icon: 'inbox',
}, {
    link: 'Private tasks',
    icon: 'private-task'
},
{
    link: 'Today',
    icon: 'today'
}, 
{
    link: 'Upcoming',
    icon: 'upcoming'
}
];

function createlink(link) {
    return `<a href="#" class="sd-links" id="${link}-tab">${link}>`;
}

function createIconElement(icon) {
    return `<img src="${icon}.svg" id="${icon}-icon class="sd-icons>`;
}

function createToplinksHtml() {
    let sdHtml = '';
    defaultTabs.forEach((item) => {
        
    });
}
const projects = '<div class="sd-heading" id="projects"><h3>Projects</h3></div>';

// Sidebar contain two section top section and bottom section

// Top section todo navigation links and inbox tab link

// Bottom section contains Invite tab links and help tap link

export default function sidebar() {
    return `
        <div class="sidebar"></div>
    `;
} 