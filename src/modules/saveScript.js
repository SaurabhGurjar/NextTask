import { tasks, projects, teams } from "./demoData";
import { taskArr, projectsArr, teamsArr, Team, Project, Task, getProjects, getTeams, getDataTasks } from "./data";

function dataStringfy(data) {
    return JSON.stringify(data);
}

function stringToObj(item) {
    return JSON.parse(item);
}


function saveDemoData () {
    teams.forEach((team) => {
        teamsArr.push(new Team(Team.assignId(), team.name, team.projectIds));
    });

    tasks.forEach((item) => {
        taskArr.push(
            new Task(
                Task.assignId(),
                item.heading,
                item.description,
                item.dueDate,
                item.priority,
                item.assignee,
                item.projectId,
                item.status,
                item.completed,
                item.isPrivate
            )
        );
    });

    projects.forEach((item) => {
        projectsArr.push(new Project(Project.assignId(), item.name, item.taskId));
    });

    save('svTeams', teamsArr);
    save('svProjects', projectsArr);
    save('svTasks', taskArr);
}

export function save (name, arr) {
    localStorage.setItem(name, dataStringfy(arr));
}

export function isSaved(name) {
    if(localStorage.getItem(name)) return true;
    else return false;
}

export function  getSavedData (name) {
    return stringToObj(localStorage.getItem(name));
}

export function saveData() {
    if (!isSaved('svTasks')) saveDemoData();
    else {
        getProjects();
        getTeams();
        getDataTasks();
    }
}