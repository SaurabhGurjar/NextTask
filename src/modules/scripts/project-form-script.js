import projectForm from "../ui-modules/project-form";
import teamForm from "../ui-modules/team-form";


function createOverlay() {
    const body = document.querySelector('body');
    const overlay = document.createElement('div');
    overlay.classList.add("overlay");
    body.insertBefore(overlay, body.children[0]);
}

function createAddProjectForm() {
    const projectFormContainer = document.createElement('div');
    projectFormContainer.classList.add('project-form-container');
    projectFormContainer.id = 'PFC';
    projectFormContainer.innerHTML = projectForm();
    return projectFormContainer;
}

function createAddTeamForm() {
    const projectFormContainer = document.createElement('div');
    projectFormContainer.classList.add('team-form-container');
    projectFormContainer.id = 'TFC';
    projectFormContainer.innerHTML = teamForm();
    return projectFormContainer;
}

function appendFormToMain(form) {
    const mainContentDiv = document.getElementById('mc');
    mainContentDiv.appendChild(form);
}

function renderForm(id) {
    const projectForm = document.getElementById('PFC');
    const teamForm = document.getElementById('TFC');
    if (projectForm || teamForm) return;
    if (id === 'PFC') appendFormToMain(createAddProjectForm());
    if (id === 'TFC') appendFormToMain(createAddTeamForm());
    createOverlay();
}

function removeForm(id) {
    const formAdd = document.getElementById(id);
    formAdd.remove();
    document.querySelector('.overlay').remove();
}


export default function addProjectEvent(e) {
    if (
        e.target.id === 'add-new-project'
        || e.target.dataset.btnid === 'add-new-project'
        || e.target.id === 'add-new-team'
        || e.target.dataset.btnid === 'add-new-team'
    ) renderForm(e.target.dataset.fcid);
    
    if (
        e.target.id === 'pf-cancel'
        || e.target.id === 'tf-cancel'
    ) removeForm(e.target.dataset.fcid);
}
