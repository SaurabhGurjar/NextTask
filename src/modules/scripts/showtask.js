import taskTemplate from "../ui-modules/task-template";

function createtasksHtml(tasks) {
    let tasksHTML = '';
    tasks.forEach((item, index) => {
        tasksHTML += taskTemplate(index, item);
    });
    return tasksHTML
}

export function appendTask(taskId, taskObj, container) {
    if (!taskObj) return '';
    container.innerHTML += (taskTemplate(taskId, taskObj));
}

export function getTasksHTML(tasks) {
    if (tasks.length === 0) return '';
    return createtasksHtml(tasks);
} 