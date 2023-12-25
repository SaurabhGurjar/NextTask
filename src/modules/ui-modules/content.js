import '../../css/content.css';

import addIcon from '../../assets/icons/invite.svg';
import { getInboxTasks } from '../data.js';
import { getTasksHTML } from '../scripts/showtask.js';
import  projectForm  from './project-form.js';

export default function content() {
    
    return (`
        <div id="main-container">
            <div class="m-content" id="mc">
                <div class="m-main-heading-container">
                    <span class="m-main-heading-text" id="mhd" data-pageid="g">Inbox</span>
                </div>
                <div class="m-task-container" id="tasks">
                    ${getTasksHTML(getInboxTasks())}
                    </div>
                <div class="task-btn-and-taskform-container" id="tb-tf-container">
                    <button id="add-task-btn" class="add-task-btn">
                        <img src="${addIcon}" class="m-add-task-btn-icon">
                        New task
                    </button>
                </div>
            </div>
        </div>
    `);
}
