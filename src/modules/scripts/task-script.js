import { appendTask } from './showtask.js';
import dateScript from './datepicker-script.js';
import datePicker from '../ui-modules/datepicker.js';
import assigneeForm from '../ui-modules/assignee-form.js';
import assigneeScript from './assignee-script.js';
import { showPriority } from '../ui-modules/task-template.js';
import taskForm from '../ui-modules/task-form.js';
// import { da } from 'date-fns/locale';
const taskArr = [];

const tasks = [{
    heading: 'Winter clothings',
    description: 'Buy Jeans',
    date: '1 Dec',
    priority: 'high',
    assignee: 'Saurabh',
    project: 'Personal',
    team: 'Personal',
    completed: true,
},
{
    heading: 'Winter clothings',
    description: 'Buy Jackets',
    date: '3 Dec',
    priority: 'high',
    assignee: 'Saurabh',
},
{
    heading: 'Winter clothings',
    description: 'Buy Blazers',
    date: '4 Dec',
    priority: 'low',
    assignee: 'Saurabh',
}, {
    heading: 'Winter clothings',
    description: 'Buy Jeans',
    date: '1 Dec',
    priority: 'high',
    assignee: 'Saurabh',
},
{
    heading: 'Winter clothings',
    description: 'Buy Jackets',
    date: '3 Dec',
    priority: 'high',
    assignee: 'Saurabh',
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

// Edit task 
function editTask(taskId) {
    const taskContainer = document.getElementById(`${taskId}`);

    const taskObj = findTaskObj(taskId);
    const taskFormElements = getTaskFormData();
    taskFormElements.heading.value = taskObj.heading;
    taskFormElements.description.value = taskObj.description;
    taskFormElements.date.value = taskObj.date;
    taskFormElements.priority.value = taskObj.priority;
    taskFormElements.assignee.value = taskObj.assignee;

}


function removeTaskFromTaskArr(taskId) {
    const itemIndex = Number(taskId.charAt(0));
    taskArr.splice(itemIndex, 1);
}

function removeTaskFromPage(taskId) {
    const elementId = taskId.charAt(0);
    document.getElementById(elementId).remove();
}

function markCompletedTasks(task, container) {
    const taskObj = findTaskObj(task.id);
    task.classList.add('task-completed');
    container.classList.remove(`${showPriority(taskObj)}`);
    taskObj.setTaskState(true);
}

function unmarkTasks(task, container) {
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

function addTaskFormToPage() {
    const taskFormContainer = document.getElementById('tb-tf-container');
    taskFormContainer.innerHTML += taskForm();
}

function getTaskFormComponents() {
    const taskFormContainer = document.querySelector('.task-form-container');
    const taskForm = document.getElementById('task-form');
    const datePickerContainer = document.getElementById('dp-container');
    const assigneeFormContainer = document.getElementById('assignee-form-container');
    const assignee = document.getElementById('assignee-btn');
    const priority = document.getElementById('priority');
    const addTaskBtn = document.getElementById('form-add-task-btn');
    const cancelBtn = document.querySelector('#cancel-btn');
    const date = document.getElementById('date');


    return {
        taskFormContainer,
        taskForm,
        datePickerContainer,
        assigneeFormContainer,
        assignee,
        priority,
        addTaskBtn,
        cancelBtn,
        date,
    }

}

function toggleElementVisibility(element, hide) {
    if (hide) {
        document.getElementById(element).style.display = 'none';
    } else {
        document.getElementById(element).style.display = 'flex';
    }
}

function renderTaskForm(addBtnId) {
    addTaskFormToPage();
    toggleElementVisibility(addBtnId, true);
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

function closeTaskForm() {
    const taskFormContainer = document.querySelector('.task-form-container');
    const addBtnId = 'add-task-btn';
    toggleElementVisibility(addBtnId, false);
    removeBtnInputForms()
    taskFormContainer.remove();
}

function addNewTask() {
    const taskFormContainer = document.querySelector('.task-form-container');
    const date = document.getElementById('date');
    const addBtnId = 'add-task-btn';
    const taskForm = document.getElementById('task-form');

    if (boolTaskEntered()) {
        taskArr.push(createNewTask(getTaskFormData()));
        taskForm.reset();
        date.value = 'Due date';
        toggleElementVisibility(addBtnId, false);
        appendTask();
        taskFormContainer.remove();
    }
}
export function getTasks() {
    return taskArr;
}

export default function taskFormController() {

    document.onclick = (event) => {
        const elementId = event.target.id;
        const idLen = elementId.length;
        const delBtn = document.querySelectorAll('.task-interface-btn');
        if (elementId[idLen - 1] === 'c') {
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
                closeTaskForm();
                break;
            case 'form-add-task-btn':
                addNewTask();
                break;

        }

        delBtn.forEach((item) => {
            item.onclick = () => {
                if (item.id.slice(2) === 'del') {
                    removeTaskFromTaskArr(item.id);
                    removeTaskFromPage(item.id);
                }
            }
        });
    }


}