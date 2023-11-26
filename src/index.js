import page from './modules/template.js';
import './index.css';
import taskFormController from './modules/scripts/task-script.js';


const body = document.querySelector('body');
body.appendChild(page());

// task button and task form 
taskFormController();
