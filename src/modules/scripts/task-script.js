import { appendTask } from './showtask.js';
import dateScript from './datepicker-script.js';
import datePicker from '../ui-modules/datepicker.js';
import assigneeForm from '../ui-modules/assignee-form.js';
import assigneeScript from './assignee-script.js';
// import { da } from 'date-fns/locale';
const taskArr = [];

const tasks = [{
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
},
{
    heading: 'Winter clothings',
    description: 'Buy Blazers',
    date: '4 Dec',
    priority: 'high',
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
},
{
    heading: 'Winter clothings',
    description: 'Buy Blazers',
    date: '4 Dec',
    priority: 'high',
    assignee: 'Saurabh',
}]

function toggleTaskForm(show, hide) {
    show.style.display = 'flex';
    hide.style.display = 'none';
}

class Task {
    constructor(heading, description, date, priority, assignee) {
        this.heading = heading;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.assignee =  assignee;
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
    
    setHeading(heading){
        this.heading = heading;
    }
    
    setDescription(description) {
        this.description = description;
    }
    
    setDate() {
        this.date = date;
    }
    
    setPriority() {
        this.priority = priority;
    }
    
    setAssignee() {
        this.assignee = assignee;
    }
} 

tasks.forEach((item) => {
   taskArr.push(new Task(item.heading, item.description, item.date, item.priority, item.assignee)) 
});

function getTaskFormData() {
    const heading = document.getElementById('tkn');
    const description = document.getElementById('tkd');
    const date = document.getElementById('date');
    const priority = document.getElementById('priority');
    const assignee = document.getElementById('assignee-btn');

    if(boolTaskEntered(heading, description)) {
        const task = new Task(heading.value, description.value, date.value, priority.value, assignee.value);
        return task;
    }
    return;
}

// create a function to check if the task heading or description is empty
function boolTaskEntered(heading, description) {
    if(heading.value !== '' || description.value !== '') {
        return true;
    }
    return false; 
}

function removeBtnInputForms() {
    const dateForm = document.getElementById('date-picker');
    const assigneeForm = document.getElementById('assignee-form');

    if(assigneeForm) {
        assigneeForm.remove();
    }
    if(dateForm) {
        dateForm.remove();
    }
}

export function getTasks() {
    return taskArr;
}

export default function taskFormController(){
    const taskFormContainer = document.querySelector('.task-form-container');
    const taskForm = document.getElementById('task-form');
    const addTaskBtn = document.getElementById('form-add-task-btn');
    const addBtn = document.querySelector('#add-task-btn');
    const datePickerContainer = document.getElementById('dp-container');
    const cancelBtn = document.querySelector('#cancel-btn');
    const assigneeFormContainer = document.getElementById('assignee-form-container');
    const assignee = document.getElementById('assignee-btn');
    const priority = document.getElementById('priority');


    addBtn.addEventListener('click', () => {
        toggleTaskForm(taskFormContainer, addBtn);
    });
    cancelBtn.addEventListener('click', () => {
        toggleTaskForm(addBtn, taskFormContainer);
        removeBtnInputForms()

    }); 
    
    addTaskBtn.addEventListener('click', () => {
        if(getTaskFormData()) {
            taskArr.push(getTaskFormData(taskFormContainer));
            taskForm.reset();
            date.value = 'Due date';
            toggleTaskForm(addBtn, taskFormContainer);
            appendTask();
        }
        console.log(taskArr)
    });


    date.addEventListener('click', () => {
        const dateForm = document.getElementById('date-picker');
        removeBtnInputForms()
        if(!dateForm) {
            datePickerContainer.innerHTML = datePicker();
            dateScript();
        } 
    });

    assignee.addEventListener('click', () => {
        const isAssigneeFormActive = document.getElementById('assignee-form');
        removeBtnInputForms()
        if(!isAssigneeFormActive) {
            assigneeFormContainer.innerHTML = assigneeForm();
            assigneeScript();
        }
    });

    priority.onclick = () => {
        removeBtnInputForms();
    }
    
}