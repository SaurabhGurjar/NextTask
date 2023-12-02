import { appendTask } from './showtask';
import dateScript from './datepicker-script';
import datePicker from '../ui-modules/datepicker';
import assigneeForm from '../ui-modules/assignee-form';
import assigneeScript from './assignee-script';
import { showPriority } from '../ui-modules/task-template';
import taskForm from '../ui-modules/task-form';
import { capitalize } from './stringlib';
import { el } from 'date-fns/locale';
// import { da } from 'date-fns/locale';
const taskArr = [];

const tasks = [{
    heading: 'Winter clothings',
    description: 'Buy Jeans',
    date: '1 Dec',
    priority: 'high',
    assignee: 'saurabh',
    project: 'Personal',
    team: 'Personal',
    completed: true,
},
{
    heading: 'Winter clothings',
    description: 'Buy Blazers',
    date: '4 Dec',
    priority: 'medium',
    assignee: 'Saurabh',
}]


class Task {
    constructor(heading, description, date, priority, assignee, project, team, completed) {
        this.heading = heading;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.assignee = assignee;
        this.project = project;
        this.team = team;
        if (completed) {
            this.completed = true;
        } else {
            this.completed = false;
        }
    }

    getHeading() {
        return this.heading;
    }

    getDescription() {
        return this.description;
    }

    getDate() {
        return this.date;
    }

    getPriority() {
        return this.priority;
    }

    getAssignee() {
        return this.assignee;
    }

    getProject() {
        return this.project;
    }

    getTeam() {
        return this.team;
    }

    getTaskState() {
        return this.completed;
    }

    setHeading(heading) {
        this.heading = heading;
    }

    setDescription(description) {
        this.description = description;
    }

    setDate(date) {
        this.date = date;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    setAssignee(assignee) {
        this.assignee = assignee;
    }

    setProject(project) {
        this.project = project;
    }

    setTeam(team) {
        this.team = team;
    }

    setTaskState(completed) {
        this.completed = completed;
    }
}

tasks.forEach((item) => {
    taskArr.push(new Task(item.heading, item.description, item.date, item.priority, item.assignee, item.project, item.team, item.completed))
});

function getTaskFormData() {
    const heading = document.getElementById('tkn');
    const description = document.getElementById('tkd');
    const date = document.getElementById('date');
    const priority = document.getElementById('priority');
    const assignee = document.getElementById('assignee-btn');

    return {
        heading,
        description,
        date,
        priority,
        assignee
    }
}

function createNewTask(taskObj) {
    const task = new Task(taskObj.heading.value, taskObj.description.value, taskObj.date.value, taskObj.priority.value, taskObj.assignee.value);
    return task;
}

// create a function to check if the task heading or description is empty
function boolTaskEntered() {
    const taskObj = getTaskFormData();
    if (taskObj.heading.value !== '' || taskObj.description.value !== '') {
        return true;
    }
}

function removeBtnInputForms() {
    const dateForm = document.getElementById('date-picker');
    const assigneeForm = document.getElementById('assignee-form');

    if (assigneeForm) {
        assigneeForm.remove();
    }
    if (dateForm) {
        dateForm.remove();
    }
}

function findTaskObj(taskId) {
    const index = Number(taskId);
    return taskArr[index];
}


function addTaskFormToPage(container, taskId) {
    container.innerHTML += taskForm(taskId);
}

function getTaskComponents(taskId) {
    const heading = document.getElementById(`${taskId}-h`);
    const description = document.getElementById(`${taskId}-d`);
    const priorityIndicator = document.getElementById(`${taskId}-pind`)
    const date = document.getElementById(`${taskId}-date`);
    const priority = document.getElementById(`${taskId}-p`);
    const name = document.getElementById(`${taskId}-name`);

    return {
        heading,
        description,
        priorityIndicator,
        date,
        priority,
        name,
    }

}

function elementVisibility(elementId, visible) {
    if (visible) {
        document.getElementById(elementId).style.display = 'flex';
    } else {
        document.getElementById(elementId).style.display = 'none';
    }
}

function renderTaskForm(addBtnId, taskId) {
    const taskFormContainer = document.getElementById('tb-tf-container');
    const cancelBtn = document.getElementById('cancel-btn');
    if (!taskId) {
        taskId = 'new-task-btn';
    }
    addTaskFormToPage(taskFormContainer, taskId);
    elementVisibility(addBtnId, false);
}

function renderDatePicker() {
    const dateForm = document.getElementById('date-picker');
    const datePickerContainer = document.getElementById('dp-container');

    removeBtnInputForms()
    if (!dateForm) {
        datePickerContainer.innerHTML = datePicker();
        dateScript();
    }
}

function renderAssigneeForm() {
    const isAssigneeFormActive = document.getElementById('assignee-form');
    const assigneeFormContainer = document.getElementById('assignee-form-container');
    removeBtnInputForms()
    if (!isAssigneeFormActive) {
        assigneeFormContainer.innerHTML = assigneeForm();
        assigneeScript();
    }
}

function closeTaskForm(caller) {
    const taskFormContainer = document.querySelector('.task-form-container');
    taskFormContainer.remove();
    if (caller === 'new-task-btn') {
        const addBtnId = 'add-task-btn';
        elementVisibility(addBtnId, true);
    } else if (caller.slice(2) === 'edit') {
        const taskWrapper = (`${caller.charAt(0)}-wrapper`);
        elementVisibility(taskWrapper, true);
    }
    removeBtnInputForms()
}

function addNewTask(element) {
    const callerId = element.dataset.caller;
    const taskFormContainer = document.querySelector('.task-form-container');
    const date = document.getElementById('date');
    const taskForm = document.getElementById('task-form');
    let hiddenElementId;
    if (boolTaskEntered()) {

        if (callerId === 'new-task-btn') {
            hiddenElementId = 'add-task-btn';
            const taskId = taskArr.length;
            const tasksContainer = document.getElementById('tasks');
            taskArr.push(createNewTask(getTaskFormData()));
            appendTask(taskId, findTaskObj(taskId), tasksContainer);
        } else if (callerId.slice(2) === 'edit') {
            hiddenElementId = `${callerId.charAt(0)}-wrapper`;
            editTaskObj(findTaskObj(callerId.charAt(0)));
            updatePageTaskElements(callerId.charAt(0));
        }
        taskForm.reset();
        date.value = 'Due date';
        elementVisibility(hiddenElementId, true);
        taskFormContainer.remove();
    }
}

function removeTaskFromTaskArr(taskId) {
    const itemIndex = Number(taskId.charAt(0));
    taskArr.splice(itemIndex, 1);
}

function removeTaskFromPage(elementId) {
    document.getElementById(elementId).remove();
}

function markCompletedTasks(task, container) {
    const taskObj = findTaskObj(task.id);
    const editBtn = (`${task.id}-edit`);

    elementVisibility(editBtn, false);
    task.classList.add('task-completed');
    container.classList.remove(`${showPriority(taskObj)}`);
    taskObj.setTaskState(true);
}

function unmarkTasks(task, container) {
    const editBtn = (`${task.id}-edit`);

    elementVisibility(editBtn, true);
    task.classList.remove('task-completed');
    const taskObj = findTaskObj(task.id);
    taskObj.setTaskState(false);
    container.classList.add(`${showPriority(taskObj)}`);
}

function changeTaskState(event) {
    const taskcheckBox = event.target.id;
    const taskId = taskcheckBox.charAt(0);
    const task = document.getElementById(`${taskId}`);
    const priorityIndicator = document.getElementById(`${taskId}-pind`);
    if (event.target.checked) {
        markCompletedTasks(task, priorityIndicator);
    } else {
        unmarkTasks(task, priorityIndicator);
    }
}
function removeTask(taskId) {
    if (taskId.slice(2) === 'del') {
        removeTaskFromTaskArr(taskId);
        removeTaskFromPage(taskId.charAt(0));
    }
}

// Edit task 
function opentaskEditorForm(task) {
    const taskId = task.id.charAt(0);
    const callerId = task.id;
    const taskContainer = document.getElementById(taskId);
    const taskWrapper = (`${taskId}-wrapper`);
    console.log(taskId, taskWrapper);

    addTaskFormToPage(taskContainer, taskId);
    const formAddTaskBtn = document.getElementById('form-add-task-btn');
    const formCancelBtn = document.getElementById('cancel-btn');

    formAddTaskBtn.dataset.caller = callerId;
    formCancelBtn.dataset.caller = callerId;

    const taskObj = findTaskObj(taskId);
    updateFormFields(taskObj);
    elementVisibility(taskWrapper, false);
}

function editTaskObj(taskObj) {
    const taskFormElementsObj = getTaskFormData();
    console.log(taskObj);
    taskObj.setHeading(taskFormElementsObj.heading.value);
    taskObj.setDescription(taskFormElementsObj.description.value);
    taskObj.setDate(taskFormElementsObj.date.value);
    taskObj.setPriority(taskFormElementsObj.priority.value);
    taskObj.setAssignee(taskFormElementsObj.assignee.value);
}

function updateFormFields(taskObj) {
    const taskFormElements = getTaskFormData();
    taskFormElements.heading.value = taskObj.getHeading();
    taskFormElements.description.value = taskObj.getDescription();
    taskFormElements.date.value = taskObj.getDate();
    taskFormElements.priority.value = taskObj.getPriority();
    taskFormElements.assignee.value = taskObj.getAssignee();
}

function updatePageTaskElements(taskId) {
    const formComponentObj = getTaskComponents(taskId);
    const taskObj = findTaskObj(taskId);

    formComponentObj.heading.textContent = taskObj.getHeading();
    formComponentObj.description.textContent = taskObj.getDescription();
    formComponentObj.date.textContent = taskObj.getDate();
    formComponentObj.priority.textContent = capitalize(taskObj.getPriority());
    formComponentObj.name.textContent = capitalize(taskObj.getAssignee())


}

export function getTasks() {
    return taskArr;
}

export default function taskFormController() {

    document.onclick = (event) => {
        const elementId = event.target.id;
        const idLen = elementId.length;
        const taskBtn = document.querySelectorAll('.task-interface-btn');
        if (elementId[idLen - 1] === 'c' && idLen === 3) { // idLen === 3 because it insure that the id will always refer to checkbox 0-c, 1-c.
            changeTaskState(event);
        }

        switch (elementId) {
            case 'add-task-btn':
                renderTaskForm(event.target.id);
                break;
            case 'date':
                renderDatePicker();
                break;
            case 'assignee-btn':
                renderAssigneeForm();
                break;
            case 'cancel-btn':
                closeTaskForm(event.target.dataset.caller);
                break;
            case 'form-add-task-btn':
                addNewTask(event.target);
                break;
        }

        taskBtn.forEach((item) => {
            item.onclick = () => {
                removeTask(item.id);
                if (item.id.slice(2) === 'edit') {
                    opentaskEditorForm(item);
                }
            }
        });
    }


}