import taskTemplate from "../ui-modules/task-template";
import { getTasks } from './task-script.js';

let tasks = '';
function createtasksHtml() {
    getTasks().forEach((item, index) => {
        tasks += taskTemplate(index, item, getTasks().length);
    });
}
export function appendTask() {
    const tasksElements = document.getElementById('tasks');
    tasksElements.innerHTML += (taskTemplate(getTasks().length - 1, getTasks()[(getTasks().length - 1)]));
}

export function tasksHTML() {
    createtasksHtml();
    return tasks;
} 