function rotateArrow (btnId) {
    const arrow = document.getElementById(btnId);
    arrow.classList.toggle('rotate-dropdown-btn');
}

function toggleDropdown (btnId) {
    const projectsLinkContainer = document.getElementById('sd-project-links');
    const teamsLinkContainer = document.getElementById('sd-team-links');
    console.log(btnId);
    
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

export default function sidebarEvents () {
    dropdownEvents();
}


