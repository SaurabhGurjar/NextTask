import '../../css/content.css';

import addIcon from '../../assets/icons/invite.svg';
import { getDataTasks } from '../data.js';
import { getTasksHTML } from '../scripts/showtask.js';

export default function content() {
    return (`
        <div id="main-container">
            <div class="m-content">
                <div class="m-main-heading-container">
                    <span class="m-main-heading-text" id="mhd">Inbox</span>
                </div>
                <div class="m-task-container" id="tasks">
                    ${getTasksHTML(getDataTasks())}
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
