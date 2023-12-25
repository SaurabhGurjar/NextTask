import { appendTask } from './showtask';
import assigneeForm from '../ui-modules/assignee-form';
import assigneeScript from './assignee-script';
import { showPriority } from '../ui-modules/task-template';
import taskForm from '../ui-modules/task-form';
import { capitalize, getNumFromStr } from './stringlib';
import { Task, taskArr, projectsArr } from '../data';
import { formatDate, dueToday } from './formatDate';
import addProjectEvent from './project-form-script';
import { sidebarEvents, removeTaskFromProject } from './project-script';

function getTaskFormData() {
    const heading = document.getElementById('tkn');
    const description = document.getElementById('tkd');
    const date = document.getElementById('date');
    const priority = document.getElementById('priority');
    const assignee = document.getElementById('assignee-btn');
    const project = document.getElementById('project-selector');
    return {
        heading,
        description,
        date,
        priority,
        assignee,
        project,
    }
}

function addNewTaskToProject (projectId, taskId) {
    if(projectId === 'p' || projectId === 'g') return;
    projectsArr[projectId].addTask(taskId);
}

function createNewTask(taskObj) {
    const task = new Task(
        Task.assignId(),
        taskObj.heading.value.toLowerCase(),
        taskObj.description.value.toLowerCase(),
        taskObj.date.value, 
        taskObj.priority.value,
        taskObj.assignee.value.toLowerCase(),
        Number(taskObj.project.value) || taskObj.project.value,
    );

    addNewTaskToProject(task.getProjectId(), task.getId());
    return task;
}


// create a function to check if the task heading or description is empty
function boolTaskEntered() {
    const taskFormDataObj = getTaskFormData();
    if (taskFormDataObj.heading.value !== '' && taskFormDataObj.date.value !== '') {
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

function setProjectFieldOnTaskForm(taskId) {
    const projectSelector = document.getElementById('project-selector');
    let pageId = '';
    if (taskId === 'new-task-btn') {
        pageId = document.getElementById('mhd').dataset.pageid;
        if (pageId === 't' || pageId === 'u' || pageId === 'g') {
            pageId = 'g';
        } else if (pageId === 'p') {
            pageId = 'p';
        } else {
            pageId = getNumFromStr(pageId);
        }
    }
    projectSelector.value = pageId;
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
    if (!taskId) {
        taskId = 'new-task-btn';
    }
    addTaskFormToPage(taskFormContainer, taskId);
    setProjectFieldOnTaskForm(taskId)
    elementVisibility(addBtnId, false);
}

// function renderDatePicker() {
//     const dateForm = document.getElementById('date-picker');
//     const datePickerContainer = document.getElementById('dp-container');

//     removeBtnInputForms()
//     if (!dateForm) {
//         datePickerContainer.innerHTML = datePicker();
//         dateScript();
//     }
// }

function renderAssigneeForm() {
    const isAssigneeFormActive = document.getElementById('assignee-form');
    const assigneeFormContainer = document.getElementById('assignee-form-container');
    removeBtnInputForms()
    if (!isAssigneeFormActive) {
        assigneeFormContainer.innerHTML = assigneeForm();
        assigneeScript();
    }
}

export function closeTaskForm(callerId) {
    const taskFormContainer = document.querySelector('.task-form-container');
    const taskForm = document.getElementById('task-form');
    const formId = callerId;

    if (taskForm) taskFormContainer.remove();

    if (formId === 'new-task-btn' || !formId) {
        const addBtnId = 'add-task-btn';
        elementVisibility(addBtnId, true);
    } else if (formId.split('-')[1] === 'edit' || formId.split('-')[2] === 'form') {
        const taskWrapper = (`${getNumFromStr(formId)}-tk-wrapper`);
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
        } else if (callerId.split('-')[1] === 'edit') {
            hiddenElementId = `${getNumFromStr(callerId)}-tk-wrapper`;
            editTaskObj(findTaskObj(getNumFromStr(callerId)));
            updatePageTaskElements(getNumFromStr(callerId));
        }
        taskForm.reset();
        // date.value = 'Due date';
        elementVisibility(hiddenElementId, true);
        taskFormContainer.remove();
    }
}

export function removeTaskFromTaskArr(taskIndex) {
    if (taskArr.length > 0) {
        taskArr.splice(taskIndex, 1);
    } else {
        taskArr.pop();
    }
}

function removeTaskFromPage(elementId) {
    document.getElementById(`${elementId}-tk`).remove();
}

function removeTask(element) {
    if (element.id.split('-')[1] === 'del') {
        const id = getNumFromStr(element.dataset.taskid);
        
        taskArr.forEach((item, index) => {
            if (item.getId() === id) {
                removeTaskFromTaskArr(index);
                if (item.getProjectId() !== 'p' && item.getProjectId() !== 'g') {
                    removeTaskFromProject(item.getProjectId(), id);
                } 
            }
        });
        removeTaskFromPage(getNumFromStr(element.id));
    }
}

function markCompletedTasks(task, container) {
    const id = getNumFromStr(task.id);
    const taskObj = findTaskObj(id);
    const editBtn = (`${id}-edit`);

    elementVisibility(editBtn, false);
    task.classList.add('task-completed');
    container.classList.remove(`${showPriority(taskObj)}`);
    taskObj.setCompleted(true);

}

function unmarkTasks(task, container) {
    const id = getNumFromStr(task.id);
    const taskObj = findTaskObj(id);
    const editBtn = (`${id}-edit`);

    elementVisibility(editBtn, true);
    task.classList.remove('task-completed');
    taskObj.setCompleted(false);
    container.classList.add(`${showPriority(taskObj)}`);
}

function changeTaskState(event) {
    const taskcheckBox = event.target.id;
    const taskId = getNumFromStr(taskcheckBox);
    const task = document.getElementById(`${taskId}-tk`);
    const priorityIndicator = document.getElementById(`${taskId}-pind`);
    if (event.target.checked) {
        markCompletedTasks(task, priorityIndicator);
    } else {
        unmarkTasks(task, priorityIndicator);
    }
}

// Edit task 
function opentaskEditorForm(element) {
    const elementPosition = `${getNumFromStr(element.id)}-tk`;
    const taskId = element.dataset.taskid;
    const callerId = element.id;
    const taskContainer = document.getElementById(elementPosition);
    const taskWrapper = (`${elementPosition}-wrapper`);

    addTaskFormToPage(taskContainer, elementPosition);
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
    taskObj.setHeading(taskFormElementsObj.heading.value);
    taskObj.setDescription(taskFormElementsObj.description.value);
    taskObj.setDate(taskFormElementsObj.date.value);
    taskObj.setPriority(taskFormElementsObj.priority.value);
    taskObj.setAssignee(taskFormElementsObj.assignee.value);
    
    if (Number(taskFormElementsObj.project.value)) {
        projectsArr[taskObj.projectId].delTaskId(taskObj.id);
        addNewTaskToProject(Number(taskFormElementsObj.project.value), taskObj.id);
    }
    if (Number(taskObj.projectId)) {
        projectsArr[taskObj.projectId].delTaskId(taskObj.id);
    }
    taskObj.setProjectId(taskFormElementsObj.project.value);

}

function updateFormFields(taskObj) {
    const taskFormElements = getTaskFormData();
    taskFormElements.heading.value = taskObj.getHeading();
    taskFormElements.description.value = taskObj.getDescription();
    taskFormElements.date.value = taskObj.getDate();
    taskFormElements.priority.value = taskObj.getPriority();
    taskFormElements.assignee.value = taskObj.getAssignee();
    taskFormElements.project.value = taskObj.getProjectId();;
}

function updatePageTaskElements(taskId) {
    const formComponentObj = getTaskComponents(taskId);
    const taskObj = findTaskObj(taskId);

    formComponentObj.heading.textContent = taskObj.getHeading();
    formComponentObj.description.textContent = taskObj.getDescription();
    formComponentObj.date.textContent = formatDate(taskObj.getDate());
    formComponentObj.priority.textContent = capitalize(taskObj.getPriority());
    formComponentObj.name.textContent = capitalize(taskObj.getAssignee())
    formComponentObj.priorityIndicator.classList
        .replace(
            formComponentObj.priorityIndicator.classList[1],
            `priority-${taskObj.getPriority()}`
        );


}

function addEventListenerTOTaskInterfaceBtns(elementClass) {
    const taskBtn = document.querySelectorAll(`.${elementClass}`);
    taskBtn.forEach((item) => {
        item.onclick = () => {
            removeTask(item);
            if (item.id.split('-')[1] === 'edit') {
                allowSingleFormOnPage();
                opentaskEditorForm(item);
            }
        }
    });
}

function taskFormInterface(event) {
    const elementId = event.target.id;
    switch (elementId) {
        case 'add-task-btn':
            allowSingleFormOnPage();
            renderTaskForm(event.target.id);
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
}

function checkBoxInterFace(event) {
    const elementId = event.target.id;
    if (elementId.split('-')[1] === 'c') {
        changeTaskState(event);
    }
}

function allowSingleFormOnPage() {
    const taskForms = document.querySelectorAll('.task-form-container');
    const nodeLen = taskForms.length;
    if (nodeLen < 1) {
        return;
    }
    if (taskForms[0].id === 'new-task-btn-form') {
        closeTaskForm('new-task-btn');
    } else {
        closeTaskForm(taskForms[0].id);
    }
}

export default function taskFormController() {
    document.onclick = (event) => {
        checkBoxInterFace(event);
        taskFormInterface(event);
        addEventListenerTOTaskInterfaceBtns('task-interface-btn');
        addProjectEvent(event);
        sidebarEvents();
    }
}