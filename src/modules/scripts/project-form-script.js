import projectForm from '../ui-modules/project-form';
import teamForm from '../ui-modules/team-form';
import { Project, Team, teamsArr, projectsArr, tasksArr, } from '../data';
import { getNumFromStr } from './stringlib';

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

function getProjectFormData() {
    const form = document.getElementById('PFC');
    const projectName = document.getElementById('pname').value;
    const teamName = document.getElementById('pform-team-selector').value;
    if (!form || !projectName || !teamName) return 1;
    return {
        formId: form.id,
        projectName,
        teamName,
    };
}

function getTeamFormData() {
    const form = document.getElementById('TFC');
    const teamName = document.getElementById('tname').value;
    if (!form || !teamName) return 1;
    return {
        formId: form.id,
        teamName,
    };
}

function createProjectObj(projectId, projectName, teamName) {
    const project = new Project(projectId, projectName, teamName);
    console.log(project);
    return project;
}

function addNewProject() {
    const projectsArrLen = projectsArr.length;
    const projectFormData = getProjectFormData();
    if (projectFormData === 1) return 1;
    projectsArr.push(createProjectObj(projectsArrLen, projectFormData.projectName, projectFormData.teamName))
    removeForm(projectFormData.formId);
}

function createTeam(teamId, teamName) {
    const team = new Team(teamId, teamName);
    return team;
}

function addNewTeam() {
    const teamsArrLen = teamsArr.length;
    const teamFormData = getTeamFormData();
    if (teamFormData === 1) return 1;
    teamsArr.push(createTeam(teamsArrLen, teamFormData.teamName))
    console.log(teamsArr);
    removeForm(teamFormData.formId);
}

export default function addProjectEvent(e) {
    if (
        e.target.id === 'add-new-project'
        || e.target.dataset.btnid === 'add-new-project'
        || e.target.id === 'add-new-team'
        || e.target.dataset.btnid === 'add-new-team'
    ) renderForm(e.target.dataset.fcid);


    switch (e.target.id) {
        case 'pf-cancel': 
            removeForm(e.target.dataset.fcid);
            break;
        case 'tf-cancel': 
            removeForm(e.target.dataset.fcid);
            break;
        case 'pf-add':
            e.preventDefault();
            addNewProject();
            break;
        case 'tf-add':
            e.preventDefault();
            addNewTeam();
            break;
    }
}
